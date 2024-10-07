var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: "16",
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    IDAC: {
      name: "Aceh",
      url: "aceh.html",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "23 Kab/Kota"
    },
    IDBA: {
      name: "Bali",
      zoomable: "no",
      color: "#4cd137",
      hover_color: "#44bd32",
      description: "0 Kab/Kota",
      url: "bali.html"
    },
    IDBB: {
      name: "Kepulauan Bangka Belitung",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "7 Kab/Kota",
      url: "bangka-belitung.html"
    },
    IDBE: {
      name: "Bengkulu",
      zoomable: "no",
      color: "#4cd137",
      hover_color: "#44bd32",
      description: "2 Kab/Kota",
      url: "bengkulu.html"
    },
    IDBT: {
      name: "Banten",
      zoomable: "no",
      color: "#4cd137",
      hover_color: "#44bd32",
      description: "2 Kab/Kota",
      url: "banten.html"
    },
    IDGO: {
      name: "Gorontalo",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "5 Kab/Kota",
      url: "gorontalo.html"
    },
    IDJA: {
      name: "Jambi",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "8 Kab/Kota",
      url: "jambi.html"
    },
    IDJB: {
      name: "Jawa Barat",
      zoomable: "no",
      color: "#4cd137",
      hover_color: "#44bd32",
      description: "3 Kab/Kota",
      url: "jawa-barat.html"
    },
    IDJI: {
      name: "Jawa Timur",
      zoomable: "no",
      color: "#fbc531",
      hover_color: "#e1b12c",
      description: "12 Kab/Kota",
      url: "jawa-timur.html"
    },
    IDJK: {
      name: "DKI Jakarta",
      zoomable: "no",
      color: "#fbc531",
      hover_color: "#e1b12c",
      description: "2 Kab/Kota",
      url: "jakarta-raya.html"
    },
    IDJT: {
      name: "Jawa Tengah",
      zoomable: "no",
      color: "#fbc531",
      hover_color: "#e1b12c",
      description: "13 Kab/Kota",
      url: "jawa-tengah.html"
    },
    IDKB: {
      name: "Kalimantan Barat",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "12 Kab/Kota",
      url: "kalimantan-barat.html"
    },
    IDKI: {
      name: "Kalimantan Timur",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "6 Kab/Kota",
      url: "kalimantan-timur.html"
    },
    IDKR: {
      name: "Kepulauan Riau",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "5 Kab/Kota",
      url: "kepulauan-riau.html"
    },
    IDKS: {
      name: "Kalimantan Selatan",
      zoomable: "no",
      color: "#fbc531",
      hover_color: "#e1b12c",
      description: "5 Kab/Kota",
      url: "kalimantan-selatan.html"
    },
    IDKT: {
      name: "Kalimantan Tengah",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "13 Kab/Kota",
      url: "kalimantan-tengah.html"
    },
    IDKU: {
      name: "Kalimantan Utara",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "4 Kab/Kota",
      url: "kalimantan-utara.html"
    },
    IDLA: {
      name: "Lampung",
      zoomable: "no",
      color: "#fbc531",
      hover_color: "#e1b12c",
      description: "5 Kab/Kota",
      url: "lampung.html"
    },
    IDMA: {
      name: "Maluku",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "11 Kab/Kota",
      url: "maluku.html"
    },
    IDMU: {
      name: "Maluku Utara",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "9 Kab/Kota",
      url: "maluku-utara.html"
    },
    IDNB: {
      name: "Nusa Tenggara Barat",
      zoomable: "no",
      color: "#fbc531",
      hover_color: "#e1b12c",
      description: "5 Kab/Kota",
      url: "nusa-tenggara-barat.html"
    },
    IDNT: {
      name: "Nusa Tenggara Timur",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "16 Kab/Kota",
      url: "nusa-tenggara-timur.html"
    },
    IDPA: {
      name: "Papua",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "26 Kab/Kota",
      url: "papua.html"
    },
    IDPB: {
      name: "Papua Barat",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "13 Kab/Kota",
      url: "papua-barat.html"
    },
    IDRI: {
      name: "Riau",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "9 Kab/Kota",
      url: "riau.html"
    },
    IDSA: {
      name: "Sulawesi Utara",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "13 Kab/Kota",
      url: "sulawesi-utara.html"
    },
    IDSB: {
      name: "Sumatera Barat",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "13 Kab/Kota",
      url: "sumatera-barat.html"
    },
    IDSG: {
      name: "Sulawesi Tenggara",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "12 Kab/Kota",
      url: "sulawesi-tenggara.html"
    },
    IDSN: {
      name: "Sulawesi Selatan",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "18 Kab/Kota",
      url: "sulawesi-selatan.html"
    },
    IDSR: {
      name: "Sulawesi Barat",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "5 Kab/Kota",
      url: "sulawesi-barat.html"
    },
    IDSS: {
      name: "Sumatera Selatan",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "13 Kab/Kota",
      url: "sumatera-selatan.html"
    },
    IDST: {
      name: "Sulawesi Tengah",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "11 Kab/Kota",
      url: "sulawesi-tengah.html"
    },
    IDSU: {
      name: "Sumatera Utara",
      zoomable: "no",
      color: "#e84118",
      hover_color: "#c23616",
      description: "25 Kab/Kota",
      url: "sumatera-utara.html"
    },
    IDYO: {
      name: "Daerah Istimewa Yogyakarta",
      zoomable: "no",
      color: "#4cd137",
      hover_color: "#44bd32",
      description: "0 Kab/Kota",
      url: "yogyakarta.html"
    }
  },
  locations: {},
  labels: {
    IDAC: {
      name: "Aceh",
      parent_id: "IDAC"
    },
    IDBA: {
      name: "Bali",
      parent_id: "IDBA"
    },
    IDBB: {
      parent_id: "IDBB",
      name: "Kepulauan Bangka Belitung"
    },
    IDBE: {
      name: "Bengkulu",
      parent_id: "IDBE"
    },
    IDBT: {
      name: "Banten",
      parent_id: "IDBT"
    },
    IDGO: {
      name: "Gorontalo",
      parent_id: "IDGO"
    },
    IDJA: {
      name: "Jambi",
      parent_id: "IDJA"
    },
    IDJB: {
      name: "Jawa Barat",
      parent_id: "IDJB"
    },
    IDJI: {
      name: "Jawa Timur",
      parent_id: "IDJI"
    },
    IDJK: {
      name: "DKI Jakarta",
      parent_id: "IDJK"
    },
    IDJT: {
      name: "Jawa Tengah",
      parent_id: "IDJT"
    },
    IDKB: {
      name: "Kalimantan Barat",
      parent_id: "IDKB"
    },
    IDKI: {
      name: "Kalimantan Timur",
      parent_id: "IDKI"
    },
    IDKR: {
      name: "Kepulauan Riau",
      parent_id: "IDKR"
    },
    IDKS: {
      name: "Kalimantan Selatan",
      parent_id: "IDKS"
    },
    IDKT: {
      name: "Kalimantan Tengah",
      parent_id: "IDKT"
    },
    IDKU: {
      name: "Kalimantan Utara",
      parent_id: "IDKU"
    },
    IDLA: {
      name: "Lampung",
      parent_id: "IDLA"
    },
    IDMA: {
      name: "Maluku",
      parent_id: "IDMA"
    },
    IDMU: {
      name: "Maluku Utara",
      parent_id: "IDMU"
    },
    IDNB: {
      name: "Nusa Tenggara Barat",
      parent_id: "IDNB"
    },
    IDNT: {
      name: "Nusa Tenggara Timur",
      parent_id: "IDNT"
    },
    IDPA: {
      name: "Papua",
      parent_id: "IDPA"
    },
    IDPB: {
      name: "Papua Barat",
      parent_id: "IDPB"
    },
    IDRI: {
      name: "Riau",
      parent_id: "IDRI"
    },
    IDSA: {
      name: "Sulawesi Utara",
      parent_id: "IDSA"
    },
    IDSB: {
      name: "Sumatera Barat",
      parent_id: "IDSB"
    },
    IDSG: {
      name: "Sulawesi Tenggara",
      parent_id: "IDSG"
    },
    IDSN: {
      name: "Sulawesi Selatan",
      parent_id: "IDSN"
    },
    IDSR: {
      name: "Sulawesi Barat",
      parent_id: "IDSR"
    },
    IDSS: {
      name: "Sumatera Selatan",
      parent_id: "IDSS"
    },
    IDST: {
      name: "Sulawesi Tengah",
      parent_id: "IDST"
    },
    IDSU: {
      name: "Sumatera Utara",
      parent_id: "IDSU"
    },
    IDYO: {
      name: "Daerah Istimewa Yogyakarta",
      parent_id: "IDYO"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};