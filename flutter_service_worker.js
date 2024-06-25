'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a4c794c60f33987390e850f6f9020ca9",
"assets/AssetManifest.bin.json": "1caf0846835e84a35e090dbab54bdcf9",
"assets/AssetManifest.json": "9008b8dae6f9dbf6cd651da427b19639",
"assets/assets/img/ar/ar_draping_fashion.png": "80227bdf61f49a962df4251dde44420c",
"assets/assets/img/ar/ar_draping_hair.png": "1f831804c75b62f5b3bf266e5507d77b",
"assets/assets/img/ar/ar_draping_lip.png": "e068b93a1f4d8b33bd66946cf39e1a58",
"assets/assets/img/ar/ar_draping_makeup.png": "51f1634fcd2b028cfb56ff10f4c86c8e",
"assets/assets/img/ar/draping_fashion_tone_1.png": "4675782c3122c6c5174f5a367816d7d1",
"assets/assets/img/ar/draping_fashion_tone_10.png": "8788c8451161372f5dabfd81b7423569",
"assets/assets/img/ar/draping_fashion_tone_11.png": "8f488ed884e48da55c4bb1b715b0bb53",
"assets/assets/img/ar/draping_fashion_tone_12.png": "92b04566093d8537738f1d50b86ad624",
"assets/assets/img/ar/draping_fashion_tone_2.png": "01d9fcdfc68672896e7a5b92d143e23a",
"assets/assets/img/ar/draping_fashion_tone_3.png": "03a330ba61ffe35dd22a9624bc84efcc",
"assets/assets/img/ar/draping_fashion_tone_4.png": "d137dec48ad059f74dda4f00c119531f",
"assets/assets/img/ar/draping_fashion_tone_5.png": "ebaa7f44b870fc8f90406b3b9bdc80f9",
"assets/assets/img/ar/draping_fashion_tone_6.png": "b00dc2ad73b73a257c8cb365c7004561",
"assets/assets/img/ar/draping_fashion_tone_7.png": "009f6510eae2f6e8fc02504053b1ce29",
"assets/assets/img/ar/draping_fashion_tone_8.png": "6e5b136e4c9a68f14a7ab7208de672d3",
"assets/assets/img/ar/draping_fashion_tone_9.png": "f2d1b129ac048ca961622138cee1cc08",
"assets/assets/img/ar/draping_hair_0.png": "ee9588f957ca04763c27ee2d570c6255",
"assets/assets/img/ar/draping_hair_1.png": "af05897c3cf83048d9abe3f88330cf8c",
"assets/assets/img/ar/draping_hair_10.png": "c15510d33c147b70ae91f479a6830ad8",
"assets/assets/img/ar/draping_hair_11.png": "85364b5559ef8dd90bb42c63d8a7aaa3",
"assets/assets/img/ar/draping_hair_12.png": "8d354680d7780e751ebdf2721c81b23e",
"assets/assets/img/ar/draping_hair_13.png": "5a9868a1548b234e9701103436e87c4d",
"assets/assets/img/ar/draping_hair_2.png": "7b6cfa609c73f73b73e7feca4d68df4a",
"assets/assets/img/ar/draping_hair_3.png": "878913a0ee138efdc093b6630a5a0a6d",
"assets/assets/img/ar/draping_hair_4.png": "77489de4947da5de47c0ae8dc81dc52c",
"assets/assets/img/ar/draping_hair_5.png": "747aff5676b3333e5bd6f43c04eaeb1b",
"assets/assets/img/ar/draping_hair_6.png": "2851abace70067e47bd79de0a0dd6e60",
"assets/assets/img/ar/draping_hair_7.png": "681e5c0ab5b974be10866a817bfa735a",
"assets/assets/img/ar/draping_hair_8.png": "ae0f38b0756bcbd12f1b643a0caa8c46",
"assets/assets/img/ar/draping_hair_9.png": "6ff0e792520ee156b79e26347f864740",
"assets/assets/img/ar/draping_makeup_1.png": "2ef74665648d82666cd144fb1bc3a2cc",
"assets/assets/img/ar/draping_makeup_10.png": "e1da7971f06a9ae421f8d40000369633",
"assets/assets/img/ar/draping_makeup_11.png": "d77ba6572f6c8830bc5a80e2e753bb3b",
"assets/assets/img/ar/draping_makeup_12.png": "3db316f58a9f88251c21c2bd25b9f2eb",
"assets/assets/img/ar/draping_makeup_13.png": "9d90f1ec43512e982669c3d3f9248dca",
"assets/assets/img/ar/draping_makeup_14.png": "45b39ce55ef6ad4640a82a677762f601",
"assets/assets/img/ar/draping_makeup_15.png": "555dfd0a4ffd94ecc61bd6cb25f4cdc6",
"assets/assets/img/ar/draping_makeup_16.png": "0dd3a483ab5554b6025321d9aa70777d",
"assets/assets/img/ar/draping_makeup_2.png": "d79408f33a5a41b7abfc13cb3ef4a5dd",
"assets/assets/img/ar/draping_makeup_3.png": "4aa593585bb5159b0864d0f83bd96e59",
"assets/assets/img/ar/draping_makeup_4.png": "bdd6eb78a46bc9997c9f4632727cf848",
"assets/assets/img/ar/draping_makeup_5.png": "d865d22018ea2e24efb73a15d20cdbb6",
"assets/assets/img/ar/draping_makeup_6.png": "b396cb91468063fc6d265b17d4b9288e",
"assets/assets/img/ar/draping_makeup_7.png": "395940b57577ba422fd4068e0abdd94b",
"assets/assets/img/ar/draping_makeup_8.png": "ca38a4faa077552945e69c800b020926",
"assets/assets/img/ar/draping_makeup_9.png": "a2c7cb668b2bd7fba192bc14409d5e93",
"assets/assets/img/ar/none.png": "adc7e1ae69c13813986dd1db5c907735",
"assets/assets/img/cccs/cccs_1.svg": "193da9f973b4c07ac57219b6d10cd517",
"assets/assets/img/cccs/cccs_10.svg": "0c96f8f52b6b09e6b6d0699b3049a818",
"assets/assets/img/cccs/cccs_11.svg": "cc1d78cbd7af3198355fbf87db8e363b",
"assets/assets/img/cccs/cccs_12.svg": "a662955acd2af5e7a6c952d920d9348f",
"assets/assets/img/cccs/cccs_13.svg": "51fe41fd6595e286fdec84cdcda66b9e",
"assets/assets/img/cccs/cccs_14.svg": "30ffc13dd22af57de9504c23b8f1e270",
"assets/assets/img/cccs/cccs_15.svg": "84ddf1756a6d6d800183d1279a4868ac",
"assets/assets/img/cccs/cccs_16.svg": "bd19d15a4b1f85518cf68472293df47f",
"assets/assets/img/cccs/cccs_17.svg": "8e77b8f25faab4390283cbd4d7d629e3",
"assets/assets/img/cccs/cccs_18.svg": "fca01e0bf24314b3f67f0b9529427d3a",
"assets/assets/img/cccs/cccs_19.svg": "1f463a5178ae9f5576a3a04a8a925e7b",
"assets/assets/img/cccs/cccs_2.svg": "8786f9ff5bd2ec08205f45d4fe58bf18",
"assets/assets/img/cccs/cccs_20.svg": "2b49b3ec323229c7a5f0e192e02298f8",
"assets/assets/img/cccs/cccs_21.svg": "a6c9a9aaa10cc3eaf35b23339555e98e",
"assets/assets/img/cccs/cccs_22.svg": "2aa23309482e83b673730bdac4b9e99b",
"assets/assets/img/cccs/cccs_3.svg": "49c730c2ed6682dd44e4a8873025c491",
"assets/assets/img/cccs/cccs_4.svg": "253ce2423ffe5f73a5eeb2c615beb1f2",
"assets/assets/img/cccs/cccs_5.svg": "9a9d66d43c6507e443579765a223fab4",
"assets/assets/img/cccs/cccs_6.svg": "4eaa9e9d86db193de07a7da155b2b86c",
"assets/assets/img/cccs/cccs_7.svg": "b377097eee6af4bc5e2fb755d5341def",
"assets/assets/img/cccs/cccs_8.svg": "af1515a5523bc60235ec8262dbbbac2b",
"assets/assets/img/cccs/cccs_9.svg": "d232924d6be9b03466ea23cf5c89b9ac",
"assets/assets/img/cccs/cccs_background.svg": "813b7150a0bc58aafcb324a26c5f3892",
"assets/assets/img/cccs/cccs_icon_1.svg": "d03e259a3b0c0377be44d5f374ec8608",
"assets/assets/img/cccs/cccs_icon_10.svg": "b1a67484a50eabf1924baf08443f4205",
"assets/assets/img/cccs/cccs_icon_11.svg": "123f4a6af03361ad29a7fba05c762025",
"assets/assets/img/cccs/cccs_icon_12.svg": "d1be8f08f5920bb6429b205c753f7de1",
"assets/assets/img/cccs/cccs_icon_13.svg": "dc47dc30494bcfb3af6b1cf8ca5c93c6",
"assets/assets/img/cccs/cccs_icon_14.svg": "446de6d542f329981f645070d696415e",
"assets/assets/img/cccs/cccs_icon_15.svg": "aae435ec9ce824c459b50dcb3a1829d0",
"assets/assets/img/cccs/cccs_icon_16.svg": "2bf72df7748f79b8a9f5bfee0d410928",
"assets/assets/img/cccs/cccs_icon_17.svg": "fb85b8d3caccbcd28f6144279e436cec",
"assets/assets/img/cccs/cccs_icon_18.svg": "aaff17e23c67593084fc7ed829aeca71",
"assets/assets/img/cccs/cccs_icon_19.svg": "76634231ee8eb68a8e6db3c204d4208d",
"assets/assets/img/cccs/cccs_icon_2.svg": "774c59c9fbe284aa23ba06217ae1b3ad",
"assets/assets/img/cccs/cccs_icon_20.svg": "b087f3eee0ccb7bffba0281f0d423bc9",
"assets/assets/img/cccs/cccs_icon_21.svg": "a970af47129d0d3c43a6738d92d8653f",
"assets/assets/img/cccs/cccs_icon_3.svg": "42fd4e6f3a9be777057b6cfe32c6c84b",
"assets/assets/img/cccs/cccs_icon_4.svg": "e493644f6797d3a9babda26ef76d00fa",
"assets/assets/img/cccs/cccs_icon_5.svg": "4e2214f1303a203674d529bcce57d382",
"assets/assets/img/cccs/cccs_icon_6.svg": "fb89092440d2ea1b26d8b61e8c3903f2",
"assets/assets/img/cccs/cccs_icon_7.svg": "a4b6360485edd93882b39536b04d502c",
"assets/assets/img/cccs/cccs_icon_8.svg": "d60b9b0f98651acccfb8a13fb5dc7f86",
"assets/assets/img/cccs/cccs_icon_9.svg": "9ba9fefb44019f5f65b0bcf626eadcdf",
"assets/assets/img/personality/blue.png": "62555700d94bf7001cb999ae9d8c9ea6",
"assets/assets/img/personality/blue_green.png": "08fd36b31031b85457827487da22a63d",
"assets/assets/img/personality/green.png": "23df570a1d1c48a8b3eda9207c52a257",
"assets/assets/img/personality/indigo.png": "a245d6fce497924ed17945a321c53521",
"assets/assets/img/personality/keyword_blue.png": "70a99a47a46b949798d717c7d4f77105",
"assets/assets/img/personality/keyword_blue_green.png": "ca8367b409a75329cb7ec3be2967c186",
"assets/assets/img/personality/keyword_green.png": "0660349733d94edb3095a7ccafe59ad8",
"assets/assets/img/personality/keyword_indigo.png": "061a0e2a595047e63b294bbb517ec4bb",
"assets/assets/img/personality/keyword_magenta.png": "c51a70fec1339d59625f77508d2b7791",
"assets/assets/img/personality/keyword_orange.png": "035a2f25f4ce7bfc426d9ce23901280f",
"assets/assets/img/personality/keyword_purple.png": "51b7d033e75b6ec8c61e2fd98961f525",
"assets/assets/img/personality/keyword_red.png": "098c43fdf1956bce6b0224e560755230",
"assets/assets/img/personality/keyword_red_orange.png": "19fba22723faa5517f2020fabc72e8e5",
"assets/assets/img/personality/keyword_turquoise.png": "e1d074d93bcadf9956bb5a8d82b50a24",
"assets/assets/img/personality/keyword_yellow.png": "6b4407a208b9f2d4f733be341c0f0e93",
"assets/assets/img/personality/keyword_yellow_green.png": "de1859290a08f79d3485cde48744af92",
"assets/assets/img/personality/magenta.png": "25e1a1a3569cdcda397ac482bd75413b",
"assets/assets/img/personality/orange.png": "d041e048710e60a15c7182cc5c1a447b",
"assets/assets/img/personality/purple.png": "facae726c40e56c926c001ea1c88ae6b",
"assets/assets/img/personality/red.png": "18da0be57945beb18b45dcc5da517c03",
"assets/assets/img/personality/red_orange.png": "c1711ea9f77f61663dcc43ca3914beb0",
"assets/assets/img/personality/turquoise.png": "2f33bf9ef1deb9d2aded4a957cf86fec",
"assets/assets/img/personality/yellow.png": "1592b5c9eb4743128ce56439e2ef8214",
"assets/assets/img/personality/yellow_green.png": "11e04b720b10d4c8e9c9eb206f43f2c2",
"assets/assets/img/png/attributes_background_1.png": "d34bb0efd992cbab373c65a25160400e",
"assets/assets/img/png/attributes_background_2.png": "7af56c2b45d36d949cf857b8ce069e49",
"assets/assets/img/png/attributes_background_3.png": "54ce2c0a14e41ea2dca66e216a79a45f",
"assets/assets/img/png/attributes_background_4.png": "76e4f8f2ccc9af60c45325f5a2ac6405",
"assets/assets/img/png/attributes_button_1.png": "7d90ca0927208e287659ba1f959168e1",
"assets/assets/img/png/attributes_button_2.png": "847a6b7b661961544fc06b2ab088c44a",
"assets/assets/img/png/attributes_button_3.png": "1dd392412f2072050e14f9a3d55ed8a8",
"assets/assets/img/png/attributes_button_4.png": "38df5e75fd659f659fd5228b53eaec9f",
"assets/assets/img/png/attributes_element_1.png": "d891f244d744e70a7d1f4e8cca9a02f6",
"assets/assets/img/png/attributes_element_2.png": "102fd3c196c9b492da9857f06c024697",
"assets/assets/img/png/attributes_element_3.png": "6a4fc529334fc0f01189bc22804043ce",
"assets/assets/img/png/attributes_element_4.png": "6145dcbfed68c32e1b78dd60294bea38",
"assets/assets/img/png/brand_logo.png": "a7d6d8b3f2253df4cd712edb7d6b76f8",
"assets/assets/img/png/cube_order_1.png": "9e7a18239bfc315468015cef2c80c672",
"assets/assets/img/png/cube_order_2.png": "5064d97cf0667b9732085edecbfbea15",
"assets/assets/img/png/cube_order_3.png": "d109d2a83c3b16988323681697ebca4c",
"assets/assets/img/png/draping_test1.png": "cbfd2dd53033b496e4e7c87893db70a4",
"assets/assets/img/png/draping_test2.png": "390498d3951db2e4a2d84a272e85cd99",
"assets/assets/img/png/icon_check_light.png": "c021b49510bc26dc3138abd14a94e670",
"assets/assets/img/png/icon_circle.png": "49ccca038fe7079c816e2fd2887abf96",
"assets/assets/img/png/icon_language.png": "837df371ec44e9010508529a280e42d6",
"assets/assets/img/png/men_result_range_1.png": "13b4e0a4349d34139653123570e5becf",
"assets/assets/img/png/men_result_range_1_e.png": "422fed3717e9dc2f201892952907b06a",
"assets/assets/img/png/men_result_range_2.png": "90ac6470cd099dbd339ff6f495dfa872",
"assets/assets/img/png/men_result_range_2_e.png": "090e9be464d841622ead7633df82350a",
"assets/assets/img/png/men_result_range_3.png": "504cdb9d2fc51871e586f2f3a0874ffc",
"assets/assets/img/png/men_result_range_3_e.png": "c60af699c1d953f44c776be3d2492b40",
"assets/assets/img/png/men_result_range_4.png": "8621b561d7b0c0fc8ee2e0c75651f3fc",
"assets/assets/img/png/men_result_range_4_e.png": "552d24e93385979c2ff0f07173410ad7",
"assets/assets/img/png/men_result_suit_1.png": "b8021fa4a94a165f0ceeaded58df0670",
"assets/assets/img/png/men_result_suit_2.png": "f00e6ec44312a39c7458f4731865e985",
"assets/assets/img/png/men_result_suit_3.png": "8f8c9a6bc4f627dbf6d042f7155468af",
"assets/assets/img/png/men_result_suit_4.png": "bbb8b77c232e32dcba686deef8f70ac2",
"assets/assets/img/png/personality_result_1.png": "8b590b6a8cd5e45d24824263c4506cf8",
"assets/assets/img/png/personality_result_keyword_1.png": "04632c7525f8728d7c04b2ff80684470",
"assets/assets/img/png/personality_result_keyword_2.png": "1e52546efedd5d97214bc9ee4d9a8455",
"assets/assets/img/png/personality_result_qr_1.png": "319af443499355a651830ad50fd54120",
"assets/assets/img/png/splash_4.png": "432dee820a1bf9ef6417c24dcd9d18ff",
"assets/assets/img/png/splash_6.png": "79e2217d1553c3198d8502a4d766a9fa",
"assets/assets/img/png/summer_pale_coordi_1.png": "076461af47420a658f3863489757967f",
"assets/assets/img/png/summer_pale_coordi_2.png": "6e10bc10a29c9e55fd7a5d6c6461db52",
"assets/assets/img/png/summer_pale_graph.png": "6e1f55386157967bb2bfe8c9f77ae3fe",
"assets/assets/img/png/summer_pale_model.png": "29a1325e82456430b1f63331b6e63942",
"assets/assets/img/png/tonepick_alert.png": "ab8c685537200382a13e481083f325bc",
"assets/assets/img/png/tonepick_ar_camera.png": "27d997f3d40a2fa6d19f8d801e12e3cf",
"assets/assets/img/png/tonepick_ar_face.png": "f6913d607fcde017b09d162df5fe7f3d",
"assets/assets/img/png/tonepick_ar_lip.png": "2d3da224db34209afe23519516e605e0",
"assets/assets/img/png/tonepick_ar_splash_image.png": "f7ecbe5da0d524dc0a87c490438efb36",
"assets/assets/img/png/tonepick_check_cube.png": "14e3830b02d07c7431f89aba614f4cea",
"assets/assets/img/png/tonepick_cube_result_1.png": "7be485e523e3d3ca1e9d8de231972936",
"assets/assets/img/png/tonepick_cube_result_1_e.png": "9d1b5c9aa457f198106090fba43e91ab",
"assets/assets/img/png/tonepick_cube_result_2.png": "2439936690c8f5c2aa1622cb3da810c7",
"assets/assets/img/png/tonepick_cube_result_2_e.png": "42c54b6cde4320793d7766525e22411c",
"assets/assets/img/png/tonepick_cube_result_3.png": "2c052598351b4433c27da7569459236d",
"assets/assets/img/png/tonepick_cube_result_3_e.png": "7981a99fef8c5a1d7497d6e0003951ce",
"assets/assets/img/png/tonepick_cube_result_4.png": "b66324248b663e164abb1cd96a5ad8d4",
"assets/assets/img/png/tonepick_cube_result_4_e.png": "cda7e5126150b03d4ebc414aa2897139",
"assets/assets/img/png/tonepick_face_1.png": "706323676afc773034c1cf175b773279",
"assets/assets/img/png/tonepick_face_1_e.png": "5bc0bed81ab5a42b0ea917031d9cd854",
"assets/assets/img/png/tonepick_face_2.png": "8708ec739a89c754ceee6f6bdca7e5ca",
"assets/assets/img/png/tonepick_face_2_e.png": "c99efb470e6f5d7250c6401a6559e38e",
"assets/assets/img/png/tonepick_face_3.png": "a3504cdd3cd624981eec03dcac3f83b0",
"assets/assets/img/png/tonepick_face_3_e.png": "30e5b98b2beeaecd5b6704e943f796b5",
"assets/assets/img/png/tonepick_face_4.png": "e3d863960e0044e9f6f21290a8b9bf1e",
"assets/assets/img/png/tonepick_face_4_e.png": "025452b831955fadd37f32ff67b30821",
"assets/assets/img/png/tonepick_face_check_1.png": "e29dddec0a43de030d9ef8b3b3979726",
"assets/assets/img/png/tonepick_face_check_1_e.png": "ce2cc6e56b5bb1e6b558816bc504b229",
"assets/assets/img/png/tonepick_face_check_2.png": "706e02641f8f8eb8f45fa511280b6b18",
"assets/assets/img/png/tonepick_face_check_2_e.png": "823cd835fa00f9622188a0bf56bde0ea",
"assets/assets/img/png/tonepick_face_check_3.png": "e954bba158819c5021e6019688375e98",
"assets/assets/img/png/tonepick_face_check_3_e.png": "3f79d56f27f83995399cfd905b07deb0",
"assets/assets/img/png/tonepick_face_check_4.png": "60eda3f8cdd7b86bb765ee3299ad6cea",
"assets/assets/img/png/tonepick_face_check_4_e.png": "9a002429c7bf70d39f31ffa8d0b2b16f",
"assets/assets/img/png/tonepick_makeup_1.png": "4fcf2ca32c3c4cdc44a2e117842a3de0",
"assets/assets/img/png/tonepick_makeup_10.png": "4710cd2f75c47df26db86174816a4fad",
"assets/assets/img/png/tonepick_makeup_11.png": "063fb8ed26280e815b3bdb18d543326e",
"assets/assets/img/png/tonepick_makeup_12.png": "e12ce76baf77428ceb1dbe474111b898",
"assets/assets/img/png/tonepick_makeup_13.png": "a257f93fa95e6e83fdbfb1a6b0d523be",
"assets/assets/img/png/tonepick_makeup_14.png": "f98eb973bb9553b8881b233ab3be0a8d",
"assets/assets/img/png/tonepick_makeup_15.png": "9610c3465a078ab8f6ebf290c0e826a0",
"assets/assets/img/png/tonepick_makeup_16.png": "be2d1dd150a7487abefd9dcc0c49af36",
"assets/assets/img/png/tonepick_makeup_2.png": "963ff8c0e09b4d7995d9d9a68167667e",
"assets/assets/img/png/tonepick_makeup_3.png": "2d0ff1350f32b083cdc849e24340f6c4",
"assets/assets/img/png/tonepick_makeup_4.png": "a629d5ebe302c1da80b22c438d27c5cf",
"assets/assets/img/png/tonepick_makeup_6.png": "15fe40ad457d95c8b5667c921477a813",
"assets/assets/img/png/tonepick_makeup_7.png": "0b9521524a71e090b672b0ac2a703007",
"assets/assets/img/png/tonepick_makeup_8.png": "5e2979b5a30364030326d81b1df22e33",
"assets/assets/img/png/tonepick_makeup_9.png": "cefa89cf99e82191a41ba03652014d76",
"assets/assets/img/png/tonepick_skin_1.png": "57a3b4d3f4e2391b99aa7924dca9dd7a",
"assets/assets/img/png/tonepick_skin_1_e.png": "ad4823461aef9bb44de9bd539fe504c3",
"assets/assets/img/png/tonepick_skin_2.png": "db8c3d4c9f855fd94b10dc02523d69a9",
"assets/assets/img/png/tonepick_skin_2_e.png": "f8ea822a8a57562c6235cff58c398edc",
"assets/assets/img/png/tonepick_skin_3.png": "6134a197c0a7657fa2f5f402d91e1a91",
"assets/assets/img/png/tonepick_skin_3_e.png": "b8d7ded4ad32685f096c67980059dbea",
"assets/assets/img/png/tonepick_skin_4.png": "1e8816983fa8abff676891920ccbac19",
"assets/assets/img/png/tonepick_skin_4_e.png": "b7a4d1a95e5ac85cad5ad55b88f02a97",
"assets/assets/img/png/tonepick_skin_check_1.png": "dd375899aa31e767e0b65bb4c2e8eda7",
"assets/assets/img/png/tonepick_skin_check_1_e.png": "7a5ee326a18b832418a0ea8e3cec3973",
"assets/assets/img/png/tonepick_skin_check_2.png": "8ebfa7f15395dd2798a3a772c3d75a81",
"assets/assets/img/png/tonepick_skin_check_2_e.png": "d5dab43708c54bcd8dd28583d441de3c",
"assets/assets/img/png/tonepick_skin_check_3.png": "add6acc9102031e29facc533ca4c3191",
"assets/assets/img/png/tonepick_skin_check_3_e.png": "83601c2a9e3347272e01ab69e7529632",
"assets/assets/img/png/tonepick_skin_check_4.png": "a17c1cc5e7fa58f682c64508434c65b8",
"assets/assets/img/png/tonepick_skin_check_4_e.png": "4d338aebb40b5e35c10466c679501000",
"assets/assets/img/png/tonepick_splash_image.png": "4d6e0f470e909959ac1ab07834d7776a",
"assets/assets/img/result/bright.png": "bd776d98607ad1c7492a40c4ae0ef64d",
"assets/assets/img/result/dark.png": "49f294a8f798368c1f8c84701d0cbd33",
"assets/assets/img/result/deep.png": "6cd86931f187a3a89c758c363e5bc0be",
"assets/assets/img/result/dull.png": "560ad90f392b8db3f539c4f8155e1339",
"assets/assets/img/result/glasses_1.png": "523d371c5192e87e0c7c6db25c8b2640",
"assets/assets/img/result/glasses_2.png": "dd7109af1c8f392ce8479474aab3804e",
"assets/assets/img/result/glasses_3.png": "3372bfb68ce788996619eb574ff63457",
"assets/assets/img/result/glasses_4.png": "81eb3bcdd825f85e7b6887062bbca29f",
"assets/assets/img/result/grayish.png": "0cfc41dd8f4dc56d8573254b74f02f09",
"assets/assets/img/result/light.png": "0c028b03aca0df8ed604ff56e6855d83",
"assets/assets/img/result/light_grayish.png": "fa2691145d07f3ace3c90bef7d06bd1f",
"assets/assets/img/result/moderate.png": "9371c37b096e0ed04f625c0eaf9adb85",
"assets/assets/img/result/pale.png": "93756ef5c54d2cb1b7482fb7a5c986c1",
"assets/assets/img/result/pastel.png": "11e8ad1444c2be5b9ae13fd9363e4f26",
"assets/assets/img/result/range_autumn_deep.png": "e18e9edd9e09d1f113c2394f75e0115a",
"assets/assets/img/result/range_autumn_deep_e.png": "765e892764b0a3b1dfce2c60b3b0bd4c",
"assets/assets/img/result/range_autumn_dull.png": "4dfa31d5da1622d52a3278d60373666b",
"assets/assets/img/result/range_autumn_dull_e.png": "a8d28596206682fddfdbaf30d8f3f972",
"assets/assets/img/result/range_autumn_soft.png": "89f5463768cae1dea53e69d2b3ebe3e9",
"assets/assets/img/result/range_autumn_soft_e.png": "07bc60cb96725fc023e13cc8a451c00c",
"assets/assets/img/result/range_spring_light.png": "59fc7ebc6c39bf6b0f5fe04c62cd8617",
"assets/assets/img/result/range_spring_light_e.png": "ecfd39511ab3401d2bb6ad153cb5006e",
"assets/assets/img/result/range_spring_pale.png": "bfe311ba55f9bb55f5b32e1c7b5022e7",
"assets/assets/img/result/range_spring_pale_e.png": "980cde18a6d4075ac1ec29f7eedbaa6e",
"assets/assets/img/result/range_spring_vivid.png": "1e995f2cff77f768f18fda52f9edb0de",
"assets/assets/img/result/range_spring_vivid_e.png": "6ce5275c06be24a1dd65044131244d06",
"assets/assets/img/result/range_summer_pale.png": "bfe311ba55f9bb55f5b32e1c7b5022e7",
"assets/assets/img/result/range_summer_pale_e.png": "980cde18a6d4075ac1ec29f7eedbaa6e",
"assets/assets/img/result/range_summer_soft.png": "bf80562ec517790ee1523e2941a4b540",
"assets/assets/img/result/range_summer_soft_e.png": "f869d8b0cc649a1f08a01f1981f78231",
"assets/assets/img/result/range_summer_whitish.png": "6eb6fb216314a5d16095f13010792336",
"assets/assets/img/result/range_summer_whitish_e.png": "4a3454955c258949f5c38c9ce75ed102",
"assets/assets/img/result/range_winter_dark.png": "8f56facae52c0cbaacb9fce09323534b",
"assets/assets/img/result/range_winter_dark_e.png": "119f5c8b23680d6514616039d05e22d9",
"assets/assets/img/result/range_winter_deep.png": "6787a56ace4640342d24f2ad95e5a049",
"assets/assets/img/result/range_winter_deep_e.png": "c969bd2a1802d283327bd5226b194c19",
"assets/assets/img/result/range_winter_vivid.png": "70122e7596867e6ad5fac2c60b30d392",
"assets/assets/img/result/range_winter_vivid_e.png": "fe0b467d3fa0d19208919d9981eac037",
"assets/assets/img/result/result_color_1.png": "a7e059f40983c5e6743c10707b91fed8",
"assets/assets/img/result/result_color_2.png": "3a529bb4a53c0435bcc9937de2ac18d5",
"assets/assets/img/result/result_color_3.png": "1b5995e331734c5f233073a3df95f175",
"assets/assets/img/result/smoky.png": "5f3488ce0f77973d215b319ef5996c89",
"assets/assets/img/result/soft.png": "b77256968a1a299cabd17d056f6f5527",
"assets/assets/img/result/strong.png": "50401fb122e55438a9dfe7fb4d91f85f",
"assets/assets/img/result/tonepick_fashion_man_1.png": "8a4d1b224222aa7a7dd2a89b5ed3f633",
"assets/assets/img/result/tonepick_fashion_man_10.png": "239e1de12b50e3595027efcfdd672748",
"assets/assets/img/result/tonepick_fashion_man_11.png": "ecb0dbe00806a05ae95a06110e09d7b9",
"assets/assets/img/result/tonepick_fashion_man_12.png": "0d76ca5c463ac49c19d9a18c5998950e",
"assets/assets/img/result/tonepick_fashion_man_2.png": "fc49358a06903dd86456c4b5e221367a",
"assets/assets/img/result/tonepick_fashion_man_3.png": "00a4019b5fb49eff05057b44acea3938",
"assets/assets/img/result/tonepick_fashion_man_4.png": "09459d766ce1f70f1c184967539eb34d",
"assets/assets/img/result/tonepick_fashion_man_5.png": "dd184f84bba43f4e43ccb89abbe3ae97",
"assets/assets/img/result/tonepick_fashion_man_6.png": "0468b52fae364d7c9d7d29dac07083e9",
"assets/assets/img/result/tonepick_fashion_man_7.png": "863715aaa14fe22ec2ccfb8a5416c0bb",
"assets/assets/img/result/tonepick_fashion_man_8.png": "beac13ac9ec69ea406e9cd3705708a16",
"assets/assets/img/result/tonepick_fashion_man_9.png": "b925297e7aa064fb7f7c93dcc7f80413",
"assets/assets/img/result/tonepick_fashion_woman_1.png": "5374c5803299c89f0d7bcf6390e077fa",
"assets/assets/img/result/tonepick_fashion_woman_10.png": "27b95f65a15aa79babcab6445b747b63",
"assets/assets/img/result/tonepick_fashion_woman_11.png": "c3cc579b4d0ffb24a2c4e69a1690fbd3",
"assets/assets/img/result/tonepick_fashion_woman_12.png": "ed68efadde25dda2221ee62f0850ede8",
"assets/assets/img/result/tonepick_fashion_woman_2.png": "c3728390d5caa75c855f259b81e6b193",
"assets/assets/img/result/tonepick_fashion_woman_3.png": "d111cb4043432227f11bc09bb66d6cdc",
"assets/assets/img/result/tonepick_fashion_woman_4.png": "41b9583ff68cc471cd7cebb4d5d4f005",
"assets/assets/img/result/tonepick_fashion_woman_5.png": "0fe7af13ad95cbfb1729a3a3d8462b14",
"assets/assets/img/result/tonepick_fashion_woman_6.png": "dea21d6182eb00c746d929fc0668ecec",
"assets/assets/img/result/tonepick_fashion_woman_7.png": "e875af69b59500b93e0443c1dbbc4715",
"assets/assets/img/result/tonepick_fashion_woman_8.png": "67165c49ecd1508c1d5e756f8e20023e",
"assets/assets/img/result/tonepick_fashion_woman_9.png": "a9e6c4050cb80c5c1a70ac48961cca5e",
"assets/assets/img/result/tonepick_makeup_1.png": "4fcf2ca32c3c4cdc44a2e117842a3de0",
"assets/assets/img/result/tonepick_makeup_10.png": "4710cd2f75c47df26db86174816a4fad",
"assets/assets/img/result/tonepick_makeup_11.png": "063fb8ed26280e815b3bdb18d543326e",
"assets/assets/img/result/tonepick_makeup_12.png": "e12ce76baf77428ceb1dbe474111b898",
"assets/assets/img/result/tonepick_makeup_13.png": "a257f93fa95e6e83fdbfb1a6b0d523be",
"assets/assets/img/result/tonepick_makeup_14.png": "f98eb973bb9553b8881b233ab3be0a8d",
"assets/assets/img/result/tonepick_makeup_15.png": "9610c3465a078ab8f6ebf290c0e826a0",
"assets/assets/img/result/tonepick_makeup_16.png": "be2d1dd150a7487abefd9dcc0c49af36",
"assets/assets/img/result/tonepick_makeup_2.png": "963ff8c0e09b4d7995d9d9a68167667e",
"assets/assets/img/result/tonepick_makeup_3.png": "2d0ff1350f32b083cdc849e24340f6c4",
"assets/assets/img/result/tonepick_makeup_4.png": "a629d5ebe302c1da80b22c438d27c5cf",
"assets/assets/img/result/tonepick_makeup_5.png": "9e9c9e556484838eb2ba54ac66ef02c7",
"assets/assets/img/result/tonepick_makeup_6.png": "15fe40ad457d95c8b5667c921477a813",
"assets/assets/img/result/tonepick_makeup_7.png": "0b9521524a71e090b672b0ac2a703007",
"assets/assets/img/result/tonepick_makeup_8.png": "5e2979b5a30364030326d81b1df22e33",
"assets/assets/img/result/tonepick_makeup_9.png": "cefa89cf99e82191a41ba03652014d76",
"assets/assets/img/result/tonepick_result_rank.png": "566e2fdd94f6324bce8f1be4bc03c62e",
"assets/assets/img/result/very_dark.png": "76aeeae0361a8ee6967294a879a2da68",
"assets/assets/img/result/very_deep.png": "120b3e2c864b26ef2d441bec63a16c82",
"assets/assets/img/result/vivid.png": "d173c5b692aa6069d23b867022897d83",
"assets/assets/img/svg/brand_logo.svg": "e83d0058c6846a0440b5cdba35ea60d8",
"assets/assets/img/svg/icon_check.svg": "6d64732a09460b01013008190858b0c2",
"assets/assets/img/svg/icon_check_white.svg": "f7fc638906da56c693af4ea3f4a9e7e1",
"assets/assets/img/svg/icon_down.svg": "061be47dfb29094758b8696169d5327b",
"assets/assets/img/svg/icon_left.svg": "bae624f68ca398ba3d3e9c7f47cba934",
"assets/assets/img/svg/icon_right.svg": "8c823481f857d7f71e1a8bee5b62a76e",
"assets/assets/img/svg/icon_up.svg": "a27230f880656caebf25f12c94347c68",
"assets/assets/img/svg/personality_logo.svg": "bbb7d1959312571bab6657bf2cb9720b",
"assets/assets/img/svg/personality_result_img_1.svg": "1f59549f5e7c393841a9399836001f14",
"assets/assets/img/svg/personality_result_keyword_1.svg": "77208b72dfb7a8936634fc27968bc36b",
"assets/assets/img/svg/personality_result_keyword_2.svg": "f8c843e80985bef25e0c5426fdc0373e",
"assets/assets/img/svg/south_korea.svg": "10679d585c351917622b94494b8a0329",
"assets/assets/img/svg/splash_1.svg": "cb4a89bf51e17956e35c4334e1d70336",
"assets/assets/img/svg/splash_2.svg": "bf4dac31b38cdbf7d3a9432eaed38576",
"assets/assets/img/svg/splash_3.svg": "683c1d858d1ebbb350e5c6fc3195d140",
"assets/assets/img/svg/splash_4.svg": "0c9c232bdb658ec8efb45887ad59dd14",
"assets/assets/img/svg/splash_5.svg": "c1c9ad4c962cbd222f627455e6079593",
"assets/assets/img/svg/splash_6.svg": "378ce3a1517febd5dc4a48d1b40f53a2",
"assets/assets/img/svg/splash_back_1.svg": "165dc4318a2b5ef39c2418c6c70a44d5",
"assets/assets/img/svg/splash_back_2.svg": "a1b6c3590f15042380f996799fef2bc3",
"assets/assets/img/svg/splash_cocory_logo.svg": "62a2e10f80294e9334f38b60ceadb33f",
"assets/assets/img/svg/splash_home.svg": "5afe56b4998d9d92dd1abf5ef18500cf",
"assets/assets/img/svg/splash_tip.svg": "285507ecdd36398f53dc40f594dec45f",
"assets/assets/img/svg/splash_title.svg": "305f89de15718a6f2d98a2844fc703d4",
"assets/assets/img/svg/tonepick_color_1.svg": "c3f8a9bf256e128fb6c9f1d99c4da870",
"assets/assets/img/svg/tonepick_color_2.svg": "cbf44a2d7528464b843648e810734f7f",
"assets/assets/img/svg/tonepick_color_3.svg": "47ec1c9425d56f892bf091edfbfacebd",
"assets/assets/img/svg/tonepick_color_4.svg": "d02c1ead6a34d47afaa0025b0105127d",
"assets/assets/img/svg/tonepick_color_5.svg": "fc7508c4732d713cbd01bfb777d9d6ba",
"assets/assets/img/svg/tonepick_color_6.svg": "ddc2d0b521eb4114343289e6f0227410",
"assets/assets/img/svg/tonepick_color_7.svg": "7d4875f799333531f6420f6502c75e01",
"assets/assets/img/svg/tonepick_color_8.svg": "a4bd380ab2a09138ed0755ba2e9f21f5",
"assets/assets/img/svg/tonepick_color_check_1.svg": "868f03fbb312d05530425badac4fa19c",
"assets/assets/img/svg/tonepick_color_check_2.svg": "be26c216d5245956a427bf3988d0b179",
"assets/assets/img/svg/tonepick_color_check_3.svg": "74cee95829c7b5cef40863c123b76adb",
"assets/assets/img/svg/tonepick_color_check_4.svg": "ef6295e3deaaa3ea7eb886195704a869",
"assets/assets/img/svg/tonepick_color_check_5.svg": "0c1ea694512cf8061e69a60a242c6dbc",
"assets/assets/img/svg/tonepick_color_check_6.svg": "9894ee9d075a81b5b55b131784da4869",
"assets/assets/img/svg/tonepick_color_check_7.svg": "127714d551cf25bc2147efbd393dc819",
"assets/assets/img/svg/tonepick_color_check_8.svg": "cdc19c2701e01f145171b1a2c45e9bfc",
"assets/assets/img/svg/tonepick_face_1.svg": "59f3e61335b107d3b2e16975c3026ca2",
"assets/assets/img/svg/tonepick_face_2.svg": "1de99783bb58574697f54d013c5bcba9",
"assets/assets/img/svg/tonepick_face_3.svg": "bd63dc59ed5513bc4d916418338cf3a7",
"assets/assets/img/svg/tonepick_face_4.svg": "cdb5e3c896ddbb65cd8011c8629a8b3c",
"assets/assets/img/svg/tonepick_face_check_1.svg": "2b67065591e4f923db52794291dea911",
"assets/assets/img/svg/tonepick_face_check_2.svg": "d8efb395de4928b99b7cb0102106aa49",
"assets/assets/img/svg/tonepick_face_check_3.svg": "ad454e2973ffadc979311cdcdbf5ca3b",
"assets/assets/img/svg/tonepick_face_check_4.svg": "aac9c435b41e05bf685da9badcd648fd",
"assets/assets/img/svg/tonepick_favorite_1.svg": "3ddb459a793f824ee45642a0e7f06c5f",
"assets/assets/img/svg/tonepick_favorite_1_check.svg": "2dd4aa7fa8487acf31e037606c4cdffa",
"assets/assets/img/svg/tonepick_favorite_2.svg": "1dec429c20b509287c8203417ee02ec3",
"assets/assets/img/svg/tonepick_favorite_2_check.svg": "07832468a2775a9604bf415a9c85fb70",
"assets/assets/img/svg/tonepick_favorite_3.svg": "576169ac72587328c75149ff86e09b8c",
"assets/assets/img/svg/tonepick_favorite_3_check.svg": "edbea5ee432f790ccae505f7d0448820",
"assets/assets/img/svg/tonepick_favorite_4.svg": "74fd4a5155ea9a74815ea29811f1170e",
"assets/assets/img/svg/tonepick_favorite_4_check.svg": "22e920237110cae6149e95a76b15663f",
"assets/assets/img/svg/tonepick_group_1.svg": "32e0b3add1687d7c7796afab3f75ccef",
"assets/assets/img/svg/tonepick_group_10.svg": "23b689eeffa1e826742626e1f7284835",
"assets/assets/img/svg/tonepick_group_11.svg": "755de4373514afd50bc61ab3a8e23be5",
"assets/assets/img/svg/tonepick_group_12.svg": "cfe9d29bfb3ad7546965b9525c750bb0",
"assets/assets/img/svg/tonepick_group_2.svg": "a65f73d857398c7ed0990065a445e8b2",
"assets/assets/img/svg/tonepick_group_3.svg": "fcb8af1b78c7ba9c9130ef20f3dd1a02",
"assets/assets/img/svg/tonepick_group_4.svg": "abd0e15cb60a4e130fc977752e6cbdba",
"assets/assets/img/svg/tonepick_group_5.svg": "dec7440037aca0f62591685c01921fe6",
"assets/assets/img/svg/tonepick_group_6.svg": "dda086fbb53745b4b90192dbd0268c93",
"assets/assets/img/svg/tonepick_group_7.svg": "5ceeb75a046ce31acdd8a85b4adda6c9",
"assets/assets/img/svg/tonepick_group_8.svg": "afbdccf129a69d52aba71d79f8e5df45",
"assets/assets/img/svg/tonepick_group_9.svg": "10ca76c29f7b9b7333c76e629ad1ad34",
"assets/assets/img/svg/tonepick_group_back.svg": "6e9b6b5270137082d69c323e85259373",
"assets/assets/img/svg/tonepick_group_check_1.svg": "c451ef69f80fab185318d28fb358416b",
"assets/assets/img/svg/tonepick_group_check_10.svg": "60c4339a689a366efcc64f1f576525ce",
"assets/assets/img/svg/tonepick_group_check_11.svg": "f684569ca3514108fa8a0252067f980c",
"assets/assets/img/svg/tonepick_group_check_12.svg": "8a0661910a4065b6032185abe55d5024",
"assets/assets/img/svg/tonepick_group_check_2.svg": "99180f66254a798d115f9bcee0bc431e",
"assets/assets/img/svg/tonepick_group_check_3.svg": "361f3fa204d0dd3ae83bbecb9b7a621e",
"assets/assets/img/svg/tonepick_group_check_4.svg": "815f10fc8084fe90c5471077dc245913",
"assets/assets/img/svg/tonepick_group_check_5.svg": "8bae63fef4bbcb27ce6e4e4260e4e6f6",
"assets/assets/img/svg/tonepick_group_check_6.svg": "e7e983b739dce4cce44839f58f6b6142",
"assets/assets/img/svg/tonepick_group_check_7.svg": "eec9b4bdabb0149ad289231f8b2defee",
"assets/assets/img/svg/tonepick_group_check_8.svg": "7c8ccd0881ee70a8da41b409cb042c0d",
"assets/assets/img/svg/tonepick_group_check_9.svg": "4d0b29a6c611eda72db2040ad2741a5d",
"assets/assets/img/svg/tonepick_lip_1.svg": "d0d72ff2d02cc04f2173aea0050e1dd5",
"assets/assets/img/svg/tonepick_lip_2.svg": "89f11dc69090fc4ddfebd67928d7d3d4",
"assets/assets/img/svg/tonepick_lip_3.svg": "b38b65133bafb752e96efefc32f4082e",
"assets/assets/img/svg/tonepick_lip_4.svg": "d173ac70ff31a9d242dc58ce9379f2af",
"assets/assets/img/svg/tonepick_lip_5.svg": "0e8401acc6894dc68ade3d6e5b02d490",
"assets/assets/img/svg/tonepick_lip_6.svg": "ed6735e593135be4f1e09bf26a560f27",
"assets/assets/img/svg/tonepick_lip_7.svg": "533fd4e640f2c7710827e0c25b2b3664",
"assets/assets/img/svg/tonepick_lip_8.svg": "f46b566eb1a29be1de77e90717d9170b",
"assets/assets/img/svg/tonepick_lip_check_1.svg": "8e3f20c2ec2cb61462d5a012b98d8dcc",
"assets/assets/img/svg/tonepick_lip_check_2.svg": "68771f98594cc9abb93ecc77cf9c43f8",
"assets/assets/img/svg/tonepick_lip_check_3.svg": "82dbf121c7b95bfd50f62797ce7fcbd3",
"assets/assets/img/svg/tonepick_lip_check_4.svg": "b4d29e6884d74c25c021e267db932d40",
"assets/assets/img/svg/tonepick_lip_check_5.svg": "2c6306a4e926ffc11051c6c7c602475d",
"assets/assets/img/svg/tonepick_lip_check_6.svg": "403bedfdca9ca5b80654c428760d1192",
"assets/assets/img/svg/tonepick_lip_check_7.svg": "b953c34ca58cc29747b96c5079fd95a7",
"assets/assets/img/svg/tonepick_lip_check_8.svg": "b9fe6177ce3be62c48f9f562fd2076c7",
"assets/assets/img/svg/tonepick_palette_1.svg": "6e5c189a7bb636641d052edc4af5d6fc",
"assets/assets/img/svg/tonepick_palette_1_check.svg": "fd8e75611f8838da4a2f49f6e955b5a2",
"assets/assets/img/svg/tonepick_palette_2.svg": "04ac6d2af67e178c2a6fa3171a06a70d",
"assets/assets/img/svg/tonepick_palette_2_check.svg": "8a1f48b854b0c5f6184a56f30774b0bd",
"assets/assets/img/svg/tonepick_palette_3.svg": "d699672b5be36eb60f111e4c97457a0d",
"assets/assets/img/svg/tonepick_palette_3_check.svg": "62993e942b89e915dbfd922c241c94c4",
"assets/assets/img/svg/tonepick_palette_4.svg": "1bc36b4c4f47b6af65def034d904440a",
"assets/assets/img/svg/tonepick_palette_4_check.svg": "5ba56ae1017412875082a6cc4a7a4ac9",
"assets/assets/img/svg/tonepick_rate_outline.svg": "664ffdc063320e64f98145c65d82029f",
"assets/assets/img/svg/tonepick_splash_image.svg": "c095d9f995f33346a8087d7da5cde2ab",
"assets/assets/img/svg/usa.svg": "aefba3fef673e14305b112b0e82805fe",
"assets/assets/lotties/loading.json": "a5ca82d1e98397382b597a95cd0596eb",
"assets/assets/lotties/loading_lottie.json": "6e05bd5318c5cb36feece168210014e4",
"assets/assets/lotties/personality_lottie.json": "a9dfa6a132a1790887e70dee32eb805d",
"assets/assets/video/fashionmono.mp4": "8ddf6a28136e400c289c5007b5db4c29",
"assets/assets/video/fashionmono_e.mp4": "88a81485111dbff333f79d31990fdffe",
"assets/assets/video/fashionstripe.mp4": "989fd8bded18f6222b18dd44a1f52526",
"assets/assets/video/fashionstripe_e.mp4": "4b8790e914ae1d70fa4045d91db29329",
"assets/assets/video/hair.mp4": "fe4f4252497feeae41419b441f659a6d",
"assets/assets/video/hair_e.mp4": "511fb807082a7c356341eab6c9894877",
"assets/assets/video/lip.mp4": "6d124e7c1a68e9afeaf1e16e69d19134",
"assets/assets/video/lip_e.mp4": "11ae61606042920f183727da9fbf2409",
"assets/assets/video/makeup.mp4": "ca357fcd408b2939b9e1812f5bf7e7a8",
"assets/assets/video/makeup_e.mp4": "fe6ccd3200fd32c64cb987831ef2054a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "ead12b80c653f7e067c97818d17714bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8294402f31fcbd518d58113dcc60870a",
"/": "8294402f31fcbd518d58113dcc60870a",
"main.dart.js": "bd2a85935ab41da92b542c7f2e9c4691",
"manifest.json": "e346d8d1c2fad779cc885a31b08341a1",
"version.json": "710737b89344d3530f4b0d36943a0ffc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
