'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "69d457c5067892f55e9a1a41b556d599",
"index.html": "013daf86866dea81cafd30d81c38317b",
"/": "013daf86866dea81cafd30d81c38317b",
"main.dart.js": "753fc9bd331aec0acdafcb0923378790",
"version.json": "9f2274b7f45cf76b73addf4dc17427c9",
"assets/images/android-dark1.jpg": "ab78e3bfc381185c8d83cd0bd33949ea",
"assets/images/android-dark2.jpg": "84b5804a9f4c7bd52a6b9f816dfc6a37",
"assets/images/android-dark3.jpg": "55d4020e95692d03d670785700f69f7d",
"assets/images/android-light1.jpg": "4ca8ef510480c096c23a8d3c4a4fe453",
"assets/images/chinese-dark1.jpg": "4e3007fe5ba1e14cab0881d12541bb80",
"assets/images/english-dark1.jpg": "a634dd7c6abe2289a409027f1165b5ef",
"assets/images/chinese-light1.jpg": "2ffa90a910394397bae394b5564dde9d",
"assets/images/english-dark10.jpg": "697e8944db5b6f61ea79ce089a9e466c",
"assets/images/dark1.png": "24ff4e057ee6f4dc4ba36c062b46fee5",
"assets/images/dark2.png": "140857dee390fe42ed09e05f3e391d5e",
"assets/images/english-dark11.jpg": "aaaca058fdc54c8216deacb54894b885",
"assets/images/dark3.jpg": "9f3328f07f0ce7f3d5eddc936845c681",
"assets/images/english-dark3.jpg": "60d237ef0154b7887690f28cc10d5b0b",
"assets/images/english-dark12.jpg": "c10a1273c96629d08b8e291da3c90c3d",
"assets/images/english-dark13.jpg": "bfc001202ad5eca40073d3fd68c4f01c",
"assets/images/english-dark2.jpg": "2a545492d63dbb5b7477744fa36444fb",
"assets/images/english-dark5.jpg": "5eee4ae7c1e425fa927706e7a9b89c74",
"assets/images/english-dark9.jpg": "96f3b2da131173966dc2ac5067c6b288",
"assets/images/english-dark7.jpg": "5e124dc0e1b8cc7db79f74815588cff1",
"assets/images/english-dark4.jpg": "30779c771b66dbb342ba2b907f93400f",
"assets/images/english-light11.jpg": "35027cb997bebafe0b0ac72f403c5265",
"assets/images/english-dark6.jpg": "58e22f961cb7482197ee610778eaf41f",
"assets/images/english-light12.jpg": "3acede30d2cd3d7281f90360749e816c",
"assets/images/english-light3.jpg": "63f31300856a19c1a92538b58f90acb7",
"assets/images/english-light1.jpg": "c07a7158e402bdfc428780caa20ef605",
"assets/images/english-light4.jpg": "2e4ab4549e22f73b3d28fb140fdd8388",
"assets/images/english-dark8.jpg": "4cd248c226b5214f2e14ca8f683f01f5",
"assets/images/english-light13.jpg": "5ce3828fa327ae3e59c19081c538f38e",
"assets/images/english-light2.jpg": "a68db32b1ecec9b51bb6cddc625ee626",
"assets/images/english-light6.jpg": "58b1b7c08a7b1b42bd6c43045d2f16c2",
"assets/images/english-light10.jpg": "d7450d6672d89ff5468aba768d6e5489",
"assets/images/english-light5.jpg": "cde54def453480e0d77d884ea6affab8",
"assets/images/english-light8.jpg": "5c3a419f0aa25fc91536c586b1d4554e",
"assets/images/english-light7.jpg": "15933492bee927824a966972a82138e5",
"assets/images/english-light9.jpg": "adbe6f8e17ab52afb472d97ae499cf6b",
"assets/images/light2.png": "af9f92e4eba05989e91a02a45a1ccc3b",
"assets/images/light1.png": "3b460e065a0609c63b9b0bde2f37edec",
"assets/images/spain-light1.jpg": "2361a6e6bf8ee09b2a4946fcf8514094",
"assets/images/russian-dark1.jpg": "362aa57cc9b5569604adec11f83b0734",
"assets/images/spain-dark1.jpg": "5a0563c94e4126a26dcb0632e50748f4",
"assets/images/russian-light1.jpg": "b2c5a84a05060605456cc396506c583e",
"assets/fonts/CorporateSBold.otf": "7098442646fbde9778d92ee84716617a",
"assets/fonts/AtegraSansMedium.otf": "73e1bae483d46b4b176b9af88aca230a",
"assets/fonts/URWGroteskRegular.ttf": "f7f8574b35c760b380ce842a4bd46f5f",
"assets/fonts/URWGroteskLight.ttf": "7f57561230513152d279749757d8aa54",
"assets/fonts/URWGroteskExtraLight.ttf": "eb001f99166c4a77024cc2cc5131d7bb",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "ef365be4bc8e41d16d35ee41a2b95847",
"assets/AssetManifest.bin": "8b0f7b4cfc7081d7e48cb2919c014a31",
"assets/FontManifest.json": "5ca9e1db91fa59edc55260b13d813bf3",
"assets/NOTICES": "feb98d035f46a5fdf4648f836b1dcf4b",
"assets/AssetManifest.bin.json": "dcfa68fb29928e67b551ab1abc5de12c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "77d395b9e692607bd60e9dd8ff1569d6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7070d2caba07def9a25c8e5ba11f8cfc",
".git/refs/remotes/origin/main": "7070d2caba07def9a25c8e5ba11f8cfc",
".git/objects/8f/db353e4b42f901f971729029bedaa07f3f7c2c": "bf85a3154c680779753b8a54674b27ac",
".git/objects/8f/cc77b83d94b437e967bafa3b1ee6fc1d553396": "c9b4bc28616994c0ffdfcb2d98a7a3a2",
".git/objects/f6/fa7516e2daeef30da782fe208463464ffe31b2": "9215c2b0d69ad70e3b5626ee4539e9aa",
".git/objects/23/f54e14f80de24c91e88f2047d09b93b4d27e5b": "bace1ae81f3bb6e21769cf981e3d7fad",
".git/objects/18/500dc6205f307b2d9b049c89d52ed5d9784067": "96f1ef07f193b085dcd9545f8f5b3d7b",
".git/objects/18/d350e0b4d30cafb38559763ef58567c9f469f9": "dc1458d62722b1260fdf9ec2ac6956c4",
".git/objects/a6/8a8b1a2ea430b54f0f866a72b526a20a9f04cb": "b42ac683439e85d7564f9bb7d89a1969",
".git/objects/da/a52dc490a97c3e91dd0948f20b35567b8195ba": "d0c063e7adc0ce1a08fea44203669396",
".git/objects/3e/8a090f7f04a30646aeabd432953e67b4dbb03f": "b8276941f7eaa8bf2ca40918f2a4eb03",
".git/objects/9a/8e43999ccfdce6e282fde21018cb2c3f3c7016": "f9e57ff3f723182dd2e61f2104e6587e",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/be/577aed263b7013c5c70d016f552c725430936e": "eac233ff70b1951b9e1a567cc8f62bf6",
".git/objects/fa/b536bd2c3f61348c315382bf2ee65ccba328cb": "9b9e5b33ea2696210ec4757abb8ae6b7",
".git/objects/fa/154f955ed3a2f5d216ee712cd4aa63a65a2bdc": "3b0c0c5d5c87d65873d7467decff0001",
".git/objects/00/380864ffe20121c536ad5f7503b09c31c3c7eb": "a0d6c35b06823f13b28d9437a84a66fb",
".git/objects/d8/082d1ee8ee8e939c231b5f769990cbac4b44b4": "cfdb362c40a5945c523b7d3e60a3ae2c",
".git/objects/6b/4ebecb6248eec8e4e8ff5103a4c2fbf57070cd": "ae8b9bec3a43954150a34ff06279831d",
".git/objects/6b/15aaacbcf6d8a77b5ff97060793eb5db86a452": "1c285512530e060fd83781dc60ec1969",
".git/objects/ad/4cfcdc023abc7145cfb622287e0b3fdd990a20": "15c1ef97a95ef6a12a26eeba3b72f1d7",
".git/objects/ad/be105f478e20bd1901a1650817ad06d2cb4e05": "77ce1dbf604281e79d228f482f608afb",
".git/objects/d0/0af343495ed0a83e92691e23195935c610ef8e": "d187f17cebd5b7ab8c7fbbf9182fd7ee",
".git/objects/aa/d4d15c00a18e435ae88b2e4924cabf2aec779a": "31b4c5ba6b4919ae6701646b424d8f1d",
".git/objects/10/e4174a8e5e2f8493271de8ec3691b3fee5af33": "14598525e0bab0e6397df7172db468b7",
".git/objects/10/4a182ee9cebe7d0d3101371f70ee91d61f6f02": "de49860a680b2c8d27e36f9d0e8ac6ff",
".git/objects/a2/bfc060570ac286810863c14db0556648320484": "1a90dd870d2ee0c9b51498f9223b535a",
".git/objects/82/73461a6b8a11b1a75483b7d6131bd718cb360e": "f959689700c4ac249ea12545635a762d",
".git/objects/e9/8979a62cdb94a3d3802d47a225324d4670b591": "143f774a6ff48df738003b513fafe9b5",
".git/objects/e9/d22f3904dc936e769b2c0be1136ae543f457b7": "800421ef7a4f6ade96b73a13a1bf7e60",
".git/objects/e9/b3cf53b76838ce05115cac15c7de0c6b9114dc": "a70ee8d37ed442544698f2460ddbb1bb",
".git/objects/e0/195449cba1b6ad08a892068fd7e92f38062917": "0a5e6072b6718c527e9339745857294d",
".git/objects/e0/dc225642559d49141e74ce6339ed55966ca193": "49ad399fbb5c7c42c8be849c2026ded8",
".git/objects/44/f5e0736b34ae1a127abfd6031edcf8e31b3295": "384c463adb46ecbcad9b0fe4ffa0ad21",
".git/objects/44/ad19c9c9c7a4a485432a8d4acd084c0118977c": "9587c205e44137e581c931abd8bb499d",
".git/objects/5a/0254966bd1086c751f81d1feb818fbe846b332": "72afeaee2e8e574d8b8dee0e711339a8",
".git/objects/13/cf6a2342768fb5181e38b505b21c19a896b1ce": "ad7e5e62e41d556f5e4c76f8ecc41c4d",
".git/objects/d1/dc22b28c2d94eef5983cbfd1b5f405bca9bc83": "0f69ed755339570871f3de28cc9a66a7",
".git/objects/05/9b03f81b2105368bf06da0496107da4b4cea37": "d6fbd80798e2e3d31f5c266569110b84",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/ac1625cf22945e1ae70539795415fe5fffea38": "0933fbb0a1a39af5ccf97d31c1d7c698",
".git/objects/5f/4f92d6a0eebd7879df3711e5927827f0668c8c": "d81c2455fe4eaa49bf273c0410997deb",
".git/objects/86/058c4ddbeb4be8dcc891e3c7148bb7f38c795e": "a2908b0c5dd14dd203fbdc28adf82aa0",
".git/objects/fb/7476ac000ab42156e7c16f048dc556a34bb6e4": "729d1566f71ac1aa0fb9081f1689c400",
".git/objects/87/1accf63cfe14447375863d669f42f3e0c58b75": "cec65f4ad90689db0245f9b1c33502b1",
".git/objects/87/2278c111f0fa13c4cf03e4eda88a8253296e52": "05ee05a0c130f55d991a4572701c5cde",
".git/objects/83/ac7359b96667576a95f9c3b8029cbe72f8a695": "8bd8f3fa431d476da455f8f763b2fb6f",
".git/objects/e1/52f9d3e22e2797f040522c874241a8a28ba471": "6476898a516ce7ba3cb19c1738b6c996",
".git/objects/07/aa3626f78be3f09b4372ac115ecee274c9e6ad": "ec9f7ca95f0d6ee4f238a8b56b234b09",
".git/objects/92/c1e55fca956042df421dba0318137655c4ee16": "081790ada9b259c72a8a54aa430ddec8",
".git/objects/5c/ce246a5fd9e8affc8259690989a47d09f21f57": "b60d641abf20b7997172b55a1f4dc612",
".git/objects/19/4617796995f7962de0cf068707ebfd11442e4d": "c12de1fcf90eae805f59b12a0daece1f",
".git/objects/29/13cbf8b7d4764fea665c5e8df12f1b22886e2e": "d2dbc0b90d0c21dd9607eb3eb48c2ac9",
".git/objects/29/553c6aad411d25484561a37be615d531257c63": "90c0924dbe690dc8e280e7c68bdbcdf5",
".git/objects/31/8f4a4cf3f884abe225f108df7f119caa780cd7": "dcc0db86855c857eac7f9f538d000452",
".git/objects/b8/128e09dcc45b7f97096b91832444cfef5eeeaa": "58052b59c620103c2c460db8f719a617",
".git/objects/89/c28ea022f5229921f684c6519728d9070ff5b6": "803614ee3124a450a7958daa7b8dc0e2",
".git/objects/73/dcbb5f4d5403606d6d130bd03f75d93681a26c": "c8ff3c9c39e095dd535e7e2d1a0544a0",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/a5/6fd03313af6a9316855bb46dfa4f8402008ed8": "32f56c5cc207f55b53cdfeb6c8cd7ed6",
".git/objects/e6/0aed6f6cd55becd522593fb32231a138b6eded": "c8b6ac25db72dd8ed89d9537d3736d5d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/0b564d4b5f6d1412aabf460267cca58e135d95": "5925d152d0e08dcfb138af5a699fd437",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/a1/40fb1ed8a3023aab61a0e66d7efd98b987685a": "ab8d70b2afaa7252cb51fd290989e2b7",
".git/objects/7f/83a00d8b8341e131104ffcf7b6043004660b4f": "a942ce38a98c7b036c83fbfb53844d09",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/3f/81978f82be5e49c5116b3658db141d47dddc05": "3309340546792e0a2cc2fd39eb2e85cb",
".git/objects/f2/743e6e57a472d69068d30778e3278c57b22483": "5d2ccd90ad698bcbd4dc6484d8f191ae",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/2e/0ce0df454f30a371da5987e4b09522dad57e43": "78392be502a7fa659ccafa9f3cb06bdf",
".git/objects/2e/6f38034fd54c6daad5d28bf99726d6a696d924": "de9312a11d632220c0c9a914fd5ea146",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/7e/4dd6380f5fb450e726414c021888368801876c": "7d60af587fabae0057753772870037e2",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/2b/223b72ee2cfcf5a4ed7abf45a3da88e241ddf9": "49f9f46837333fbedf4f5ca045303409",
".git/objects/4a/c72c394cecc411697c4f072fafdc113470dc71": "d4279ff0b272dd0f9ab8972279b8c08c",
".git/objects/e3/854d19982fa625a75255263551754567de6e72": "54d43419548f30cc0dfdf40512cc12dd",
".git/objects/04/663e91066e94dacf5c3d8003252a610c202291": "a96cfc71554a655feb4aacbe6bc07595",
".git/objects/7b/1728353b98f4aaed28c1b61dabd9b714592780": "70e6acd9adf00a6aa1232a3d58407c60",
".git/objects/b6/e4970a9e2922b6a92b2ee5ad56f22d4abaeaac": "0bcd46fa265e38b7c80e38cf0c692dbc",
".git/objects/11/5e11532ccb5a543fb4a91696612cce3e037d3d": "c57dd00e433ea0fcc2b6b04af2084dc4",
".git/objects/3b/880e8bd5497cc8e32650c802d9a69887a88399": "5d2d8dcdaca8a237ea100db330449386",
".git/objects/35/37b7c0a3fdb1fbd2a4a73370436de73dff7319": "bb272422f0bafefc2aae4f9a4eb40292",
".git/objects/c1/a2bd6380fc9f3eaac38ec342d728e1ccf26122": "7d334cd71ac7d385712b5c44e3935015",
".git/objects/2d/a6cb3a76a16b484066c733474870c32b84dca1": "850b11727cf67ac4b1d7c9124af1af98",
".git/objects/47/3eff910a1142a95d4b0625cde0c012c87092be": "e623bde6ae21fd17fcc718d55c1c117c",
".git/objects/68/7d8170355117fb2e3c4f8ac638bfc4aeafc316": "b2af89acdc7ad5c0c2381a9e23647b1e",
".git/objects/30/1d6296220581e581a0ab9bffcd933e984025af": "c2b2f8ed2a84d985cf3753763c8dccd0",
".git/objects/60/b51f6555aba26c56418f71ac7382a08cab2b5e": "945939d8b32d62badb53aca1e28bd9df",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "42ffe08c4aa190d09f1f98a0823187cb",
".git/COMMIT_EDITMSG": "92d44796530236d723e152041e3cdf1c",
".git/index": "373c900585928e9f1dc99fd0709d0f3d",
".git/logs/HEAD": "279044b895af83d20542e4c02ffce814",
".git/logs/refs/heads/main": "94287dcd8b61e4b9578091af28d15b67",
".git/logs/refs/remotes/origin/main": "831cfdcf0bc2e7748ab48a7950d16426",
".git/ORIG_HEAD": "a28a266eac8c21d96e08ecbcf3a9b4d1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
