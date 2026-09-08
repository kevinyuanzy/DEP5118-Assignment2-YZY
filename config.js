var config = {
    style: 'mapbox://styles/kevinyuanzy/cmtjg5a3v00cg01sghlifdhsw',
    accessToken: 'pk.eyJ1Ijoia2V2aW55dWFuenkiLCJhIjoiY201eHprYXU0MGZwejJsb242Y3Nza25oYyJ9.h05hqdnqlx2BwgwbQNuKCg',

    showMarkers: false,
    markerColor: '#3FB1CE',

    inset: false,
    theme: 'light',
    use3dTerrain: false,
    auto: false,

    title: 'From Railway to Green Corridor',

    subtitle: 'The Transformation of Singapore’s Rail Corridor',

    byline: 'By Yuan Zhiyi (A0329836N)',

    footer: 'Created using the Mapbox Storytelling template.',

    chapters: [

    // =====================================================
    // INTRODUCTION
    // =====================================================
    {
        id: 'introduction',
        alignment: 'center',
        hidden: false,

        title: 'Singapore’s Rail Corridor',

        description:
            'Singapore’s Rail Corridor has evolved from former railway infrastructure into a continuous green space extending across different parts of the city. This interactive story traces its transformation through its railway past, present-day condition, surrounding communities and green spaces, and remaining heritage sites. Together, these layers show how former transport infrastructure can take on new roles within the contemporary city.',

        location: {
            center: [103.80000, 1.36000],
            zoom: 10.3,
            pitch: 0,
            bearing: 0
        },

        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',

        // Hide all custom layers for the introduction
        onChapterEnter: [
            {
                layer: 'railway-original-line',
                opacity: 0
            },
            {
                layer: 'railway-current-line',
                opacity: 0
            },
            {
                layer: 'railcorridor-sections',
                opacity: 0
            },
            {
                layer: 'rail-corridor-polygon',
                opacity: 0
            },
            {
                layer: 'population-density1',
                opacity: 0
            },
            {
                layer: 'green-percentage1',
                opacity: 0
            },
            {
                layer: 'parks-int-polygon',
                opacity: 0
            },
            {
                layer: 'heritage-points',
                opacity: 0
            },
            {
                layer: 'rail-stations',
                opacity: 0
            }
        ],

        // Leave this empty.
        // Chapter 1 will decide which layers appear next.
        onChapterExit: []
    },


    // =====================================================
    // CHAPTER 1
    // =====================================================
    {
        id: 'railway-past',
        alignment: 'left',
        hidden: false,

        title: 'The Railway in the Past',

        description:
            'Singapore’s railway history dates back to the early twentieth century. The first railway across the island opened in 1903, connecting the city with Bukit Timah and Woodlands. The network was later realigned, and Tanjong Pagar Railway Station became the southern terminus in 1932. This north–south railway connected Singapore with the Malay Peninsula for decades, shaping a distinctive linear corridor across the island whose traces remain visible today.',

        location: {
            center: [103.80000, 1.36000],
            zoom: 10.8,
            pitch: 0,
            bearing: 0
        },

        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',

        // Show only the original railway
        onChapterEnter: [
            {
                layer: 'railway-original-line',
                opacity: 1
            },
            {
                layer: 'railway-current-line',
                opacity: 0
            },
            {
                layer: 'railcorridor-sections',
                opacity: 0
            },
            {
                layer: 'rail-corridor-polygon',
                opacity: 0
            },
            {
                layer: 'population-density1',
                opacity: 0
            },
            {
                layer: 'green-percentage1',
                opacity: 0
            },
            {
                layer: 'parks-int-polygon',
                opacity: 0
            },
            {
                layer: 'heritage-points',
                opacity: 0
            },
            {
                layer: 'rail-stations',
                opacity: 0
            }
        ],

        // Keep empty for now.
        // Chapter 2 will control the next map state.
        onChapterExit: []
    },

    // =====================================================
    // CHAPTER 2
    // =====================================================
    {
    id: 'from-railway-to-green-corridor',
    alignment: 'right',
    hidden: false,

    title: 'From Railway to Green Corridor',

    description:
        'The former railway alignment has gradually taken on a new role as the Rail Corridor. Today, the corridor is no longer defined only by a transport line, but by a wider landscape of paths, vegetation and public open space. Different sections, however, remain at different stages of transformation.' +

        '<br><br><strong>Rail Corridor Status</strong><br>' +

        '<span style="display:inline-block;width:14px;height:4px;background:#40a55b;margin-right:8px;"></span>Opened Section<br>' +

        '<span style="display:inline-block;width:14px;height:4px;background:#ff6929;margin-right:8px;"></span>Incomplete Section<br>' +

        '<span style="display:inline-block;width:14px;height:4px;background:#1a32d1;margin-right:8px;"></span>Diverted Section<br>' +
        
        '<span style="display:inline-block;width:14px;height:4px;background:#5da8fe;margin-right:8px;"></span>Existing Railway Section',
    
    location: {
        center: [103.80000, 1.36000],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
    },

    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',

    onChapterEnter: [
        {
            layer: 'railway-original-line',
            opacity: 0
        },
        {
            layer: 'railway-current-line',
            opacity: 1
        },
        {
            layer: 'railcorridor-sections',
            opacity: 1
        },
        {
            layer: 'rail-corridor-polygon',
            opacity: 0.6
        },
        {
            layer: 'population-density1',
            opacity: 0
        },
        {
            layer: 'green-percentage1',
            opacity: 0
        },
        {
            layer: 'parks-int-polygon',
            opacity: 0
        },
        {
            layer: 'heritage-points',
            opacity: 0
        },
        {
            layer: 'rail-stations',
            opacity: 0
        }
    ],

    onChapterExit: []
    },


    // =====================================================
    // CHAPTER 3
    // =====================================================
    {
    id: 'communities-along-corridor',
    alignment: 'left',
    hidden: false,

    title: 'Communities Along the Corridor',

    description:
        'The Rail Corridor passes through areas with very different urban conditions. Population density varies considerably between the surrounding subzones, showing that the corridor connects both densely populated neighbourhoods and less intensively developed areas.' +

        '<br><br><strong>Population Density</strong><br>' +
        '<span style="font-size:12px;">persons per km²</span><br>' +

        '<div style="width:180px;height:12px;margin-top:6px;background:linear-gradient(to right,#9ae2ef,#77b8ca,#65a5b8,#5490a6,#316e87);"></div>' +

        '<div style="width:180px;display:flex;justify-content:space-between;font-size:11px;margin-top:3px;">' +
        '<span>0</span>' +
        '<span>26854.92</span>' +
        '</div>',

    location: {
        center: [103.80000, 1.36000],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
    },

    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',

    onChapterEnter: [
        {
            layer: 'railway-original-line',
            opacity: 0
        },
        {
            layer: 'railway-current-line',
            opacity: 1
        },
        {
            layer: 'railcorridor-sections',
            opacity: 0
        },
        {
            layer: 'rail-corridor-polygon',
            opacity: 0.15
        },
        {
            layer: 'population-density1',
            opacity: 0.8
        },
        {
            layer: 'green-percentage1',
            opacity: 0
        },
        {
            layer: 'parks-int-polygon',
            opacity: 0
        },
        {
            layer: 'heritage-points',
            opacity: 0
        },
        {
            layer: 'rail-stations',
            opacity: 0
        }
    ],

    onChapterExit: []
    },

    // =====================================================
    // CHAPTER 4
    // =====================================================
    {
    id: 'green-surroundings',
    alignment: 'right',
    hidden: false,

    title: 'How Green Are the Surrounding Areas?',

    description:
        'Although the Rail Corridor is itself a green space, the surrounding urban environment is not equally green everywhere. The proportion of green space varies between subzones along the corridor. Mapping these differences together with the distribution of parks helps reveal where the corridor forms part of a wider green landscape.' +

        '<br><br><strong>Green Space</strong><br>' +

        '<div style="width:180px;height:12px;margin-top:6px;background:linear-gradient(to right,#cef8b9,#70b950,#297901);"></div>' +

        '<div style="width:180px;display:flex;justify-content:space-between;font-size:11px;margin-top:3px;">' +
        '<span>0%</span>' +
        '<span>79%</span>' +
        '</div>' +

        '<br><span style="display:inline-block;width:14px;height:14px;background:#00e03c;margin-right:8px;"></span>Park / Green Space',

    location: {
        center: [103.80000, 1.36000],
        zoom: 10.8,
        pitch: 0,
        bearing: 0
    },

    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',

    onChapterEnter: [
        {
            layer: 'railway-original-line',
            opacity: 0
        },
        {
            layer: 'railway-current-line',
            opacity: 1
        },
        {
            layer: 'railcorridor-sections',
            opacity: 0
        },
        {
            layer: 'rail-corridor-polygon',
            opacity: 0.15
        },
        {
            layer: 'population-density1',
            opacity: 0
        },
        {
            layer: 'green-percentage1',
            opacity: 0.8
        },
        {
            layer: 'parks-int-polygon',
            opacity: 0.8
        },
        {
            layer: 'heritage-points',
            opacity: 0
        },
        {
            layer: 'rail-stations',
            opacity: 0
        }
    ],

    onChapterExit: []
    },


    // =====================================================
    // CHAPTER 5
    // =====================================================
    {
    id: 'railway-heritage',
    alignment: 'left',
    hidden: false,

    title: 'Traces of the Railway',

    description:
        'The transformation of the corridor has not erased its railway past. Former bridges and other railway-related sites remain visible along the route and contribute to its identity today. These places allow visitors to encounter traces of the corridor’s former transport function while experiencing it as a contemporary public landscape.',

    location: {
        center: [103.77000, 1.31000],
        zoom: 12.0,
        pitch: 0,
        bearing: 0
    },

    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',

    onChapterEnter: [
        {
            layer: 'railway-original-line',
            opacity: 0
        },
        {
            layer: 'railway-current-line',
            opacity: 1
        },
        {
            layer: 'railcorridor-sections',
            opacity: 0
        },
        {
            layer: 'rail-corridor-polygon',
            opacity: 0.45
        },
        {
            layer: 'population-density1',
            opacity: 0
        },
        {
            layer: 'green-percentage1',
            opacity: 0
        },
        {
            layer: 'parks-int-polygon',
            opacity: 0
        },
        {
            layer: 'heritage-points',
            opacity: 1
        },
        {
            layer: 'rail-stations',
            opacity: 0
        }
    ],

    onChapterExit: []
    },

    // =====================================================
    // CHAPTER 5.1: Bukit Timah Railway Station
    // =====================================================
    {
    id: 'bukit-timah-station',
    alignment: 'right',
    hidden: false,

    title: 'Bukit Timah Railway Station',

    image: 'images/BukitTimahRailwayStation3.jpg',

    description:
        'Bukit Timah Railway Station is one of the most recognisable remnants of Singapore’s former railway landscape. Its preservation helps retain the historical identity of the corridor while the surrounding space has taken on a new recreational role.',

    location: {
        center: [103.78150, 1.33450],
        zoom: 15,
        pitch: 0,
        bearing: 0
    },

    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',

    onChapterEnter: [
        { layer: 'railway-current-line', opacity: 1 },
        { layer: 'rail-corridor-polygon', opacity: 0.4 },
        { layer: 'heritage-points', opacity: 1 }
    ],

    onChapterExit: []
},

    // =====================================================
    // CHAPTER 5.2: Queensway Park Node
    // =====================================================
    {
    id: 'queensway-park-node',
    alignment: 'right',
    hidden: false,

    title: 'Queensway Park Node',

    image: 'images/maxresdefault.jpg',

    description:
        'Queensway Node illustrates the Rail Corridor’s growing role as a community space. Located beneath the Queensway Flyover in Queenstown, the node will introduce new spaces for sports, events, gatherings and play. Its development will strengthen connections between the Rail Corridor and nearby neighbourhoods such as Tanglin Halt, Mei Chin and Queensway.',

    location: {
        center: [103.79892, 1.29335],
        zoom: 15,
        pitch: 0,
        bearing: 0
    },

    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',

    onChapterEnter: [
        { layer: 'railway-current-line', opacity: 1 },
        { layer: 'rail-corridor-polygon', opacity: 0.4 },
        { layer: 'heritage-points', opacity: 1 }
    ],

    onChapterExit: []
},

// =====================================================
    // CHAPTER 5.3: Tanjong Pagar Railway Station
    // =====================================================
    {
    id: 'tanjong-pagar-station',
    alignment: 'right',
    hidden: false,

    title: 'Tanjong Pagar Railway Station',

    image: 'images/railwaystation28.jpg',

    description:
        'Once the southern terminus of Singapore’s railway network, Former Tanjong Pagar Railway Station is set to take on a new role within the Rail Corridor. The conserved station will become a key southern gateway connecting the corridor with the CBD and the future Greater Southern Waterfront. Its planned transformation shows how railway heritage can be preserved while being integrated into a new network of public and green spaces.',

    location: {
        center: [103.83861, 1.27298],
        zoom: 15,
        pitch: 0,
        bearing: 0
    },

    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',

    onChapterEnter: [
        { layer: 'railway-current-line', opacity: 1 },
        { layer: 'rail-corridor-polygon', opacity: 0.4 },
        { layer: 'heritage-points', opacity: 1 }
    ],

    onChapterExit: []
},
    // =====================================================
    // CONCLUSION
    // =====================================================
    {
    id: 'conclusion',
    alignment: 'center',
    hidden: false,

    title: 'A New Role for Old Infrastructure',

    description:
        'The Rail Corridor illustrates how former transport infrastructure can take on new urban roles. Its transformation combines green space, connections between neighbourhoods and the preservation of railway heritage. At the same time, differences in population density, surrounding green space and development status show that the corridor is not a uniform landscape, but one that changes as it moves through the city.',

    location: {
        center: [103.80000, 1.36000],
        zoom: 10.3,
        pitch: 0,
        bearing: 0
    },

    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',

    onChapterEnter: [
        {
            layer: 'railway-original-line',
            opacity: 0
        },
        {
            layer: 'railway-current-line',
            opacity: 0
        },
        {
            layer: 'railcorridor-sections',
            opacity: 0
        },
        {
            layer: 'rail-corridor-polygon',
            opacity: 0.55
        },
        {
            layer: 'population-density1',
            opacity: 0
        },
        {
            layer: 'green-percentage1',
            opacity: 0
        },
        {
            layer: 'parks-int-polygon',
            opacity: 0
        },
        {
            layer: 'heritage-points',
            opacity: 0
        },
        {
            layer: 'rail-stations',
            opacity: 0
        }
    ],

    onChapterExit: []
    },
    
    {
    id: 'references',
    alignment: 'center',
    hidden: false,

    title: 'References',

    description: '<p><strong>Background and Planning Information</strong></p><p>National Parks Board (NParks). <a href="https://railcorridor.nparks.gov.sg/visit-rail-corridor/" target="_blank">Visit Rail Corridor</a>.</p><p>National Library Board Singapore (NLB). <a href="https://www.nlb.gov.sg/main/article-detail?cmsuuid=4452dd93-d862-4310-bf0e-4f6ff52812a8" target="_blank">Singapore Railway History</a>.</p><p>Urban Redevelopment Authority (URA). <a href="https://www.ura.gov.sg/land-planning/shaping-our-city/identity-corridors/rail-corridor/" target="_blank">Rail Corridor</a>.</p><p><strong>Data Sources</strong></p><p>URA Master Plan 2003 Railway Line</p><p>URA Master Plan 2019 Subzone Boundary (No Sea)</p><p>Population Data from SingStat</p><p>NParks Parks and Nature Reserves (polygon)</p>',
    location: {
        center: [103.80000, 1.36000],
        zoom: 10.3,
        pitch: 0,
        bearing: 0
    },

    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',

    onChapterEnter: [
        { layer: 'railway-original-line', opacity: 0 },
        { layer: 'railway-current-line', opacity: 0 },
        { layer: 'railcorridor-sections', opacity: 0 },
        { layer: 'rail-corridor-polygon', opacity: 0 },
        { layer: 'population-density1', opacity: 0 },
        { layer: 'green-percentage1', opacity: 0 },
        { layer: 'parks-int-polygon', opacity: 0 },
        { layer: 'heritage-points', opacity: 0 },
        { layer: 'rail-stations', opacity: 0 }
    ],

    onChapterExit: []
}

    ]
};