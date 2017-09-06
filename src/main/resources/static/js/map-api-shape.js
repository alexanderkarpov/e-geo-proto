ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [64.9863, 74.809],
        zoom: 3
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Создаем многоугольник, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                [
                    [57.224867333674126, 65.84744016486697],
                    [57.39829675661642, 65.67109281033083],
                    [57.66094012842136, 65.6466480664743],
                    [57.84522367917017, 65.76562193988742],
                    [58.22108026311162, 65.7722128602083],
                    [58.42854124148001, 65.79167690752038],
                    [58.64965622155171, 65.55801296845753],
                    [58.8962004232527, 64.95366664522784],
                    [58.99960481827759, 64.65632167404041],
                    [59.03830928414372, 64.52162660421145],
                    [59.13514914298137, 64.29571195391998],
                    [59.235867037133595, 64.09480503550982],
                    [59.04399545475837, 63.9462438181226],
                    [58.940032719998484, 63.694498177529205],
                    [58.91124845896494, 63.467068127144074],
                    [58.54167321993142, 63.42186005165374],
                    [58.33104918704659, 63.237154899168665],
                    [58.207689348935446, 62.99489317703429],
                    [58.19365771409684, 62.74952359743455],
                    [58.521249730300106, 62.78497174689254],
                    [58.762793925363624, 62.54464281315146],
                    [58.96798071627837, 62.734698107643176],
                    [59.317938531801765, 62.36363527736663],
                    [59.6994194118249, 62.3533356746048],
                    [59.79259607560147, 61.99762502007995],
                    [59.93760168312642, 61.74505567130479],
                    [60.157867051401006, 61.54600856868694],
                    [60.263223500541805, 61.218788791073344],
                    [60.35773501041536, 60.82606832099829],
                    [60.62864108597193, 60.58167516238421],
                    [60.85405943870095, 60.5149352771908],
                    [61.4544072114457, 60.34594146807167],
                    [62.20526997682924, 60.229234262354204],
                    [62.46008874869856, 59.920664360415834],
                    [62.90633275462279, 60.080016446074836],
                    [63.168570294268534, 59.83731411934201],
                    [63.68265186375975, 60.388674833691795],
                    [63.91191280429363, 60.42472283886592],
                    [64.17839509925135, 60.166383520080835],
                    [64.33285874002624, 60.215745973499864],
                    [64.37225490963993, 60.56542166859132],
                    [64.47492101525073, 61.26214301426314],
                    [64.60699607310596, 61.6391210023121],
                    [64.85020810806024, 61.919233430135066],
                    [65.3405385998193, 62.49039880246509],
                    [65.76765269134201, 63.094980273759006],
                    [66.04886703130587, 63.582535642584595],
                    [66.24112293172769, 64.06608624422844],
                    [66.20973423712249, 64.44450615464606],
                    [66.13659588525603, 64.77012879067355],
                    [65.92070888905151, 64.89567519711574],
                    [65.71711704316769, 64.95932883122653],
                    [65.44166208958168, 65.06606155238408],
                    [65.24451665472431, 65.06049788111332],
                    [65.37781112741203, 65.65723860721721],
                    [65.48415959722561, 66.26213367738248],
                    [65.74591048113571, 67.14253672669804],
                    [65.87723325110059, 67.61965237819949],
                    [66.20891199554406, 67.83594482382215],
                    [66.76172092809362, 68.58608509589762],
                    [67.094536921633, 69.19936782473894],
                    [67.2331729184038, 69.69235248335865],
                    [67.31424312926816, 69.73609197938055],
                    [67.33124072373748, 69.74526262551232],
                    [67.45363584693618, 69.5628743473124],
                    [67.54785867970544, 69.28234564299399],
                    [67.69172301185232, 68.88450109282195],
                    [67.87084609929778, 68.62688315722293],
                    [68.14369319580533, 67.83688798104745],
                    [68.32925243364642, 67.60624405880199],
                    [68.48143214645502, 67.5447424597548],
                    [68.68803584166872, 67.31219787272923],
                    [69.00371201089816, 66.71890966136775],
                    [69.26286238098537, 66.11619137615858],
                    [69.41180452188853, 65.75068776708258],
                    [69.44328909514539, 64.83396839644101],
                    [69.63050448804094, 63.37235114560971],
                    [70.00697794247826, 61.65693974183547],
                    [70.40494364607198, 59.96032986464093],
                    [70.62807921845372, 59.44377717593184],
                    [71.06598649415005, 58.36647899694359],
                    [71.49161688949995, 57.61610677140891],
                    [71.87021329474808, 57.325379242225274],
                    [72.25800848416782, 57.50392462510167],
                    [72.63999309272091, 58.18541351156772],
                    [73.07933118312782, 58.987573412528164],
                    [73.33395839115673, 59.86647821963634],
                    [73.44684250898176, 60.551067190460756],
                    [73.55867587505303, 60.919371375645035],
                    [74.35662695765728, 62.34732241958373],
                    [74.83648059701414, 63.80832559490859],
                    [75.32979325223914, 66.0442074622674],
                    [75.72683531404587, 67.28646227468437],
                    [76.15688531124036, 68.97709249140313],
                    [76.38429377176085, 70.29713647980876],
                    [76.61204135539711, 71.62172487388096],
                    [76.86921183111956, 72.84107757329319],
                    [77.08045281401724, 74.25225271257166],
                    [77.37180309622124, 75.82567569587908],
                    [77.29733992590499, 76.3475523383075],
                    [77.19645912136912, 77.33161083391018],
                    [77.0250475307999, 78.19082553236133],
                    [76.85082026747227, 78.8588089691555],
                    [76.65849890932142, 79.57546756923058],
                    [76.59423587290685, 79.88550330701024],
                    [76.5295501469138, 80.29189619834575],
                    [76.49432539129768, 80.57500437713945],
                    [76.42074700035342, 81.20986185542205],
                    [76.38028533985862, 82.0769492162713],
                    [76.2936753019501, 83.46902355890903],
                    [76.21150534307729, 84.8493847093527],
                    [76.1570685633646, 85.96897037522344],
                    [76.07231153180106, 87.07595879195334],
                    [75.88779081400324, 86.66029005863831],
                    [75.04142694938236, 84.23523690505657],
                    [74.34082621554059, 81.50456515792604],
                    [73.93326673631545, 80.21654010981695],
                    [73.44099895692081, 79.82875361570822],
                    [72.575909112135, 79.75390560262461],
                    [72.575909112135, 79.7539056026246],
                    [72.35450625105247, 79.40883490339156],
                    [72.35450625105247, 79.40883490339156],
                    [72.37135312213786, 78.88006956504746],
                    [72.31101338483411, 78.46873931357857],
                    [72.10409744380475, 78.68679895770266],
                    [72.03525085981046, 79.36186263562757],
                    [71.98419208823813, 80.10403657897965],
                    [71.84522435006322, 80.1352656461319],
                    [71.62668082449241, 79.98440570159333],
                    [71.6008401908542, 79.3304595337197],
                    [71.51228701945453, 79.17479112568036],
                    [71.23014956505106, 79.38940884132737],
                    [71.1166446784314, 79.89802384231794],
                    [70.99961468959299, 80.4224348140539],
                    [70.89593580863338, 80.62891986939047],
                    [70.64388197998996, 80.79485236842328],
                    [70.52036853483007, 80.71534771790321],
                    [70.44973186178149, 80.2880531915739],
                    [70.22212803428523, 79.61703845370619],
                    [69.85681954955035, 78.93607697606575],
                    [69.58008672580013, 78.86085955987106],
                    [69.35683944772849, 79.43166048008624],
                    [69.34567043370778, 79.96610120827036],
                    [69.34182113361514, 80.48019258504307],
                    [69.21946434674419, 81.03719893268762],
                    [69.04896865084527, 82.30757859614059],
                    [69.02188983569032, 83.31770116465465],
                    [69.30299396675512, 85.3803968116203],
                    [69.30299396675514, 85.3803968116203],
                    [68.89663573550753, 85.85509247101137],
                    [68.60765988896102, 86.02341975777672],
                    [67.58408560066911, 85.93834466364108],
                    [66.95721407634525, 86.3834873519717],
                    [66.18049970179796, 87.25116264124487],
                    [65.83820259571489, 87.68081785951587],
                    [65.57616181079277, 87.69886067548433],
                    [64.97740623218378, 87.5599086082257],
                    [64.49684239220743, 87.4159635651004],
                    [63.696500460213315, 87.2920910884755],
                    [63.40552666193057, 87.31148322791131],
                    [63.26338924683727, 87.55541520510957],
                    [63.04311395571269, 87.82550642824032],
                    [62.8698865275633, 87.93964775300667],
                    [62.69176447891954, 88.23860675636541],
                    [62.46410426027548, 88.30159502278876],
                    [62.315823470829926, 88.24977208213306],
                    [62.17155253010625, 88.35740803396081],
                    [61.998026350977774, 88.64943682542496],
                    [61.88315783594508, 88.90097461260669],
                    [61.75504413353498, 89.13878492750374],
                    [61.578368800504236, 89.22793344542022],
                    [61.34684895726292, 89.00512012158148],
                    [61.147321572664666, 89.00629963882606],
                    [60.996352607085385, 89.2400591505963],
                    [60.815815704541045, 89.49307504166198],
                    [60.606785032292905, 89.53770850634379],
                    [60.27239896682408, 89.72918121480984],
                    [59.920617255460776, 90.10160809382036],
                    [59.53207917461638, 90.57698243323378],
                    [59.227964733309456, 90.92731316980749],
                    [58.99093582173549, 91.05972761326441],
                    [58.75640545513602, 91.20040878045636],
                    [58.42848409714583, 90.9339204455747],
                    [58.20164957456995, 90.59899644594782],
                    [58.098717221253395, 90.32309585431736],
                    [58.043193452228714, 89.86931432898132],
                    [58.117780316956754, 89.35074933786812],
                    [58.194882884221265, 88.93032175392415],
                    [58.36041436178578, 88.4964032210579],
                    [58.58682458809241, 87.95169697526967],
                    [58.67415705915067, 87.55223499907598],
                    [58.64027166453554, 87.18594758346883],
                    [58.60489350431546, 86.92921322232577],
                    [58.468578960780874, 86.75221494410631],
                    [58.355634099328185, 86.54946485334513],
                    [58.18249958372135, 86.42250657923022],
                    [58.0643941013695, 86.29291344685124],
                    [58.04792248879998, 86.17105025769793],
                    [58.11127555308801, 85.98941375638626],
                    [58.131898398118615, 85.73632890800664],
                    [58.162226502493425, 85.41183228819217],
                    [58.10171416952454, 85.13249813599121],
                    [58.10646976384589, 84.9041961267909],
                    [58.09266006854769, 84.69340500393228],
                    [58.00396643236823, 84.38960241429437],
                    [57.915064662325065, 84.03436897317432],
                    [57.820672528625465, 83.4495771717958],
                    [57.48296710262122, 83.0963027787301],
                    [57.37952170022288, 83.07439756262808],
                    [57.2706518529272, 83.15316753632524],
                    [57.12020431640202, 82.8602188555408],
                    [57.016841914259174, 82.32923882814426],
                    [57.048485967724964, 81.9530703895618],
                    [56.91064378605306, 81.64788642002028],
                    [56.648266530322545, 80.91821473349724],
                    [56.6529143359435, 80.6264270916713],
                    [56.581537116330864, 80.6662633435312],
                    [56.35499837015435, 80.47747613219724],
                    [56.23843691778787, 80.14904040725457],
                    [56.14750302827846, 79.38055329947679],
                    [55.932793205278706, 78.92664911843853],
                    [55.69220355199588, 78.68866680498114],
                    [55.57416971555482, 78.48357262707957],
                    [55.60329974465089, 78.30227286762762],
                    [55.61043063358915, 78.11602812454191],
                    [55.43390569494922, 77.3482641788376],
                    [55.24901419047545, 76.72938117842624],
                    [55.29631728910811, 76.36387508672104],
                    [55.64226079109126, 76.01648982371522],
                    [55.75102988967717, 75.85225926875364],
                    [55.87779369924139, 75.61660417681315],
                    [55.913819631180175, 75.37240617402432],
                    [55.918606570367324, 75.10904489807577],
                    [55.75068274243568, 75.10950283402599],
                    [55.80741164900826, 74.84876330190242],
                    [55.83658388793306, 74.22796374912932],
                    [55.88072958845542, 74.03791370401238],
                    [56.898315953731675, 72.51336078455921],
                    [56.90753966269783, 71.94677914276888],
                    [56.74527569351816, 71.73038028007716],
                    [56.82989989702826, 71.52998891007087],
                    [56.89558161657922, 71.26151749983687],
                    [56.784821493845996, 71.01542372100498],
                    [56.58708219447036, 70.80991771047505],
                    [56.41602364298033, 70.4497486760378],
                    [56.43026159035214, 69.86420886029596],
                    [56.374585025275294, 69.52753707723689],
                    [56.43427052330857, 69.0827361747604],
                    [56.715496276422265, 68.93494343146945],
                    [56.948923440934735, 68.55682788114792],
                    [57.13432193274655, 68.223265199918],
                    [57.25251842440909, 67.77748304619847],
                    [57.267976957665354, 67.38686659524085],
                    [57.381229959265426, 66.81645330521803],
                    [57.218968726286384, 66.19277158665024],
                    [57.224867333674126, 65.84744016486697]
                ]
            ],
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
        },
        // Описываем свойства геообъекта.
        properties: {
            // Содержимое балуна.
            balloonContent: "Бассейны_тест.shp"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.2,
        // Ширина обводки.
        strokeWidth: 2
        // Стиль обводки.
        // strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject)

        .add(new ymaps.Placemark([60.768635816051386, 72.76500205442643], {}, {iconGlyph: 'asterisk'}))
        .add(new ymaps.Placemark([60.65235788279827, 74.57136437341926], {}, {iconGlyph: 'asterisk'}))
        .add(new ymaps.Placemark([58.70924705784458, 73.81079076542228], {}, {iconGlyph: 'asterisk'}))
        .add(new ymaps.Placemark([59.754806006777244, 74.66643607441888], {}, {iconGlyph: 'asterisk'}))
        .add(new ymaps.Placemark([58.75859051447735, 78.421768263904], {}, {iconGlyph: 'asterisk'}))
        .add(new ymaps.Placemark([64.98630827199558, 74.80904362591832], {}, {iconGlyph: 'asterisk'}))
        .add(new ymaps.Placemark([65.79780125797505, 81.36899099489229], {}, {iconGlyph: 'asterisk'}))
        .add(new ymaps.Placemark([59.442082487915926, 81.84434949989038], {}, {iconGlyph: 'asterisk'}))
        .add(new ymaps.Placemark([59.466241514332445, 72.71746620392663], {}, {iconGlyph: 'asterisk'}))
        .add(new ymaps.Placemark([58.436604828942826, 72.05196429692926], {}, {iconGlyph: 'asterisk'}));


}