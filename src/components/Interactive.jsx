import { useState } from 'react';
import Table from './Table';
const variables = [
    {
        'id': 'var01',
        'description': 'Number of artists employed',
        'value': 30
    },
    {
        'id': 'var02',
        'description': 'Average number of hours worked by a core artist',
        'value': 189
    },
    {
        'id': 'var03',
        'description': 'Average hourly wage earned by an artist',
        'value': 10.1
    },
    {
        'id': 'var04',
        'description': 'Average artist attendance at extra service offering (2-6)',
        'value': 4
    },
    {
        'id': 'var05',
        'description': 'Number of fulltime staff (includes administrative roles)',
        'value': 6
    },
    {
        'id': 'var06',
        'description': 'Average wage of full-time staff artists (non administrative roles)',
        'value': 32409
    },
    {
        'id': 'var07',
        'description': 'Number of part-time staff',
        'value': 2
    },
    {
        'id': 'var08',
        'description': 'Average wage of part-time staff artists ',
        'value': 11172
    },
    {
        'id': 'var09',
        'description': 'Number of cottage industry artists',
        'value': 3
    },
    {
        'id': 'var10',
        'description': 'Average wage of cottage artists',
        'value': 1671
    },
    {
        'id': 'var11',
        'description': 'Number of major community partnerships',
        'value': 0
    },
    {
        'id': 'var12',
        'description': 'Number of volunteers for Honey for the Heart',
        'value': 2000
    },
    {
        'id': 'var13',
        'description': 'Number of volunteer hours for all PW activities',
        'value': 7712
    },
    {
        'id': 'var14',
        'description': 'Number of OU Interns annually',
        'value': 5
    },
    {
        'id': 'var15',
        'description': 'Number of OU class observers/other OU activities',
        'value': 3770
    },
    {
        'id': 'var16',
        'description': 'Total revenue from sales',
        'value': 275000
    },
    {
        'id': 'var17',
        'description': 'Average cost of PW flower (33-150)',
        'value': 91.5
    },
    {
        'id': 'var18',
        'description': 'LBS of aouminum printing plates',
        'value': 1600
    },
    {
        'id': 'var19',
        'description': 'LBS of wood for flowers',
        'value': 900
    },
    {
        'id': 'var20',
        'description': 'LBS of fabric',
        'value': 1200
    }
]

function suma(a, b) {
    return a + b
}

