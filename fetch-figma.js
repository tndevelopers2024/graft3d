import dotenv from "dotenv";
import https from "https";
dotenv.config({ path: ".env.development" });

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

const pageNameArg = process.argv[2];
if (!pageNameArg) {
    console.error(
        "Please provide a page name to search for. Example: node fetch-figma.js 'elucis next'",
    );
    process.exit(1);
}
const SEARCH_TERM = pageNameArg.toLowerCase();

const options = {
    hostname: "api.figma.com",
    path: `/v1/files/${FILE_KEY}`,
    method: "GET",
    headers: {
        "X-Figma-Token": TOKEN,
    },
};

const req = https.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => {
        data += chunk;
    });
    res.on("end", () => {
        try {
            const json = JSON.parse(data);
            if (json.err) {
                console.error("Figma API Error:", json.err);
                process.exit(1);
            }

            let targetNode = null;

            function searchNode(node) {
                if (
                    node.name &&
                    node.name.toLowerCase().includes(SEARCH_TERM)
                ) {
                    targetNode = node;
                    return true;
                }
                if (node.children) {
                    for (const child of node.children) {
                        if (searchNode(child)) return true;
                    }
                }
                return false;
            }

            searchNode(json.document);

            if (!targetNode) {
                console.log(`Could not find '${pageNameArg}' node.`);
                process.exit(0);
            }

            console.log(
                `Found Target Node: ${targetNode.name} (${targetNode.type})`,
            );

            // Let's assume the immediate children of this node are the sections
            const sections = targetNode.children || [];
            console.log(`Found ${sections.length} top-level sections.`);

            sections.forEach((section, i) => {
                console.log(`\n--- Section ${i + 1}: ${section.name} ---`);
                let texts = [];
                function extractText(node) {
                    if (node.type === "TEXT" && node.characters) {
                        texts.push(node.characters.trim().replace(/\n/g, " "));
                    }
                    if (node.children) {
                        node.children.forEach(extractText);
                    }
                }
                extractText(section);
                console.log("Texts:", texts.join(" | "));
            });
        } catch (e) {
            console.error("Error parsing JSON:", e);
        }
    });
});

req.on("error", (e) => {
    console.error("Request error:", e);
});

req.end();
