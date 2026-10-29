// 1. TRACK COMPILATION DATABASE INDEX
const AUDIO_DATABASE = [
    {
        id: "01",
        title: "BUWAN Remix",
        artist: "Juan Karlos Labajo",
        genre: "Classic Pinoy Alternative Rock / Blues Rock",
        description: "",
        src: "tracks/Buwan-Remix.mp3",
        coverText: "JUAN KARLOS",
        styleClass: "placeHolder-1"
    },
    {
        id: "02",
        title: "BAKIT BA IKAW",
        artist: "Michael Pangilinan",
        genre: "OPM Ballad / Pop-Soul",
        description: "",
        src: "tracks/Bakit-Ba-Ikaw-Michael-Pangilinan.mp3",
        coverText: "MICHAEL",
        styleClass: "placeholder-2"
    },
    {
        id: "03",
        title: "ANG KWENTO KO",
        artist: "Zephanie Dimaranan",
        genre: "ballads, Pop",
        description: "",
        src: "tracks/Ang-Kwento-ko-Zephanie-Dimaranan.mp3",
        coverText: "ZEPHANIE",
        styleClass: "placeholder-3"
    },
    {
        id: "04",
        title: "BALANG-ARAW",
        artist: "Kuya Inday and Pinuno",
        genre: "Slow Rock Ballad",
        description: "",
        src: "tracks/Balang-Araw.mp3",
        coverText: "KUYA INDAY & PINUNO",
        styleClass: "placeholder-1"
    },
    {
        id: "05",
        title: "DAANAN",
        artist: "Jolianne",
        genre: "Pop Ballad",
        description: "",
        src: "tracks/Daanan - Jolianne.mp3",
        coverText: "JOLIANNE",
        styleClass: "placeholder-2"
    },
    {
        id: "06",
        title: "RUNAWAY",
        artist: "Jarren Garcia",
        genre: "R&B",
        description: "",
        src: "tracks/Runaway-Jarren.mp3",
        coverText: "JARREN",
        styleClass: "placeholder-3"
    },
    {
        id: "07",
        title: "PARU-PARO",
        artist: "Wilbert Ross",
        genre: "Pop",
        description: "",
        src: "tracks/Paru-Paro-Wilbert-Ross.mp3",
        coverText: "WILBERT ROSS",
        styleClass: "placeholder-1"
    },
	{
		id: "08",
        title: "NA PARA BANG",
        artist: "Mariah Deborah",
        genre: "Pop",
		description: "",
		src: "tracks/Na-Para-Bang-Mariah-Deborah.mp3",
		coverText: "MARIAH DEBORAH",
		styleClass: "placeHolder-1"
	},
	{
		id: "09",
        title: "PABORITO",
        artist: "Will Ashley",
        genre: "Pop",
		description: "",
		src: "tracks/Paborito-Will-Ashley.mp3",
		coverText: "WILL ASHLEY",
		styleClass: "placeHolder-1",
	},
	{
		id: "10",
        title: "BACK TO YOU",
        artist: "Heath Jornales",
        genre: "Pop",
		description: "",
		src: "tracks/Back-To-You-Heath-Jornales.mp3",
		coverText: "HEATH JORNALES",
		styleClass: "placeHolder-1",
	},
	{
        id: "11",
        title: "PANAGINIP",
        artist: "Nicole",
        genre: "Pop",
        description: "",
        src: "tracks/Panaginip-Nicole.mp3",
        coverText: "NICOLE",
        styleClass: "placeHolder-1",
    },
	{
        id: "12",
        title: "BUWAN",
        artist: "Juan Karlos Labajo",
        genre: "Alternative Rock",
        description: "",
        src: "tracks/Juan-Karlos-Buwan.mp3",
        coverText: "JUAN KARLOS",
        styleClass: "placeHolder-1",
    },
	{
        id: "13",
        title: "AKO NAMAN MUNA",
        artist: "Angela Ken",
        genre: "Pop Ballad",
        description: "",
        src: "tracks/Ako-Naman Muna-Angela Ken.mp3",
        coverText: "ANGELA KEN",
        styleClass: "placeHolder-1",
    },
	{
        id: "14",
        title: "DEMONYO",
        artist: "Juan Karlos Labajo",
        genre: "Alternative Rock",
        description: "",
        src: "tracks/Demonyo.mp3",
        coverText: "JK LABAJO",
        styleClass: "placeHolder-1",
    },
	{
        id: "15",
        title: "UHAW",
        artist: "Dilaw Band",
        genre: "Alternative Rock",
        description: "",
        src: "tracks/Dilaw - Uhaw.mp3",
        coverText: "DILAW",
        styleClass: "placeHolder-1",
    },
	{
        id: "16",
        title: "DILAW",
        artist: "Maki",
        genre: "Folk Pop",
        description: "",
        src: "tracks/Dilaw.mp3",
        coverText: "MAKI",
        styleClass: "placeHolder-1",
    },
	{
        id: "17",
        title: "TAYO LANG",
        artist: "Janine Berdin",
        genre: "",
        description: "",
        src: "tracks/Tayo Lang-Janine Berdin.mp3",
        coverText: "JANINE BERDIN",
        styleClass: "placeHolder-1",
    },
	{
        id: "18",
        title: "RARARA",
        artist: "Dilaw",
        genre: "",
        description: "",
        src: "tracks/RARARA- Dilaw.mp3",
        coverText: "DILAW",
        styleClass: "placeHolder-1",
    },
	{
        id: "19",
        title: "SILAKBO",
        artist: "Cup Of Joe",
        genre: "",
        description: "",
        src: "tracks/Silakbo - Cup of Joe.mp3",
        coverText: "CUP OF JOE",
        styleClass: "placeHolder-1",
    },
	{
        id: "20",
        title: "TIBOK",
        artist: "Earl Agustin",
        genre: "",
        description: "",
        src: "tracks/Tibok - Earl Agustin.mp3",
        coverText: "EARL AGUSTIN",
        styleClass: "placeHolder-1",
    },
	{
        id: "21",
        title: "DITO KA LANG",
        artist: "Moira Dela Torre",
        genre: "",
        description: "",
        src: "tracks/Dito Ka Lang-Moira.mp3",
        coverText: "MOIRA",
        styleClass: "placeHolder-1",
    },
	{
        id: "22",
        title: "DULO NG PAHINA",
        artist: "Wilbert Ross",
        genre: "",
        description: "",
        src: "tracks/Dulo Ng Pahina-Wilbert Ross.mp3",
        coverText: "WILBERT ROSS",
        styleClass: "placeHolder-1",
    },
	{
        id: "23",
        title: "PARALUMAN",
        artist: "Adie",
        genre: "",
        description: "",
        src: "tracks/Paraluman-Adie.mp3",
        coverText: "ADIE",
        styleClass: "placeHolder-1",
    },
	{
        id: "24",
        title: "MAHIKA",
        artist: "Janine&Adie",
        genre: "",
        description: "",
        src: "tracks/Mahika-Janine&Adie.mp3",
        coverText: "MAHIKA",
        styleClass: "placeHolder-1",
    },
	{
        id: "25",
        title: "PARE MAHAL NAMAN KITA",
        artist: "Michael Pangilinan",
        genre: "",
        description: "",
        src: "tracks/Pare-Mahal-Naman-Kita.mp3",
        coverText: "MICHAEL",
        styleClass: "placeHolder-1",
    },
	{
        id: "26",
        title: "TAYO NA LANG",
        artist: "Michael Pangilinan",
        genre: "",
        description: "",
        src: "tracks/Tayo-Na-Lang.mp3",
        coverText: "KHAEL",
        styleClass: "placeHolder-1",
    },
	{
        id: "27",
        title: "ONE DAY",
        artist: "Bugoy Drilon",
        genre: "",
        description: "",
        src: "tracks/One Day-Bugoy.mp3",
        coverText: "BUGOY",
        styleClass: "placeHolder-1",
    },
	{
        id: "28",
        title: "IN CASE YOU DIDN'T KNOW",
        artist: "Brett Young",
        genre: "",
        description: "",
        src: "tracks/Incase-You-Didn't-Know-Brett-Young.mp3",
        coverText: "BRETT YOUNG",
        styleClass: "placeHolder-1",
    },
	{
        id: "29",
        title: "NEED YOU NOW",
        artist: "Lady A",
        genre: "",
        description: "",
        src: "tracks/Need You Now.mp3",
        coverText: "LADY A",
        styleClass: "placeHolder-1",
    },
	{
        id: "30",
        title: "UUWIAN",
        artist: "Kyle Raphael",
        genre: "",
        description: "",
        src: "tracks/Uuwian-Kyle Raphael.mp3",
        coverText: "KYLE",
        styleClass: "placeHolder-1",
    },
	{
        id: "31",
        title: "MULTO",
        artist: "Cup Of Joe",
        genre: "",
        description: "",
        src: "tracks/Multo - Cup of Joe.mp3",
        coverText: "MULTO",
        styleClass: "placeHolder-1",
    },
	{
        id: "32",
        title: "TAKE ALL THE LOVE",
        artist: "Arthur Nery",
        genre: "",
        description: "",
        src: "tracks/TAKE ALL THE LOVE - Arthur Nery.mp3",
        coverText: "ARTHUR",
        styleClass: "placeHolder-1",
    },
	{
        id: "33",
        title: "PALAYO SA MUNDO",
        artist: "Arthur Nery",
        genre: "",
        description: "",
        src: "tracks/Palayo Sa Mundo-ArthurNery&Jolianne.mp3",
        coverText: "ARTHUR&JOLIANNE",
        styleClass: "placeHolder-1",
    },
	{
        id: "34",
        title: "NA NAMAN",
        artist: "Arthur Nery",
        genre: "",
        description: "",
        src: "tracks/Arthur Nery - Na Naman.mp3",
        coverText: "ARTHUR",
        styleClass: "placeHolder-1",
    },
	{
        id: "35",
        title: "DI NAKAKASAWA",
        artist: "Arthur Nery",
        genre: "",
        description: "",
        src: "tracks/Arthur Nery - Di Nakakasawa.mp3",
        coverText: "ARTHUR",
        styleClass: "placeHolder-1",
    },
	{
        id: "36",
        title: "PAGSAMO",
        artist: "Arthur Nery",
        genre: "",
        description: "",
        src: "tracks/Pagsamo - Arthur Nery.mp3",
        coverText: "ARTHUR",
        styleClass: "placeHolder-1",
    },
	{
        id: "37",
        title: "BINHI",
        artist: "Arthur Nery",
        genre: "",
        description: "",
        src: "tracks/Arthur Nery - Binhi.mp3",
        coverText: "ARTHUR",
        styleClass: "placeHolder-1",
    },
	{
        id: "38",
        title: "OH, GILIW KO",
        artist: "Adie",
        genre: "",
        description: "",
        src: "tracks/Adie - Oh, Giliw.mp3",
        coverText: "ADIE",
        styleClass: "placeHolder-1",
    },
	{
        id: "39",
        title: "MS. PAKIPOT",
        artist: "Adie",
        genre: "",
        description: "",
        src: "tracks/Adie - Ms. Pakipot.mp3",
        coverText: "ADIE",
        styleClass: "placeHolder-1",
    },
	{
        id: "40",
        title: "PARALUMAN",
        artist: "Adie",
        genre: "",
        description: "",
        src: "tracks/Adie - Paraluman.mp3",
        coverText: "ADIE",
        styleClass: "placeHolder-1",
    },
	{
        id: "41",
        title: "KURSUNADA",
        artist: "Adie",
        genre: "",
        description: "",
        src: "tracks/Adie - Kursunada.mp3",
        coverText: "ADIE",
        styleClass: "placeHolder-1",
    },
	{
        id: "42",
        title: "ALAM MO BA GIRL",
        artist: "Hev Abi",
        genre: "",
        description: "",
        src: "tracks/Hev Abi - Alam Mo Ba Girl.mp3",
        coverText: "HEV ABI",
        styleClass: "placeHolder-1",
    },
	{
        id: "43",
        title: "SA BAWAT SANDALI",
        artist: "Amiel Sol",
        genre: "",
        description: "",
        src: "tracks/Sa Bawat Sandali - Amiel Sol.mp3",
        coverText: "AMIEL SOL",
        styleClass: "placeHolder-1",
    },
	{
        id: "44",
        title: "KALAPASTANGANAN",
        artist: "FitterKarma",
        genre: "",
        description: "",
        src: "tracks/fitterkarma - Kalapastangan.mp3",
        coverText: "FITTERKARMA",
        styleClass: "placeHolder-1",
    },
	{
        id: "45",
        title: "BAMPIRA",
        artist: "FitterKarma",
        genre: "",
        description: "",
        src: "tracks/fitterkarma - Bampira.mp3",
        coverText: "FITTERKARMA",
        styleClass: "placeHolder-1",
    },
	{
        id: "46",
        title: "SUMPA",
        artist: "FitterKarma",
        genre: "",
        description: "",
        src: "tracks/fitterkarma - Sumpa.mp3",
        coverText: "FITTERKARMA",
        styleClass: "placeHolder-1",
    },
	{
        id: "47",
        title: "MARYCLAIRE",
        artist: "FitterKarma",
        genre: "",
        description: "",
        src: "tracks/fitterkarma - maryclaire.mp3",
        coverText: "FITTERKARMA",
        styleClass: "placeHolder-1",
    },
	{
        id: "48",
        title: "DAYANG",
        artist: "Alamat",
        genre: "",
        description: "",
        src: "tracks/ALAMAT - Dayang.mp3",
        coverText: "ALAMAT",
        styleClass: "placeHolder-1",
    },
	{
        id: "49",
        title: "KASMALA",
        artist: "Alamat",
        genre: "",
        description: "",
        src: "tracks/ALAMAT - kasmala.mp3",
        coverText: "ALAMAT",
        styleClass: "placeHolder-1",
    },
	{
        id: "50",
        title: "SAY U LOVE ME",
        artist: "Alamat",
        genre: "",
        description: "",
        src: "tracks/ALAMAT - Say U Love Me.mp3",
        coverText: "ALAMAT",
        styleClass: "placeHolder-1",
    },
	{
        id: "51",
        title: "ASWANG",
        artist: "Alamat",
        genre: "",
        description: "",
        src: "tracks/ALAMAT - Aswang.mp3",
        coverText: "ALAMAT",
        styleClass: "placeHolder-1",
    },
	{
        id: "52",
        title: "SINIGANG",
        artist: "Alamat",
        genre: "",
        description: "",
        src: "tracks/ALAMAT - Sinigang.mp3",
        coverText: "ALAMAT",
        styleClass: "placeHolder-1",
    },
	{
        id: "53",
        title: "DAGUNDONG",
        artist: "Alamat",
        genre: "",
        description: "",
        src: "tracks/ALAMAT - Dagundong.mp3",
        coverText: "ALAMAT",
        styleClass: "placeHolder-1",
    },
	{
        id: "54",
        title: "MAHARANI",
        artist: "Alamat",
        genre: "",
        description: "",
        src: "tracks/ALAMAT - Maharani.mp3",
        coverText: "ALAMAT",
        styleClass: "placeHolder-1",
    },
	{
        id: "55",
        title: "PAGBIGYAN",
        artist: "Alamat",
        genre: "",
        description: "",
        src: "tracks/ALAMAT - Pagbigyan.mp3",
        coverText: "ALAMAT",
        styleClass: "placeHolder-1",
    },
	{
        id: "56",
        title: "LUZVIMINDA",
        artist: "Alamat",
        genre: "",
        description: "",
        src: "tracks/ALAMAT - LuzViMinda.mp3",
        coverText: "ALAMAT",
        styleClass: "placeHolder-1",
    },
	{
        id: "57",
        title: "YOU'LL BE SAFE HERE",
        artist: "Adie",
        genre: "",
        description: "",
        src: "tracks/Adie - You’ll Be Safe Here.mp3",
        coverText: "ADIE",
        styleClass: "placeHolder-1",
    },
	{
        id: "58",
        title: "GABAY",
        artist: "Siakol",
        genre: "",
        description: "",
        src: "tracks/Gabay - Siakol.mp3",
        coverText: "SIAKOL",
        styleClass: "placeHolder-1",
    },
	{
        id: "59",
        title: "ITULOY MO LANG",
        artist: "Siakol",
        genre: "",
        description: "",
        src: "tracks/Ituloy Mo Lang-Siakol.mp3",
        coverText: "SIAKOL",
        styleClass: "placeHolder-1",
    },
	{
        id: "60",
        title: "GAWING LANGIT ANG MUNDO",
        artist: "Siakol",
        genre: "",
        description: "",
        src: "tracks/Gawing Langit Ang Mundo-Siakol.mp3",
        coverText: "SIAKOL",
        styleClass: "placeHolder-1",
    },
	{
        id: "61",
        title: "HANGGANG KAILAN",
        artist: "Orange & Lemons",
        genre: "",
        description: "",
        src: "tracks/Hanggang Kailan-Orange&Lemons.mp3",
        coverText: "ORANGE&LEMONS",
        styleClass: "placeHolder-1",
    },
	{
        id: "62",
        title: "214",
        artist: "Rivermaya",
        genre: "",
        description: "",
        src: "tracks/214-Rivermaya.mp3",
        coverText: "RIVERMAYA",
        styleClass: "placeHolder-1",
    },
	{
        id: "63",
        title: "ANTUKIN",
        artist: "Rico Blanco",
        genre: "",
        description: "",
        src: "tracks/Antukin-Rico Blanco.mp3",
        coverText: "RICO",
        styleClass: "placeHolder-1",
    },
	{
        id: "64",
        title: "HARANA",
        artist: "Parokya Ni Edgar",
        genre: "",
        description: "",
        src: "tracks/Harana-Parokya Ni Edgar.mp3",
        coverText: "PAROKYA",
        styleClass: "placeHolder-1",
    },
	{
        id: "65",
        title: "ULAN",
        artist: "Cueshé",
        genre: "",
        description: "",
        src: "tracks/Ulan - Cueshé.mp3",
        coverText: "CUESHE",
        styleClass: "placeHolder-1",
    },
	{
        id: "66",
        title: "ANG HULING EL BIMBO",
        artist: "Ely Buendia",
        genre: "",
        description: "",
        src: "tracks/Ang Huling El Bimbo.mp3",
        coverText: "ELY BUENDIA",
        styleClass: "placeHolder-1",
    },
	{
        id: "67",
        title: "NOBELA",
        artist: "Join The Club",
        genre: "",
        description: "",
        src: "tracks/Nobela-Join The Club.mp3",
        coverText: "NOBELA",
        styleClass: "placeHolder-1",
    },
	{
        id: "68",
        title: "SHOT PUNO",
        artist: "JK Labajo",
        genre: "",
        description: "",
        src: "tracks/Shot Puno - Juan Karlos.mp3",
        coverText: "JUAN",
        styleClass: "placeHolder-1",
    },
	{
        id: "69",
        title: "MANHID",
        artist: "JK Labajo",
        genre: "",
        description: "",
        src: "tracks/Manhid - Juan Karlos.mp3",
        coverText: "JK",
        styleClass: "placeHolder-1",
    },
	{
        id: "70",
        title: "TANGA MO JUAN",
        artist: "JK Labajo",
        genre: "",
        description: "",
        src: "tracks/Tanga Mo Juan - Juan Karlos.mp3",
        coverText: "JUAN",
        styleClass: "placeHolder-1",
    },
	{
        id: "71",
        title: "KASING-KASING",
        artist: "JK Labajo",
        genre: "",
        description: "",
        src: "tracks/Kasing Kasing - Juan Karlos.mp3",
        coverText: "JUAN KARLOS",
        styleClass: "placeHolder-1",
    },
	{
        id: "72",
        title: "TULOG NA",
        artist: "SugarFree",
        genre: "",
        description: "",
        src: "tracks/Tulog Na - SugarFree.mp3",
        coverText: "SUGARFREE",
        styleClass: "placeHolder-1",
    },
	{
        id: "73",
        title: "ELESI",
        artist: "Rivermaya",
        genre: "",
        description: "",
        src: "tracks/Elesi-Rivermaya.mp3",
        coverText: "RIVERMAYA",
        styleClass: "placeHolder-1",
    },
	{
        id: "74",
        title: "NAKAPAGTATAKA",
        artist: "Sponge Cola",
        genre: "",
        description: "",
        src: "tracks/Nakapagtataka-Sponge Cola.mp3",
        coverText: "SPONGECOLA",
        styleClass: "placeHolder-1",
    },
	{
        id: "75",
        title: "KAHIT DIMO ALAM",
        artist: "December Avenue",
        genre: "",
        description: "",
        src: "tracks/Kahit Di Mo Alam - December Avenue.mp3",
        coverText: "DECEMBER AVENUE",
        styleClass: "placeHolder-1",
    },
	{
        id: "76",
        title: "BUKO",
        artist: "Jireh Lim",
        genre: "",
        description: "",
        src: "tracks/BUKO-Jireh Lim.mp3",
        coverText: "JIREH",
        styleClass: "placeHolder-1",
    },
	{
        id: "77",
        title: "SA NGALAN NG PAG-IBIG",
        artist: "December Avenue",
        genre: "",
        description: "",
        src: "tracks/Sa Ngalan Ng Pag-Ibig-December Avenue.mp3",
        coverText: "DECEMBER AVENUE",
        styleClass: "placeHolder-1",
    },
	{
        id: "78",
        title: "YAKAP SA DILIM",
        artist: "Orange & Lemons",
        genre: "",
        description: "",
        src: "tracks/Yakap sa Dilim-Orange&Lemons.mp3",
        coverText: "ORANGE&LEMONS",
        styleClass: "placeHolder-1",
    },
	{
        id: "79",
        title: "HALAGA",
        artist: "Parokya Ni Edgar",
        genre: "",
        description: "",
        src: "tracks/Halaga-Parokya Ni Edgar.mp3",
        coverText: "PAROKYA",
        styleClass: "placeHolder-1",
    },
	{
        id: "80",
        title: "TORETE",
        artist: "Moonstar88",
        genre: "",
        description: "",
        src: "tracks/TORETE - Moonstar88.mp3",
        coverText: "MOONSTAR88",
        styleClass: "placeHolder-1",
    },
	{
        id: "81",
        title: "KAPAG LASING KA LANG MALAMBING",
        artist: "Mayonnaise",
        genre: "",
        description: "",
        src: "tracks/Kapag Lasing Ka Lang Malambing-Mayonnaise.mp3",
        coverText: "MAYONNAISE",
        styleClass: "placeHolder-1",
    },
	{
        id: "82",
        title: "PARE KO",
        artist: "Unknown",
        genre: "",
        description: "",
        src: "tracks/Pare Ko.mp3",
        coverText: "UNKNOWN",
        styleClass: "placeHolder-1",
    },
	{
        id: "83",
        title: "MAGBALIK",
        artist: "Callalily",
        genre: "",
        description: "",
        src: "tracks/Magbalik-Callalily.mp3",
        coverText: "CALLALILY",
        styleClass: "placeHolder-1",
    },
	{
        id: "84",
        title: "HINAHANAP-HANAP KITA",
        artist: "Rivermaya",
        genre: "rock",
        description: "",
        src: "tracks/Hinahanap-Hanap Kita-Ribermaya.mp3",
        coverText: "RIVERMAYA",
        styleClass: "placeHolder-1",
    },
	{
        id: "85",
        title: "NARDA",
        artist: "Kamikazee",
        genre: "",
        description: "",
        src: "tracks/Narda-Kamikazee.mp3",
        coverText: "KAMIKAZEE",
        styleClass: "placeHolder-1",
    },
	{
        id: "86",
        title: "PASENSYA KANA",
        artist: "Silent Sanctuary",
        genre: "",
        description: "",
        src: "tracks/Pasensya Ka Na-Silent Santuary.mp3",
        coverText: "SILENT SANCTUARY",
        styleClass: "placeHolder-1",
    },
	{
        id: "87",
        title: "KISAPMATA",
        artist: "Rivermaya",
        genre: "",
        description: "",
        src: "tracks/Kisapmata-Rivermaya.mp3",
        coverText: "RIVERMAYA",
        styleClass: "placeHolder-1",
    },
	{
        id: "88",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "89",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "90",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "91",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "92",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "93",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "94",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "95",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "96",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "97",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "98",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "99",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
	{
        id: "100",
        title: "",
        artist: "",
        genre: "",
        description: "",
        src: "",
        coverText: "",
        styleClass: "placeHolder-1",
    },
];

// =========================================================================
// 2. DOM ELEMENT SELECTORS
// =========================================================================
const audio = document.getElementById('hero-audio');
const masterPlayBtn = document.getElementById('master-toggle');
const volumeSlider = document.getElementById('volume-slider');
const gridContainer = document.getElementById('dynamic-music-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const nowPlayingBox = document.getElementById('now-playing-display');
const nowPlayingText = document.getElementById('now-playing-text');
const meterContainer = document.querySelector('.sound-meter-container');
const meterBars = document.querySelectorAll('.sound-meter-container .meter-bar');
const searchActionBtn = document.getElementById('search-action-btn'); // Siguraduhing pareho ang spelling sa HTML ID!

// Global Runtime State Management Controls
let currentActiveGenre = "all";
let searchQuery = "";
let activeTrackObject = AUDIO_DATABASE[0]; // Set default first track template

// Web Audio API Node Pipeline References
let audioCtx;
let analyserNode;
let freqDataArray;
let audioSourceNode;
let isEqInitialized = false;

const prevTrackBtn = document.getElementById('prev-track-btn');
const nextTrackBtn = document.getElementById('next-track-btn');
const trackTimeline = document.getElementById('track-timeline');
const timeElapsedDisplay = document.getElementById('time-elapsed');
const timeRemainingDisplay = document.getElementById('time-remaining');
let isUserDraggingTimeline = false; 


// =========================================================================
// 3. GENERATION PIPELINE ENGINE
// =========================================================================
function renderLibraryGrid() {
    // 1. Target the grid container safely
    const gridContainer = document.getElementById('dynamic-music-grid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = "";

    // 2. Clear out whitespaces from the search box data inputs
    const cleanQuery = searchQuery.toString().toLowerCase().trim();

    // 3. Execute dual-filtering mathematics
    const filteredTracks = AUDIO_DATABASE.filter(track => {
        // Cross-check matching categorizations
        const matchesGenre = currentActiveGenre === "all" || 
                             track.genre.toLowerCase() === currentActiveGenre.toLowerCase();
        
        // Safety check to handle blank fields in track array variables smoothly
        const trackTitle = track.title ? track.title.toLowerCase() : "";
        const trackArtist = track.artist ? track.artist.toLowerCase() : "";
        
        // If search box is empty, automatically match everything in this category
        const matchesSearch = cleanQuery === "" || 
                              trackTitle.includes(cleanQuery) || 
                              trackArtist.includes(cleanQuery);
        
        return matchesGenre && matchesSearch;
    });

    // 4. Return message alert frame if zero matches found
    if (filteredTracks.length === 0) {
        gridContainer.innerHTML = `<p style="grid-column: 1/-1; opacity:0.5; font-size:14px; color:#fff; text-align: center; width: 100%; margin-top: 20px;">No tracks found matching your search criteria.</p>`;
        return;
    }

    // 5. Append matching items back into your grid using your original system classes
    filteredTracks.forEach(track => {
        const cardHTML = `
            <div class="track-card" data-src="${track.src}" data-id="${track.id}">
                <div class="card-cover-wrapper">
                    <div class="cover-art ${track.styleClass}">${track.coverText}</div>
                    <button class="card-play-overlay">▶</button>
                </div>
                <div class="card-content">
                    <span class="artist-tag">${track.artist}</span>
                    <h3 class="track-title">${track.title}</h3>
                    <p class="track-description">${track.description}</p>
                </div>
            </div>
        `;
        gridContainer.innerHTML += cardHTML;
    });

    // 6. Connect your selection event listener hooks back to the card nodes
    attachCardListeners();
}



// =========================================================================
// 4. INTERACTION EVENT BINDINGS
// =========================================================================
function attachCardListeners() {
    const renderedCards = document.querySelectorAll('.track-card');

    renderedCards.forEach(card => {
        const overlayButton = card.querySelector('.card-play-overlay');

        card.addEventListener('click', () => {
            handleTrackSelection(card);
        });

        overlayButton.addEventListener('click', (e) => {
            e.stopPropagation();
            handleTrackSelection(card);
        });
    });
}

function handleTrackSelection(activeCard) {
    const trackId = activeCard.getAttribute('data-id');
    const selectedTrack = AUDIO_DATABASE.find(t => String(t.id) === String(trackId));
    
    // Check if the source file is identical (using includes to manage browser host URL wrappers)
    if (audio.src.includes(selectedTrack.src)) {
        toggleMainPlayback();
    } else {
        activeTrackObject = selectedTrack;
        audio.src = selectedTrack.src;
        audio.load(); // Clean internal track decoding buffer allocations
        
        // Initialize equalizer processing node instantly upon song selection change
        if (window.AudioContext || window.webkitAudioContext) {
            initAudioEqualizer();
        }

        audio.play()
            .then(() => {
                masterPlayBtn.classList.add('playing');
                updateNowPlayingUI(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
            .catch(err => console.error("Media allocation execution block failed:", err));
    }
}

// =========================================================================
// 5. MONITOR CONTROL AND DISPLAY UPDATES
// =========================================================================
masterPlayBtn.addEventListener('click', () => {
    // FIX: Siguraduhing kapag pinindot ang master button nang walang kanta, may prefix na 'tracks/'
    if (!audio.src || audio.src === "" || audio.src.includes("soundhelix.com")) {
        // Kung walang nakalagay sa src, kukunin ang unang kanta sa database at idurugtong ang folder path
        activeTrackObject = AUDIO_DATABASE[0];
        audio.src = "tracks/" + activeTrackObject.src;
        audio.load();
    }
    toggleMainPlayback();
});

function toggleMainPlayback() {
    if (window.AudioContext || window.webkitAudioContext) initAudioEqualizer();

    if (audio.paused) {
        audio.play()
            .then(() => {
                masterPlayBtn.classList.add('playing');
                updateNowPlayingUI(true);
            })
            .catch(err => console.log("Playback error:", err));
    } else {
        audio.pause();
        masterPlayBtn.classList.remove('playing');
        updateNowPlayingUI(false);
    }
}

function handleTrackSelection(activeCard) {
    const trackId = activeCard.getAttribute('data-id');
    const selectedTrack = AUDIO_DATABASE.find(t => String(t.id) === String(trackId));
    
    // Check if the current playing source matches the selected track string name
    if (audio.src.includes(selectedTrack.src) && selectedTrack.src !== "") {
        toggleMainPlayback();
    } else {
        activeTrackObject = selectedTrack;
        
        // Pwersahing may safe fallback: tinitiyak na may 'tracks/' folder path tuwing pumipili ng card
        if (selectedTrack.src.startsWith("tracks/")) {
            audio.src = selectedTrack.src;
        } else {
            audio.src = "tracks/" + selectedTrack.src;
        }
        
        audio.load();
        
        if (window.AudioContext || window.webkitAudioContext) initAudioEqualizer();

        audio.play()
            .then(() => {
                masterPlayBtn.classList.add('playing');
                updateNowPlayingUI(true);
            })
            .catch(err => console.error("Playback target failed:", err));
    }
}

function updateNowPlayingUI(isPlaying) {
    if (isPlaying) {
        nowPlayingBox.classList.add('active-stream');
        // Update offline text status flags
        const indicator = nowPlayingBox.querySelector('.status-indicator');
        if (indicator) indicator.innerText = "NOW PLAYING // ";
        nowPlayingText.innerText = `${activeTrackObject.title} — ${activeTrackObject.artist}`;
    } else {
        nowPlayingBox.classList.remove('active-stream');
        const indicator = nowPlayingBox.querySelector('.status-indicator');
        if (indicator) indicator.innerText = "PAUSED // ";
        nowPlayingText.innerText = `${activeTrackObject.title} — ${activeTrackObject.artist}`;
    }
}

// Volume Gain Mapping
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// =========================================================================
// 6. GENRE FILTER LOGIC
// =========================================================================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        currentActiveGenre = button.getAttribute('data-genre').toLowerCase();
        renderLibraryGrid();
    });
});

// =========================================================================
// 7. SYNCHRONIZED EQUALIZER PROCESSOR (HYPER-AGGRESSIVE & ZERO-SMOOTHING)
// =========================================================================
function initAudioEqualizer() {
    if (isEqInitialized) return;
    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyserNode = audioCtx.createAnalyser();
        audioSourceNode = audioCtx.createMediaElementSource(audio);
        audioSourceNode.connect(analyserNode);
        analyserNode.connect(audioCtx.destination);
        
        analyserNode.fftSize = 32; 
        
        // 1. ZEROD OUT THE SMOOTHING: Ginawang 0 para maging raw, instant, at walang prenong galaw
        analyserNode.smoothingTimeConstant = 0.0; 
        
        freqDataArray = new Uint8Array(analyserNode.frequencyBinCount);
        isEqInitialized = true;
        renderEqualizerFrame();
    } catch (e) { console.warn("Context blocked:", e); }
}

function renderEqualizerFrame() {
    requestAnimationFrame(renderEqualizerFrame);
    if (audio.paused) {
        if (meterContainer) meterContainer.classList.remove('active-audio-render');
        meterBars.forEach(bar => bar.style.height = "15%");
        return;
    }
    if (meterContainer) meterContainer.classList.add('active-audio-render');
    analyserNode.getByteFrequencyData(freqDataArray);
    
    for (let i = 0; i < meterBars.length; i++) {
        // 2. EXTREME MULTIPLIER: Ginawang 1.45x para kahit kaunting kalabit ng sound frequency, sisipa agad sa pula ang bar
        let heightPercent = ((freqDataArray[i] * 1.45) / 255) * 100;
        
        if (heightPercent < 15) heightPercent = 15;
        if (heightPercent > 100) heightPercent = 100;
        meterBars[i].style.height = `${heightPercent}%`;
    }
}


// =========================================================================
// 8. CONTINUOUS PLAYBACK ENGINE (AUTO ADVANCE PIPELINE WITH DIAGNOSTICS)
// =========================================================================
audio.addEventListener('ended', () => {
    console.log("Song naturally ended. Triggering auto-advance...");
    playNextTrack();
});

function playNextTrack() {
    // Look for current song by ID or matching source text
    let currentIndex = AUDIO_DATABASE.findIndex(track => String(track.id) === String(activeTrackObject.id));
    
    if (currentIndex === -1) {
        currentIndex = AUDIO_DATABASE.findIndex(track => audio.src.includes(track.src));
    }

    console.log("Finished song index position:", currentIndex);

    // Step to the next track index
    currentIndex++;
    
    // Safety check: if we hit the end of the rotation array, go back to track 0
    if (currentIndex >= AUDIO_DATABASE.length || currentIndex < 0) {
        console.log("End of rotation reached. Resetting playlist back to song 1.");
        currentIndex = 0;
    }
    
    // Load up the new track
    activeTrackObject = AUDIO_DATABASE[currentIndex];
    console.log("Now loading next track:", activeTrackObject.title);

    audio.src = activeTrackObject.src;
    audio.load(); 
    
    audio.play()
        .then(() => {
            masterPlayBtn.classList.add('playing');
            updateNowPlayingUI(true);
        })
        .catch(err => console.error("Continuous loop track jump failed:", err));
}

// =========================================================================
// 9. TIMELINE TRACKING AND NAVIGATION CONTROL WORKSPACE
// =========================================================================

// Helper utility to convert raw float seconds into a standard 0:00 visual digital layout
function formatTimeLayout(seconds) {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Listen to real-time track progress intervals directly from the audio element
audio.addEventListener('timeupdate', () => {
    if (!audio.duration || isUserDraggingTimeline) return;

    // 1. Calculate and update timeline handle slider position percentage
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    trackTimeline.value = progressPercent;

    // 2. Compute visual timestamp readouts
    timeElapsedDisplay.innerText = formatTimeLayout(audio.currentTime);
    
    const secondsLeft = audio.duration - audio.currentTime;
    timeRemainingDisplay.innerText = `-${formatTimeLayout(secondsLeft)}`;
});

// Update audio values when files finish internal metadata loading computations
audio.addEventListener('loadedmetadata', () => {
    trackTimeline.value = 0;
    timeElapsedDisplay.innerText = "0:00";
    timeRemainingDisplay.innerText = `-${formatTimeLayout(audio.duration)}`;
});

// Allow the user to seek/scrub through the song by dragging the progress bar slider
trackTimeline.addEventListener('input', () => {
    isUserDraggingTimeline = true;
});

trackTimeline.addEventListener('change', () => {
    if (!audio.duration) return;
    
    // Convert slider percentage back to raw audio target seconds timestamp
    const targetSeconds = (trackTimeline.value / 100) * audio.duration;
    audio.currentTime = targetSeconds;
    
    isUserDraggingTimeline = false;
});

// --- NAVIGATION HOOK BINDINGS (SKIP CONTROLS) ---

// Forward Skip Action Button 
nextTrackBtn.addEventListener('click', () => {
    console.log("Next track manually requested via user click UI event...");
    playNextTrack(); // Triggers your existing continuous advance function sequence
});

// Backward Skip Action Button
prevTrackBtn.addEventListener('click', () => {
    console.log("Previous track manually requested via user click UI event...");
    playPreviousTrack();
});

function playPreviousTrack() {
    let currentIndex = AUDIO_DATABASE.findIndex(track => String(track.id) === String(activeTrackObject.id));
    
    if (currentIndex === -1) {
        currentIndex = AUDIO_DATABASE.findIndex(track => audio.src.includes(track.src));
    }

    // Move backward in the index array list layout
    currentIndex--;
    
    // Wrap around to the final element if clicking backward on the first song
    if (currentIndex < 0) {
        currentIndex = AUDIO_DATABASE.length - 1;
    }
    
    activeTrackObject = AUDIO_DATABASE[currentIndex];
    audio.src = activeTrackObject.src;
    audio.load();
    
    if (window.AudioContext || window.webkitAudioContext) {
        initAudioEqualizer();
    }

    audio.play()
        .then(() => {
            masterPlayBtn.classList.add('playing');
            updateNowPlayingUI(true);
        })
        .catch(err => console.error("Previous track selection execution crashed:", err));
}

// =========================================================================
// 10. SCROLL MONITORING FOR STICKY FLOATING TRACKER BAR
// =========================================================================
const heroHeader = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    if (!nowPlayingBox || !heroHeader) return;

    // Calculate when the user has scrolled past the top header element
    const headerBottomThreshold = heroHeader.offsetTop + heroHeader.offsetHeight - 80;

    if (window.scrollY > headerBottomThreshold) {
        // Safe check: Only add if it's not already active to prevent frame stuttering
        if (!nowPlayingBox.classList.contains('sticky-floating-bar')) {
            nowPlayingBox.classList.add('sticky-floating-bar');
        }
    } else {
        // Strip the class to snap it back gracefully into its original home grid slot
        if (nowPlayingBox.classList.contains('sticky-floating-bar')) {
            nowPlayingBox.classList.remove('sticky-floating-bar');
        }
    }
});

// =========================================================================
// 11. SEARCH PROCESSING LOGIC BINDINGS
// =========================================================================

// Execute search algorithm when the magnifying glass is clicked
searchActionBtn.addEventListener('click', () => {
    // Force grab the absolute latest text written inside the box right now
    searchQuery = searchInput.value;
    console.log("Magnifying glass clicked. Searching for query:", searchQuery);
    renderLibraryGrid();
});

// Execute search automatically if the user types or hits "Enter"
searchInput.addEventListener('input', (e) => {
    // Real-time fallback: update search query as they type
    searchQuery = searchInput.value;
    
    // If they clear the text completely with backspace, instantly reset grid view
    if (searchInput.value === "") {
        searchQuery = "";
        renderLibraryGrid();
    }
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchQuery = searchInput.value;
        renderLibraryGrid();
    }
});



// INITIAL RUNTIME STARTUP TRIGGER
document.addEventListener("DOMContentLoaded", () => {
renderLibraryGrid();
});