const tables = [
    {
        "type": "economic_impact",
        "title": "Economic impact",
        "information": "Lorem ipsum",
        "totalValue": "313.874,6",
        "rows": [
            {
                "stakeholders": "Core Artists",
                "outcomes": "Ability to make a wage in a creative capacity",
                "value": 45813.6,
                "funcion": suma(),
                "rows": {
                    "stakeholders": "Proxy 1",
                    "outcomes": [
                        "Number of artists employed",
                        "Average number of hours worked by a core artist",
                        "Average hourly wage earned by an artist",
                        "Total Value of ability to make a wage in a creative capacity"
                    ],
                    "value": [
                        24,
                        189,
                        10.1,
                        45813.6
                    ]
                },
                "formula": "24 * 189 * 10.1 = 45813.6"
            },
            {
                "stakeholders": "Staff Artists",
                "outcomes": "Increased ability to be employed in a creative capacity",
                "value": 221811,
                "rows": {
                    "stakeholders": "Proxy 2",
                    "outcomes": [
                        "Number of fulltime staff (includes administrative roles)",
                        "Average wage of full-time staff artists (non administrative roles)",
                        "Number of part-time staff",
                        "Average wage of part-time staff artists",
                        "Number of cottage industry artists",
                        "Average wage of cottage artists",
                        "Total value for staff artists of Increased ability to be employed in a creative capacity"
                    ],
                    "value": [
                        6,
                        32409,
                        2,
                        11172,
                        3,
                        1671,
                        221811
                    ]
                },
                "formula": "6 * 32409 + 2 * 11172 + 3 * 1671 = 221811"
            },
            {
                "stakeholders": "Ohio University Students",
                "outcomes": "Increased experiential learning experience",
                "value": 32500,
                "rows": {
                    "stakeholders": "Proxy 3",
                    "outcomes": [
                        "Number of OU Interns annually",
                        "Increase in average reported FTE and PTE starting salary for graduates with service learning experience (Matthews et al., 2015)",
                        "Value of increased experiential learning experience"
                    ],
                    "value": [
                        5,
                        6500,
                        32500
                    ]
                },
                "formula": "5 * 6500 = 32500"
            },
            {
                "stakeholders": "Customers",
                "outcomes": "Ability to purchase goods to support a mission (consious consumption)",
                "value": 13750,
                "rows": {
                    "stakeholders": "Proxy 4",
                    "outcomes": [
                        "Total revenue from sales",
                        "Consumers are willing to pay up to 5% more for environmentally friendly products (Holbrook, 2019).",
                        "Value of ability to purchase goods to support a mission (consious consumption)"
                    ],
                    "value": [
                        275000,
                        "5%",
                        13750
                    ]
                },
                "formula": "275000 * 5% = 13750"
            },
            {
                "stakeholders": "Similar Organizations",
                "outcomes": "Increased Sustainability",
                "value": "",
                "rows": {
                    "stakeholders": "Proxy 5",
                    "outcomes": [
                        "",
                        ""
                    ],
                    "value": [
                        0,
                        0
                    ]
                },
                "formula": "0 + 0 = x"
            }
        ],
        "formula": "45813.6 + 221811 + 32500 + 13750 = 313874.6"
    },
    {
        "type": "social_impact",
        "title": "Social impact",
        "information": "Lorem ipsum",
        "totalValue": "3.515.917,89",
        "rows": [
            {
                "stakeholders": "Core Artists",
                "outcomes": "Artists build a sense of identity",
                "value": 36000,
                "rows": {
                    "stakeholders": "Proxy 6",
                    "outcomes": [
                        "Number of artists employed",
                        "Wellbeing valuation of sense of identity",
                        "Total value of building a sense of identity"
                    ],
                    "value": [
                        24,
                        1500,
                        36000
                    ]
                },
                "formula": "24 * 1500 = 36000"
            },
            {
                "stakeholders": "Core Artists",
                "outcomes": "Increased maturity and self-reliance",
                "value": 60000,
                "rows": {
                    "stakeholders": "Proxy 7",
                    "outcomes": [
                        "Number of artists employed",
                        "Wellbeing valuation of independence/agency",
                        "Total value of increased maturity and self-reliance"
                    ],
                    "value": [
                        24,
                        2500,
                        60000
                    ]
                },
                "formula": "24 * 2500 = 60000"
            },
            {
                "stakeholders": "Core Artists",
                "outcomes": "Elevated well-being",
                "value": 48000,
                "rows": {
                    "stakeholders": "Proxy 8",
                    "outcomes": [
                        "Number of artists employed",
                        "Health benefits of having a sense of connection with others",
                        "Total value of elevated well-being"
                    ],
                    "value": [
                        24,
                        2000,
                        48000
                    ]
                },
                "formula": "24 * 2000 = 48000"
            },
            {
                "stakeholders": "Core Artists",
                "outcomes": "Increased reciprocal learning - reciprocal mentoring (skill building/proficiency)",
                "value": 72000,
                "rows": {
                    "stakeholders": "Proxy 9",
                    "outcomes": [
                        "Number of artists employed",
                        "Number of fulltime staff (includes administrative roles)",
                        "Number of part-time staff",
                        "% time spent informally learning from peers",
                        "FMV of creative teacher",
                        "Value of increased reciprocal learning"
                    ],
                    "value": [
                        24,
                        6,
                        2,
                        "15%",
                        15000,
                        72000
                    ]
                },
                "formula": "(24 + 6 + 2) * 15% * 15000 = 72000"
            },
            {
                "stakeholders": "Staff Artists",
                "outcomes": "Increased sense of purpose",
                "value": 20000,
                "rows": {
                    "stakeholders": "Proxy 10",
                    "outcomes": [
                        "Number of Staff Artists",
                        "Number of fulltime staff (includes administrative roles)",
                        "Health benefits of having sense of purpose at work",
                        "Value of increased sense of purpose"
                    ],
                    "value": [
                        6,
                        2,
                        2500,
                        20000
                    ]
                },
                "formula": "(6 + 2) * 2500 = 20000"
            },
            {
                "stakeholders": "Artist Support People",
                "outcomes": "Increased help with caretaking",
                "value": 63358.85,
                "rows": {
                    "stakeholders": "Proxy 11",
                    "outcomes": [
                        "Number of artists employed (1 artist support person per artist)",
                        "Hours worked by artists",
                        "Average cost of respite care per hour in Ohio (zip recruiter average Ohio)",
                        "Discount for counterfactual (number of artist support person who said they would take artist to dayhab instead)",
                        "Total value of increased help with caretaking"
                    ],
                    "value": [
                        24,
                        189,
                        15.52,
                        "10%",
                        63358.85
                    ]
                },
                "formula": "(24 * 189 * 15.52) - (24 * 189 * 15.52 * 10%) = 63358.85"
            },
            {
                "stakeholders": "Artist Support People",
                "outcomes": "Increased sense of community and community inclusion",
                "value": 76800,
                "rows": {
                    "stakeholders": "Proxy 12",
                    "outcomes": [
                        "Number of artist support people (24 artists multipled times 2 to represent family impacts)",
                        "Wellbeing valuation of increased community connection",
                        "Total value of increased sense of community inclusion"
                    ],
                    "value": [
                        48,
                        1600,
                        76800
                    ]
                },
                "formula": "48 * 1600 = 76800"
            },
            {
                "stakeholders": "Artist Support People",
                "outcomes": "Stress reduction",
                "value": 124800,
                "rows": {
                    "stakeholders": "Proxy 13",
                    "outcomes": [
                        "Number of artist support people reporting PW leads them to experience less stress about their artists's safety (24 artists multipled times 2 to represent family impacts)",
                        "Health impacts of less stress in caregiving /value of knowing loved one is safe",
                        "Total value of stress reduction"
                    ],
                    "value": [
                        48,
                        2600,
                        124800
                    ]
                },
                "formula": "48 + 2600 = 124800"
            },
            {
                "stakeholders": "Community Members",
                "outcomes": "Improved community pride and identity",
                "value": 2413000,
                "rows": {
                    "stakeholders": "Proxy 14",
                    "outcomes": [
                        "Population of Athens City",
                        "Value of placemaking (living in a place with art murals)",
                        "Value of Improved community pride and identity "
                    ],
                    "value": [
                        24130,
                        100,
                        2413000
                    ]
                },
                "formula": "24130 * 100 = 2413000"
            },
            {
                "stakeholders": "Community Members",
                "outcomes": "A place where people network and connect",
                "value": 224959.04,
                "rows": {
                    "stakeholders": "Proxy 15",
                    "outcomes": [
                        "Hours of volunteering from all PassionWorks volunteers",
                        "Value of a volunteer hour",
                        "8Value of a place where people network and connect"
                    ],
                    "value": [
                        7712,
                        29.17,
                        224959.04
                    ]
                },
                "formula": "7712 * 29.17 = 224959.04"
            },
            {
                "stakeholders": "Ohio University Students",
                "outcomes": "Development of cultural competence",
                "value": 377000,
                "rows": {
                    "stakeholders": "Proxy 16",
                    "outcomes": [
                        "Number of OU class observers/other OU activities",
                        "Value of a micro-credential in cultural competence",
                        "Value of development of cultural competence"
                    ],
                    "value": [
                        3770,
                        100,
                        377000
                    ]
                },
                "formula": "3770 * 100 = 377000"
            },
            {
                "stakeholders": "Government",
                "outcomes": "Increased local money flows",
                "value": 159500,
                "rows": {
                    "stakeholders": "Proxy 17",
                    "outcomes": [
                        "Total PassionWorks revenue",
                        "For every $1 spent in a local store, $0.58 will be re-invested in the local community",
                        "Value of increased money flows"
                    ],
                    "value": [
                        275000,
                        0.58,
                        159500
                    ]
                },
                "formula": "275000 * 0.58 = 159500"
            }
        ],
        "formula": "36000 + 60000 + 48000 + 72000 + 20000 + 63358.85 + 76800 + 124800 + 2413000 + 224959.04 + 377000 = 3515917.888"
    },
    {
        "type": "environmental_impact",
        "title": "Environmental Impact",
        "information": "Lorem ipsum",
        "totalValue": "10.689.95",
        "rows": [
            {
                "stakeholders": "Suppliers/Vendors",
                "outcomes": "Increased ability to upcycle their own discard materials",
                "value": 10689.95,
                "rows": {
                    "stakeholders": "Proxy 18",
                    "outcomes": [
                        "kg of aluminum printing plates reused ",
                        "Dollar Value of EC per 1000 kg of aluminum framing ($) (Greenspec, 2023)",
                        "Total embodied carbon cost savings of aluminum reused",
                        "kg of wood for flowers",
                        "Dollar Value of EC per 1000 kg of processed wood ($) (Greenspec, 2023)",
                        "Total embodied carbon cost savings of processed wood reused",
                        "Total Tons of reused/upcycled materials (pounds to tons converstion)",
                        "metric tons CO2 equivalent per ton of food waste (O'Brien, 2016, Table 6)",
                        "Social Cost of Carbon",
                        "Total carbon cost avoided of reused materials",
                        "Total environmental savings - emobdied energy and social cost of carbon averted"
                    ],
                    "value": [
                        720,
                        14229,
                        10244.88,
                        405,
                        36.72,
                        14.87,
                        1.85,
                        1.54,
                        151,
                        430.20,
                        10689.95
                    ]
                },
                "formula": "430.20 + 10244.88 + 14.87 = 10689.95"
            }
        ],
        "formula": "430.20 + 10244.88 + 14.87 = 10689.95"
    }
]

