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
      description: "Prioritas 1",
      url: "aceh.html",
      zoomable: "no"
    },
    IDBA: {
      name: "Bali",
      zoomable: "no"
    },
    IDBB: {
      name: "Bangka-Belitung",
      zoomable: "no"
    },
    IDBE: {
      name: "Bengkulu",
      zoomable: "no"
    },
    IDBT: {
      name: "Banten",
      zoomable: "no"
    },
    IDGO: {
      name: "Gorontalo",
      zoomable: "no"
    },
    IDJA: {
      name: "Jambi",
      zoomable: "no"
    },
    IDJB: {
      name: "Jawa Barat",
      zoomable: "no"
    },
    IDJI: {
      name: "Jawa Timur",
      zoomable: "no"
    },
    IDJK: {
      name: "Jakarta Raya",
      zoomable: "no"
    },
    IDJT: {
      name: "Jawa Tengah",
      zoomable: "no"
    },
    IDKB: {
      name: "Kalimantan Barat",
      zoomable: "no"
    },
    IDKI: {
      name: "Kalimantan Timur",
      zoomable: "no"
    },
    IDKR: {
      name: "Kepulauan Riau",
      zoomable: "no"
    },
    IDKS: {
      name: "Kalimantan Selatan",
      zoomable: "no"
    },
    IDKT: {
      name: "Kalimantan Tengah",
      zoomable: "no"
    },
    IDKU: {
      name: "Kalimantan Utara",
      zoomable: "no"
    },
    IDLA: {
      name: "Lampung",
      zoomable: "no"
    },
    IDMA: {
      name: "Maluku",
      zoomable: "no"
    },
    IDMU: {
      name: "Maluku Utara",
      zoomable: "no"
    },
    IDNB: {
      name: "Nusa Tenggara Barat",
      zoomable: "no"
    },
    IDNT: {
      name: "Nusa Tenggara Timur",
      zoomable: "no"
    },
    IDPA: {
      name: "Papua",
      zoomable: "no"
    },
    IDPB: {
      name: "Papua Barat",
      zoomable: "no"
    },
    IDRI: {
      name: "Riau",
      zoomable: "no"
    },
    IDSA: {
      name: "Sulawesi Utara",
      zoomable: "no"
    },
    IDSB: {
      name: "Sumatera Barat",
      zoomable: "no"
    },
    IDSG: {
      name: "Sulawesi Tenggara",
      zoomable: "no"
    },
    IDSN: {
      name: "Sulawesi Selatan",
      zoomable: "no"
    },
    IDSR: {
      name: "Sulawesi Barat",
      zoomable: "no"
    },
    IDSS: {
      name: "Sumatera Selatan",
      zoomable: "no"
    },
    IDST: {
      name: "Sulawesi Tengah",
      zoomable: "no"
    },
    IDSU: {
      name: "Sumatera Utara",
      zoomable: "no"
    },
    IDYO: {
      name: "Yogyakarta",
      zoomable: "no"
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
      name: "Bangka-Belitung",
      parent_id: "IDBB"
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
      name: "Jakarta Raya",
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
      name: "Yogyakarta",
      parent_id: "IDYO"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};