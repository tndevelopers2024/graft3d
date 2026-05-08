import Image from "next/image";
import Link from "next/link";

const rangeItems = [
  {
    title: "Cranium",
    description: "The portion of the skull that encloses and protects the brain",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/Rectangle-25-q5h1xhcq50ulk4iwmc895ibfxpsfbqfyys4kx7f45g.png",
    href: "https://shop.graft3d.com/product/cranium/",
  },
  {
    title: "Mandible",
    description: "The lower jawbone",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/Rectangle-11-q5h1x7yc8ohqc0wk585zgkotzv2r6renlhlq4ft1vo.png",
    href: "https://shop.graft3d.com/product/mandible/",
  },
  {
    title: "Clavicle",
    description: "The collarbone",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/dfdfdsfsdfsdfsdvc-1-q5h1wxm45i4fh7c0bpprzt1s1e60qx8dsao4vu0ucg.png",
      href: "https://shop.graft3d.com/product/clavicle/",
  },
  {
    title: "Scapula",
    description: "The shoulder blade",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/vhgchcgh-1-q5h1xmzra12bhsappeo0kgw7i10mlx2czk1hsv6r44.png",
      href: "https://shop.graft3d.com/product/scapula/",
  },
  {
    title: "Sternum",
    description: "The breastbone",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/Rectangle-18-q5h1xfh1rcs0wwlmxbf00isiqy1owc8iaitlynhwhw.png",
      href: "https://shop.graft3d.com/product/sternum/",
  },
  {
    title: "Ribs",
    description: "The bones that form the rib cage",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/vbcvbnc-1-q5h1xl42wczqukdg0durfhdab99w6iuwbaqiub9jgk.png",
      href: "https://shop.graft3d.com/product/ribs/",
  },
  {
    title: "Humerus",
    description: "The upper arm bone",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/fgvf-1-q5h1x2bb3oa0ed4r25q81m42fjujwks9kpot8s1ex0.png",
      href: "https://shop.graft3d.com/product/humerus/",
  },
  {
    title: "Radius and ulna",
    description: "The shoulder blade",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/Rectangle-12-q5h1x8w6fij0nmv6zqkm12gal8y4egidxm97lprnpg.png",
      href: "https://shop.graft3d.com/product/radius-and-ulna/",
  },
  {
    title: "Carpals",
    description: "The bones of the wrist",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/wewfrdgt-1-q5h1xnxlgv3lte9cjx2n4yno3evztm63booza55cxw.png",
      href: "https://shop.graft3d.com/product/hand-carpal/",
  },
  {
    title: "Metacarpals",
    description: "The bones of the hand (excluding the fingers)",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/Rectangle-13-q5h1xarut6llausgordv61z7s0outupulvk6k9ovd0.png",
      href: "https://shop.graft3d.com/product/metacarpalhand/",
  },
  {
    title: "Phalanges",
    description: "The bones of the fingers and toes",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/lllllll-1-q5h1x62nv0f5oszag7cqbl5wt3c0rd76x8ar5vvu84.png",
      href: "https://shop.graft3d.com/product/phalangeshand/",
  },
  {
    title: "Femur",
    description: "The thigh bone",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/Rectangle-15-q5h1xcnj6uo5y2pqds74b1i4ysfl98xba4v5itm30k.png",
      href: "https://shop.graft3d.com/product/femur/",
  },
  {
    title: "Patella",
    description: "The kneecap",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/dsfdf-1-q5h1x0fmq07fr57hd4wywml58s3th6kswgdua8479g.png",
      href: "https://shop.graft3d.com/product/patella/",
  },
  {
    title: "Tibia and fibula",
    description: "The bones of the lower leg",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/Rectangle-16-q5h1xej7kiqqlan02t0dg1125k6bon4rye64hdjao4.png",
      href: "https://shop.graft3d.com/product/tibia/",
  },
  {
    title: "Tarsals",
    description: "The bones of the ankle",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/ulull-1-q5h1xj8eiox67cg6bd1iahud4hj5r4nfn1fjvrcbt0.png",
      href: "https://shop.graft3d.com/product/tarsals/",
  },
  {
    title: "Metatarsals",
    description: "The bones of the foot (excluding the toes)",
    image:
      "/images/asthi-bone-like-3d-printed-training-models/fhghgh-1-q5h1x46zhccl1l20r6jh6lmzmblabyzq8yzs7bymkk.png",
      href: "https://shop.graft3d.com/product/metatarsals/",
  },
];

const RangeSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1367px] mx-auto px-4 py-10">
        <h2
          className="text-center text-[30px] font-semibold text-[#1B6DB1]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Asthi&apos;s Range of Bone-Like 3D-Printed Training Models
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {rangeItems.map((item) => {
            const image = (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            );

            return (
              <div key={item.title} className="text-center">
                <div className="relative w-full h-[230px] md:h-[230px] mx-auto">
                  {item.href ? <Link href={item.href}>{image}</Link> : image}
                </div>
                <h3 className="mt-4 text-[24px] font-bold text-black">
                  {item.href ? (
                    <Link href={item.href} className="hover:text-[#1B6DB1]">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-[16px] text-black -mt-2">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RangeSection;