export default function Interactive({ data }) {
    const color = '#00694E'
    const isGeneric = true
    const [outputs, setOutputs] = useState(variables)

    const updateFieldChanged = index => e => {
        console.log('index: ' + index)
        let newArr = [...outputs]
        newArr[index].value = e.target.value

        setOutputs(newArr);
    }
    console.log(outputs);
    return (
        <div className='pt-12 pb-9'>
            <div className='u-container'>
                <div className='rounded-2xl overflow-hidden'>
                    <div className='pt-5 pb-2.5 pl-5 pr-8' style={{
                        backgroundColor: isGeneric ? '#fff' : color
                    }}>
                        <div className='flex items-center gap-x-2'>
                            <h3 className='text-xl text-black'>Program Inputs</h3>
                        </div>
                    </div>

                    <div className='grid grid-cols-12 py-1 px-5 bg-white'>
                        <div className="col-span-10">
                            <h4 className='text-gray-2 text-sm'>
                                Description
                            </h4>
                        </div>
                        <div className="col-span-2 pl-12">
                            <h4 className='text-gray-2 text-sm'>
                                Value
                            </h4>
                        </div>
                    </div>
                    {
                        outputs.map((item, i) => (
                            <div key={i} className='grid grid-cols-12 py-1 px-5 bg-white '>
                                <div className="col-span-10">
                                    <h4 className='text-black'>
                                        {item.description}
                                    </h4>
                                </div>
                                <div className="col-span-2 pl-8">
                                    <input type="text" value={item.value} onChange={updateFieldChanged(i)} className="text-right w-14 " />
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className='space-y-12'>
                    {/* TABLES */}
                    {
                        data.tables.map((table, i) => {
                            if (table.type === 'economic_impact' || table.type === 'social_impact' || table.type === 'environmental_impact') {
                                return (
                                    <Table key={`table-${i + 1}`} color={color} data={table} isLarge />
                                )
                            } else {
                                return (
                                    <Table key={`table-${i + 1}`} color={color} data={table} />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}