const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  // Categories
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Dresses' }, //0
    { name: 'Tops' }, //1
    { name: 'Pants' }, //2
    { name: 'Coats' }, //3
    { name: 'Shoes' }, //4
    { name: 'Bags' }, //5
  ]);

  console.log('categories seeded');

  // Products
  await Product.deleteMany();

  const products = await Product.insertMany([
    // Bags
    {
      name: 'The Curve',
      description:
        'The Curve in soft ivory calf and black leather inspired by the harness silhouette and finished with a high frequency debossed Seal Signature. This bag can we worn across the body by using the leather strap or over the shoulder with the strap through the leather loop folded back.',
      image: 'curve-black-white.jpg',
      category: categories[5]._id,
      price: 549.99,
      quantity: 50,
    },
    {
      name: 'The Curve',
      description:
        'The Curve in black calf leather inspired by the harness silhouette and finished with a high frequency debossed Seal Signature. This bag can we worn across the body by using the leather strap or over the shoulder with the strap through the leather loop folded back.',
      image: 'curve-black.jpg',
      category: categories[5]._id,
      price: 549.99,
      quantity: 70,
    },
    {
      name: 'The Curve',
      description:
        'The Curve in ivory calf leather inspired by the harness silhouette and finished with a high frequency debossed Seal Signature. This bag can we worn across the body by using the leather strap or over the shoulder with the strap through the leather loop folded back.',
      image: 'curve-white.jpg',
      category: categories[5]._id,
      price: 549.99,
      quantity: 40,
    },
    {
      name: 'The Four Ring',
      description:
        'Black smooth calf leather Four Ring bag. The bag can be worn multiple ways: cross the body, over the shoulder with its adjustable leather strap or hand-held as a clutch by removing the leather strap.',
      image: 'four-ring-black.jpg',
      category: categories[5]._id,
      price: 750.45,
      quantity: 200,
    },
    {
      name: 'The Four Ring',
      description:
        'Brown smooth calf leather Four Ring bag. The bag can be worn multiple ways: cross the body, over the shoulder with its adjustable leather strap or hand-held as a clutch by removing the leather strap.',
      image: 'four-ring-brown.jpg',
      category: categories[5]._id,
      price: 750.45,
      quantity: 220,
    },
    {
      name: 'The Four Ring',
      description:
        'White smooth calf leather Four Ring bag. The bag can be worn multiple ways: cross the body, over the shoulder with its adjustable leather strap or hand-held as a clutch by removing the leather strap.',
      image: 'four-ring-white.jpg',
      category: categories[5]._id,
      price: 750.45,
      quantity: 190,
    },
    {
      name: 'Jewelled Satchel',
      description:
        'Black smooth calf leather Jewelled Satchel. The bag can be worn multiple ways: hand-held using the ring handle or by doubling up the straps. Alternatively, wear over the shoulder or across the body using the leather and chain straps.',
      image: 'mini-black.jpg',
      category: categories[5]._id,
      price: 375.99,
      quantity: 156,
    },
    {
      name: 'Studded Satchel',
      description:
        'Black nappa leather Mini Jewelled Satchel embellished with silver studs. The bag can be worn multiple ways: hand-held using the ring handle or by doubling up the straps. Alternatively, wear over the shoulder or cross body using the leather and chain straps.',
      image: 'mini-studded-2.jpg',
      category: categories[5]._id,
      price: 375.99,
      quantity: 148,
    },
    {
      name: 'Studded Satchel',
      description:
        'Black nappa leather Mini Jewelled Satchel embellished with silver spikes. The bag can be worn multiple ways: hand-held using the ring handle or by doubling up the straps. Alternatively, wear over the shoulder or cross body using the leather and chain straps.',
      image: 'mini-studded.jpg',
      category: categories[5]._id,
      price: 375.99,
      quantity: 153,
    },
    // Dresses
    {
      name: 'Anemone Print Midi Dress',
      description:
        'Anemone print flower dress in black polyfaille with open back. Material: 100% Polyester',
      image: 'anemone-print.jpg',
      category: categories[0]._id,
      price: 945.95,
      quantity: 73,
    },
    {
      name: 'Asymmetric Draped',
      description:
        'Asymetric draped sleever Anemone print flower dress in rose gold polyfaille Material: 100% Polyester',
      image: 'asymmetric-draped.jpg',
      category: categories[0]._id,
      price: 934.95,
      quantity: 89,
    },
    {
      name: 'Rib Knit Dress',
      description:
        'Engineered dégradé intarsia rib knit dress with silver-finished zip detailing. Material: 100% Wool',
      image: 'degrade-rib.jpg',
      category: categories[0]._id,
      price: 845.95,
      quantity: 124,
    },
    {
      name: 'Anemone Print Dress',
      description:
        'Anemone print flower dress with dropped shoulder in ice pink polyfaille. Material: 100% Polyester',
      image: 'dropped-shoulder.jpg',
      category: categories[0]._id,
      price: 945.95,
      quantity: 63,
    },
    {
      name: 'Ottoman Stitch Dress',
      description:
        'Ice pink ottoman stitch sweetheart neckline dress with kickback detail. Material: 83% Viscose, 17% Polyester. This product is made with viscose originating from sustainably-managed, including FSC, forests.',
      image: 'ottoman-stitch.jpg',
      category: categories[0]._id,
      price: 1025.99,
      quantity: 329,
    },
    {
      name: 'Knit Dress',
      description:
        'Ivory shiny viscose laddered knit crew-neck dress with engineered paper flower print on the hem. Material: 100% Viscose. This product is made with viscose originating from sustainably-managed, including FSC, forests.',
      image: 'paper-flower-sleeves.jpg',
      category: categories[0]._id,
      price: 765.99,
      quantity: 83,
    },
    {
      name: 'Knit Dress',
      description:
        'Rose gold viscose laddered knit sleeveless dress with engineered paper flower print on the hem. Material: 100% Viscose. This product is made with viscose originating from sustainably-managed, including FSC, forests.',
      image: 'paper-flower.jpg',
      category: categories[0]._id,
      price: 745.99,
      quantity: 76,
    },
    {
      name: 'Panelled dress',
      description:
        'V-neck midi dress with silver zip detailing in rose gold polyfaille. Material: 100% Polyester',
      image: 'pierced-panelled.jpg',
      category: categories[0]._id,
      price: 985.99,
      quantity: 193,
    },
    {
      name: 'Zip Detail Polyfaille Mini Dress',
      description:
        'Square neck mini dress in coral polyfaille with a box pleat skirt and silver zip detailing. Material: 100% Polyester',
      image: 'zip-detail.jpg',
      category: categories[0]._id,
      price: 589.99,
      quantity: 171,
    },
    // Coats
    {
      name: 'Camel Coat',
      description:
        'Tailored double-breasted camel coat with masculine square shoulders. Finished with flap pockets and horn button fastenings. Material: 100% Camel',
      image: 'double-breasted-camel.jpg',
      category: categories[3]._id,
      price: 549.99,
      quantity: 89,
    },
    {
      name: 'Embroidered Coat',
      description:
        'Double-breasted tailored coat with dropped shoulders and wide lapels in black scuba twill with appliquéd dove, heart, iris and anemone embroideries. Material: 75% Wool, 25% Polyamide',
      image: 'embroidered-double.jpg',
      category: categories[3]._id,
      price: 749.99,
      quantity: 295,
    },
    {
      name: 'Herringbone Drape Coat',
      description:
        'Single-breasted drape coat in navy herringbone with drape detailing. Finished with horn button fastenings. Material: 99% Wool, 1% Cashmere',
      image: 'herringbone.jpg',
      category: categories[3]._id,
      price: 729.99,
      quantity: 229,
    },
    {
      name: 'Exploded Trench Coat',
      description:
        'Beige trench coat in cotton gabardine and polyfaille with pleated detailing and exploded sleeves. Finished with horn buttons and a leather belt buckle. Material: 100% Cotton',
      image: 'hybrid-explorer.jpg',
      category: categories[3]._id,
      price: 639.95,
      quantity: 83,
    },
    {
      name: 'Military Trench Coat',
      description:
        'Navy felt military coat spliced with beige cotton trench featuring silver military buttons and finished with a belted waist. Material: 100% Cotton',
      image: 'hybrid-military.jpg',
      category: categories[3]._id,
      price: 979.95,
      quantity: 26,
    },
    {
      name: 'Hybrid Coat',
      description:
        'Hybrid single-breasted camel coat with padded sleeves and a contrasting military green parka back featuring a McKing Graffiti jacquard. The coat has notch lapels with a velvet collar. Finished with horn button fastenings. Material: 100% Cotton',
      image: 'mcqueen.jpg',
      category: categories[3]._id,
      price: 879.95,
      quantity: 301,
    },
    {
      name: 'Oversize Coat',
      description:
        'Oversized double-breasted coat in black bonded suiting with silver finished zip detailing and military buttons. Material: 100% Wool',
      image: 'spiral-zip.jpg',
      category: categories[3]._id,
      price: 579.95,
      quantity: 284,
    },
    {
      name: 'Spliced Drape Coat',
      description:
        'Spliced drape coat with exploded gathered sleeves, and gathered polytaffeta panels, on a wool suiting tailored base. Material: 100% Polyester',
      image: 'spliced-draped-black.jpg',
      category: categories[3]._id,
      price: 864.99,
      quantity: 94,
    },
    {
      name: 'Jacquard Coat',
      description:
        'Oversized coat with in an all-over William Blake Dante jacquard. The coat has dropped shoulders, flap pockets and concealed button fastenings. Material: 42% Viscose, 33% Polyester, 13% Modal, 12% Wool',
      image: 'william-blake.jpg',
      category: categories[3]._id,
      price: 839.95,
      quantity: 274,
    },
    // Tops
    {
      name: 'Asymmetric Detail Shirt',
      description:
        'Optical white organic cotton popeline asymmetric shirt, cropped on the front and long on the back, featuring trenchcoat details. Material: 100% Cotton',
      image: 'asymmetric-trench.jpg',
      category: categories[1]._id,
      price: 439.95,
      quantity: 82,
    },
    {
      name: 'Drop sleeves T-shirt',
      description:
        'Black cotton t-shirt featuring tonal poplin exploded sleeves. Material: 100% Cotton',
      image: 'drop-sleeves-tee.jpg',
      category: categories[1]._id,
      price: 189.99,
      quantity: 429,
    },
    {
      name: 'Embroidered T-Shirt',
      description:
        'T-shirt in white jersey with trailing silver lily pad embroideries, using beads, sequins and crystals. Material: 100% Cotton',
      image: 'embroidered-lily-pad.jpg',
      category: categories[1]._id,
      price: 624.99,
      quantity: 72,
    },
    {
      name: 'Gathered Sleeve Shirt',
      description:
        'White cotton poplin shirt with gathered sleeves. Material: 100% Cotton',
      image: 'gathered-sleeve.jpg',
      category: categories[1]._id,
      price: 379.95,
      quantity: 126,
    },
    {
      name: 'Lilypad T-Shirt',
      description:
        'T-shirt in white jersey with trailing silver lily pad embroideries around the neckline. Material: 100% Cotton',
      image: 'lily-pad-tee.jpg',
      category: categories[1]._id,
      price: 425.99,
      quantity: 175,
    },
    {
      name: 'Embroidery Asymmetric Top',
      description:
        'Asymmetric corseted t-shirt in white jersey and ivory silk tulle pieced with a patchwork of trailing silver lily pad embroideries. Material: 100% Cotton',
      image: 'lily-pad.jpg',
      category: categories[1]._id,
      price: 965.99,
      quantity: 42,
    },
    {
      name: 'Ruffled Collar Shirt',
      description:
        'White cotton poplin shirt with a ruffle collar. Finished with button fastenings on the centre front. Material: 100% Cotton',
      image: 'ruffles-collar.jpg',
      category: categories[1]._id,
      price: 345.99,
      quantity: 174,
    },
    {
      name: 'Jersey Bosysuit',
      description:
        'Black jersey bodysuit with a sweetheart neckline and puff shoulders and long sleeves. Material: 63% Viscose, 32% Polyamide,5% Elastan',
      image: 'sweetheart-bodysuit.jpg',
      category: categories[1]._id,
      price: 270,
      quantity: 203,
    },
    {
      name: 'Tulle Sleeve T-Shirt',
      description:
        'Black cotton jersey t-shirt with exploded tulle sleeves. Material: 100% Cotton',
      image: 'tuelle-sleeve.jpg',
      category: categories[1]._id,
      price: 150,
      quantity: 284,
    },
    // Pants
    {
      name: 'Denim Trouser',
      description:
        'Hybrid boyfriend jeans in dark blue denim with contrast cavalry wool twill panelling and tobacco topstitching. Material: 100% Cotton',
      image: 'hybrid-denim-1.jpg',
      category: categories[2]._id,
      price: 247.95,
      quantity: 163,
    },
    {
      name: 'Leather Panel Trouser',
      description:
        'Hybrid leather and denim boyfriend jeans Material: 100% Cotton',
      image: 'hybrid-denim-2.jpg',
      category: categories[2]._id,
      price: 229.95,
      quantity: 94,
    },
    {
      name: 'Fitted Trouser',
      description:
        'Fitted stretch mid-rise skinny jeans with black leather panelling and contrast top stitch detailing. Material: 98% Cotton, 2% Elastan',
      image: 'hybrid-denim-3.jpg',
      category: categories[2]._id,
      price: 249.99,
      quantity: 158,
    },
    {
      name: 'Lace High-Waisted Trouser',
      description:
        'Lacquered lace high-waisted cigarette trousers. Concealed zip fastening on centre front. Material: 70% Cotton,20% Viscose,10% Polyamide',
      image: 'lace-black.jpg',
      category: categories[2]._id,
      price: 329.99,
      quantity: 169,
    },
    {
      name: 'Crepe Zip Trouser',
      description:
        'Cigarette trousers in light ivory leaf crepe featuring silver-finished zips. Concealed zip fastening on centre front.',
      image: 'leaf-crepe-white.jpg',
      category: categories[2]._id,
      price: 289.99,
      quantity: 84,
    },
    {
      name: 'Military Cuff Trouser',
      description:
        'Military-inspired trousers in optical white cotton gabardine with cuff detailing and side zip pockets. Concealed zip fastening on centre front. Material: 100% Cotton',
      image: 'military-cuff-white.jpg',
      category: categories[2]._id,
      price: 234.99,
      quantity: 123,
    },
    {
      name: 'Peg Trouser',
      description:
        'Peg trouser in Prince of Wales with turn-up detailing. Concealed zip fastening on centre front. Material: 100% Virgin Wool',
      image: 'prince-wales.jpg',
      category: categories[2]._id,
      price: 287.95,
      quantity: 173,
    },
    {
      name: 'Tuxedo Trouser',
      description:
        'Black peg trousers in wool tailoring with duchesse tuxedo side bands and pleat detailing. Concealed zip fastening on centre front. Material: 100% Wool',
      image: 'tuxedo-peg-black.jpg',
      category: categories[2]._id,
      price: 239.95,
      quantity: 46,
    },
    {
      name: 'Wide Leg Trouser',
      description:
        'High-waisted wide leg trousers in black light wool silk with front-pleat details. Concealed zip fastening on centre front. Material: 63% Wool,25% Silk,12% Polyamide',
      image: 'wide-leg-black.jpg',
      category: categories[2]._id,
      price: 425.99,
      quantity: 421,
    },
    // Shoes
    {
      name: 'Slim Tread Boot',
      description:
        'White scuba stretch Slim Tread boot with a silver-finished zip, a contrasting casual day rubber sole and a lacquered leather chunky heel. Boot silhouette with a round toe shape. Finished with an Alexandra McKing signature on the sole.',
      image: 'slim-tread.jpg',
      category: categories[4]._id,
      price: 500,
      quantity: 49,
    },
    {
      name: 'Heeled Chelsea Boot',
      description:
        'Ivory shine brush-off leather Chelsea boot with a thick rubber tread sole and stacked heel. The boot features contrasting elastic side panels. Boot silhouette with a round toe shape. Finished with an Alexandra McKing signature on the sole.',
      image: 'tread-chelsea.jpg',
      category: categories[4]._id,
      price: 450,
      quantity: 253,
    },
    {
      name: 'Spiked Boot',
      description:
        'Black shiny calfskin leather lace-up boot with silver-finish punk studs on the heel and a thick oversized rubber tread sole. Boot silhouette with a round toe shape. Finished with an Alexandra McKing signature on the sole.',
      image: 'tread-lace-up-spiked.jpg',
      category: categories[4]._id,
      price: 460,
      quantity: 68,
    },
    {
      name: 'Studded High Boot',
      description:
        'Black shiny calfskin leather lace-up boot embellished with faceted spikey studs and a thick oversized rubber tread sole. Knee high boot silhouette with buckle detailing and a round toe shape. Finished with a side zip fastening.',
      image: 'tread-lace-up-studded.jpg',
      category: categories[4]._id,
      price: 560,
      quantity: 37,
    },
    {
      name: 'Lace Up Boot',
      description:
        'Black shiny calfskin leather lace-up boot with a thick oversized rubber tread sole. Knee high boot silhouette with buckle detailing and a round toe shape. Finished with a side zip fastening.',
      image: 'tread-lace-up.jpg',
      category: categories[4]._id,
      price: 450,
      quantity: 283,
    },
    {
      name: 'Tread Slick Boot',
      description:
        'Dove grey canvas lace-up boot with a contrasting white lightweight oversized rubber tread sole. The boot is detailed with a textured rubber wrap and tonal Alexandra McKing signature, finished with a signature ribbon on the back of boot. Round toe shape boot silhoutte details rubber toe cap.',
      image: 'tread-slick-grey.jpg',
      category: categories[4]._id,
      price: 250,
      quantity: 176,
    },
    {
      name: 'Tread Slick Boot',
      description:
        'White rubberised lace-up boot with a contrasting tea rose lightweight oversized rubber tread sole. The boot is detailed with a textured rubber wrap and tonal Alexandra McKing signature, finished with a signature ribbon on the back of boot. Round toe shape boot silhoutte details rubber toe cap.',
      image: 'tread-slick-peach.jpg',
      category: categories[4]._id,
      price: 250,
      quantity: 118,
    },
    {
      name: 'Wanderer Boot',
      description:
        'Black shiny spazzolato calf leather lace-up boot with a natural curly shearling lining, top-stitch detailing and an exaggerated flared rubber lug sole. Boot silhouette with a round toe shape. Finished with an Alexandra McKing signature on tongue and Alexandra McKing seal logo in high relief on the heel counter.',
      image: 'wander-boot.jpg',
      category: categories[4]._id,
      price: 220,
      quantity: 93,
    },
    {
      name: 'Chelsea Boot',
      description:
        'Ivory shiny spazzolato calf leather Chelsea mid-height boot with top-stitch detailing and an exaggerated flared rubber lug sole and stacked heel. Boot silhouette with a round toe shape. Finished with an Alexandra McKing signature on tongue and Alexandra McKing seal logo in high relief on the heel counter.',
      image: 'wander-chelsea.jpg',
      category: categories[4]._id,
      price: 230,
      quantity: 134,
    },
  ]);

  console.log('products seeded');

  //Users
  await User.deleteMany();

  await User.create({
    firstName: 'Sandra',
    lastName: 'Lopez',
    email: 'Sandy@email.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Alexandra',
    lastName: 'McKing',
    email: 'AlexM@email.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});
