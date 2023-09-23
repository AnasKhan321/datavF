import React, { useState } from 'react'
import "./style.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [IsShown, setIsShown] = useState(false);
    const [year, setyear] = useState(false)
    const [topic, settopic] = useState(false)
    const [sector, setsector] = useState(false)
    const [region, setregion] = useState(false)
    const [pest, setpest] = useState(false)
    const [source, setsource] = useState(false)
    const [country, setcountry] = useState(false)

    let years = ['', 2027, 2018, 2025, 2040, 2200, 2019, 2020, 2022, 2017, 2024, 2021, 2026, 2030, 2046, 2126, 2050, 2041, 2035, 2016, 2055, 2028, 2036, 2060, 2034, 2051]

    let topics = ['gas', 'oil', 'consumption', 'market', 'gdp', 'war', 'production', 'export', 'battery', '', 'biofuel', 'policy', 'economy', 'strategy', 'robot', 'growth', 'economic', 'energy', 'food', 'administration', 'unemployment', 'trade', 'demand', 'economic growth', 'industry', 'capital', 'worker', 'tension', 'terrorism', 'transport', 'peak oil', 'vehicle', 'tourist', 'artificial intelligence', 'climate', 'power', 'crisis', 'ice', 'population', 'politics', 'business', 'work', 'coal', 'gamification', 'finance', 'interest rate', 'risk', 'inflation', 'asylum', 'resource', 'plastic', 'electricity', 'bank', 'gasoline', 'car', 'money', 'technology', 'aquaculture', 'city', 'investment', 'revenue', 'emission', 'climate change', 'infrastructure', 'government', 'security', 'software', 'building', 'transportation', 'wealth', 'clothing', 'shortage', 'debt', 'agriculture', 'tax', 'carbon', 'brexit', 'workforce', 'change', 'automaker', 'nuclear', '3D', 'water', 'data', 'fossil fuel', 'election', 'greenhouse gas', 'information', 'shale gas', 'factory', 'farm', 'communication', 'storm', 'consumer', 'material', 'Washington', 'pollution', 'fracking']

    let sectors = ['Energy', 'Environment', '', 'Government', 'Aerospace & defence', 'Manufacturing', 'Retail', 'Financial services', 'Support services', 'Information Technology', 'Healthcare', 'Food & agriculture', 'Automotive', 'Tourism & hospitality', 'Construction', 'Security', 'Transport', 'Water', 'Media & entertainment']

    let regions = ['Northern America', 'Central America', 'World', '', 'Western Africa', 'Western Asia', 'Eastern Europe', 'Central Africa', 'Northern Africa', 'Southern Africa', 'Southern Asia', 'Central Asia', 'Eastern Asia', 'South America', 'South-Eastern Asia', 'Eastern Africa', 'Europe', 'Western Europe', 'Northern Europe', 'Southern Europe', 'Oceania', 'Africa', 'Asia', 'world']

    let pests = ['Industries', 'Environmental', 'Economic', 'Political', 'Technological', '', 'Organization', 'Healthcare', 'Social', 'Lifestyles']

    let sources = ['EIA', 'sustainablebrands.com', 'SBWire', 'CleanTechnica', 'TRAC News', 'Vanguard News', 'Avi Melamed', 'WSJ', 'Abq', 'Reuters', 'Star Tribune', 'EV Obsession', 'creamermedia', 'Resilience', 'TheNews.NG', 'FashionNetwork.com', 'Bloomberg Business', 'Yes Bank', 'EGYPS', 'marketrealist', 'PDQFX news', 'therobotreport', 'nextbigfuture', 'World Bank', 'Zero Hedge', 'Rigzone', 'International Business Times', 'DOE EIA 2013 Energy Conference', 'AllAfrica', 'Energy.gov Website', 'AMERICAN COUNCIL ON SCIENCE AND HEALTH', 'The Jakarta Post', 'Wharton', 'African Arguments', 'Business Insider', 'Convenience Store Decisions', 'The Next Web', 'Cii Radio', 'Global Money Trends', 'Guardian Sustainable Business', 'OklahomaMinerals.com', '4th Annual Congress and Expo on Biofuels and Bioenergy April 27-28 2017 Dubai UAE', 'FX Empire', 'Nexus Conference', 'Fews Net', 'Sputnik News', 'platts', 'CBO', 'The Chirographer', 'THE LEAGUE OF WOMEN VOTERS® OF THE FAIRFAX AREA', 'Yahoo Finance Canada', 'Gii Research', 'South Sudan News Agency', 'Climate Change News', 'the star online', 'khorreports-palmoil', 'Canadian Biomass', 'Informed Choice Chartered Financial Planners in Cranleigh', 'Guarini Center', 'OMFIF', 'South World', 'World Energy News', 'Slinking Toward Retirement', 'unian', 'Scientific American', 'Time', 'Transport Environment', 'Triple Pundit', 'Transport Evolved', 'Fox Business', '', 'The Independent', 'Biofuels Digest', 'IRENA newsroom', 'Nation of Change', 'Middle East Eye', 'IEA', 'Gas 2', 'Peak Prosperity', 'Business Wire', 'RiskMap 2017', 'MRC', 'Insurance Journal', 'Wired UK', 'Technavio', 'News', 'Media Center ', 'EY', 'Tactical Investor', 'Seeking Alpha', 'iMFdirect - The IMF Blog', 'oilprice.com', 'Eurasia Group', 'NY Times', 'Imeche', 'University of Chicago', 'Adam Curry', 'JD Supra', 'UK Government', 'Investopedia', 'Vox', 'South China Morning Post', 'OEM/Lube News', 'PR Newswire', 'Future Market Insights', 'Manufacturing Operations Technology Viewpoints', 'CSIS', 'Edge and Odds', 'maltawinds.com', 'iamericas', 'cpzulia', 'farms', 'Le·gal In·sur·rec·tion', 'IFT', 'International Banker', 'bankofcanada', 'Koenig Investment Advisory', 'Europa', 'Jachin Capital', 'Wells Fargo', 'ethicalconsumer', 'Citibank', 'Cornell University', 'arabellaadvisors', 'Critical Threats', 'Fitch', 'prsync', 'Physics World', 'Renewable Energy World', 'BBC News Technology', 'edie.net', 'Russia Beyond The Headlines', 'Politico', 'Tech Times', 'Wood McKenzie', '3D Printing Progress', 'ihsmarkit', 'Gizmodo Australia', 'The Nation', 'Farms.com', 'McKinsey & Company', 'The Guardian', 'Resources for the Future', 'satprnews', 'GreenBiz', 'CNBC ', 'Sydney Morning Herald', 'www.narendramodi.in', 'CNNMoney', 'EIU', 'Euromoney', 'gasstrategies', 'Cars.co.za', 'dpaq', 'europeanclimate', 'Australian Government', 'TeleTrade', 'Bloomberg New Energy Finance', 'The Economist', 'Phys Org', 'djsresearch', 'nbk', 'Guardian', 'cargill', 'Worldly', 'Utility Dive', 'newscientist', 'westpandi', 'IASTOPPERS', 'THISDAY LIVE', 'veteranstoday', 'thespanisheconomy', 'biologicaldiversity', 'portfolioticker', 'MIT Technology Review', 'FoodQualityNews.com', 'The Conversation', 'World Bank Group', 'TheCable', 'Future Earth', 'Carbon Brief', 'Wikipedia', 'NWF', 'USDA', 'energyglobal', 'IEA.org', 'PwC', 'metalprices', 'GE Reports', 'Project Syndicate', 'Interior Design', 'idc-community', 'Science Daily', 'The Mainichi', 'economy', 'Drill or drop?', 'Huffington Post', 'Lawfare', 'Futureseek Link Digest', 'Environmental Leader', 'Business Standard', 'ESPAS', 'Euler Hermes', 'amundi', 'ebrd', 'Drydock Magazine', 'BorneoPost Online', 'Finance Magnates', 'friday-thinking', 'Newsweek', 'ECFR', 'University of Latvia', 'Future Timeline', 'allianzglobalinvestors', 'controleng', 'inputsmonitor', 'Planetsave ', 'agriworldsa', 'globalmoneytrends', 'Oxfam', 'Gartner', 'clientadvisoryservices', 'IMF', 'Eco-Business.com', 'Channel News Asia', 'War on the Rocks', 'biomassmagazine', 'Think Progress', 'No 2 Nuclear Power', 'ogauthority', 'IBEF', 'Prospects for Development', 'Engineering News', 'NDTV', 'African Development Bank', 'Aljazeera.com', 'worldenergy', 'cloudfront', 'Zawya', 'FAO', 'VOA', 'Hospitality Trends', 'saltlakecityheadlines', 'The Ticker Tape', 'The Globe and Mail', 'AgWeb - The Home Page of Agriculture', 'CAFrackFacts', 'jeita', 'murc', 'Fast Co-Exist', 'Cushman & Wakefield Blog', 'Science News', 'Quartz', 'Total', 'globalizationpartners', 'Washington Post', 'Inside Climate News', 'polymerspaintcolourjournal', 'njc-cnm', 'IISS', 'The Atlantic', 'Innovations Report', 'Nature', 'Cushman & Wakefield', 'Maplecroft', 'Predictive Analytics Times', 'McKinsey Quarterly', 'Countries.com Global Content', 'The Market Mogul', 'knomad', 'UNESCO ', 'GlobalMeatNews.com', 'Motor Magazine', 'MENA-Forum', 'Blue and Green Tomorrow', 'valburyresearch', 'HBR', 'Nanotechnology Innovation', 'oilvoice', 'ecesr', 'Freedonia', 'ethicalmarkets', 'Climate News Network', 'OPEC', 'INSEAD Knowledge', 'CIO', 'Institutional Investor', 'Society of Motor Manufacturers and Traders (SMMT)', 'worldculturepictorial', 'globalfueleconomy', 'LiveMint', 'g7g20', 'Mast', 'ReadWrite', 'LNG', 'European Central Bank', 'Industrial Control Security', 'Verisk Maplecroft', 'ETEnergyworld.com', 'briandcolwell', 'DW.COM', 'Elsevier', 'MAPI', 'Days Of Year', 'Virgin Atlantic', 'Government of Ireland', 'The Engineer', 'ISA', 'Energy Tomorrow', 'Justmeans', 'Khaleej Times', 'Innovaro', 'FutureinFocus', "What's Next", 'Stanford News', 'Middle East Online', 'Neon Nettle', 'Handelsblatt Global Edition', 'EE News', "Before It's News | Alternative News | UFO | Beyond Science | True News| Prophecy News | People Powered News", 'aswm', 'Shenandoah', 'Digitalist Magazine', 'EPA', 'Azonano', 'National Geographic Society (blogs)', 'IER', 'Ocean Acidification', 'Smart Grid Observer', 'Freenewspos', 'AHDB', 'SlideShare', 'VITA Technologies', 'Wall Street Daily', 'Bearnobull', 'CCN: Financial Bitcoin & Cryptocurrency News', 'IRENA', 'International Monetary Fund (IMF)', 'Arangkada Philippines', 'Global Information Inc', 'ID TECH INDEX', 'The Jamestown Foundation', 'savepassamaquoddybay', 'atradius', 'dailyquiddity', 'bankofengland', 'Futurity', 'Business Green', 'About Best Binary Options Strategy', 'IHS Engineering 360', 'European Council', 'Activist Post', 'Newsletter', 'U.S. Environmental Protection Agency', 'Global Money Trends Magazine', 'CAJ News Africa', 'Planetizen', 'CDC', 'Strategy & Formerly Booz & Company', 'PriceWaterhouseCoopers', 'News.com', 'Brookings Institute', 'Innovate UK', 'The Arab Gulf States Institute Washington', 'Embedded Computing Design', 'European Environment Agency', 'Industry Week', 'Atlantic Council ', 'U.K. Ministry of Defense', 'Future in Focus', 'Australian Government Department of Defence', 'MIT Sloan Management Review', 'Scania Group', 'watercanada', 'Common Dreams', 'theicct', 'nbp', 'Thomson Reuters ', 'University Chronicle', 'globalr2p', 'Robothub', 'New Security Beat', 'betterenergy', 'Real Estate Professional', 'Mind Commerce', 'Yahoo Finance', 'Pickens Plan', 'RUSI', 'Hardin Tibbs', 'World Health', 'environmentalpeacebuilding', 'greenerearthnews', 'conferenceseries', 'dailytexanonline', 'EPS News', 'The American Prospect', 'Face2face Africa', 'Oil and Gas Journal', 'Infracircle', 'uschamber', 'energy news cyprus', 'UNEP', 'Foreign Policy', 'Europe in My Region']

    let countries = ['United States of America', 'Mexico', '', 'Nigeria', 'Lebanon', 'Russia', 'Saudi Arabia', 'Angola', 'Egypt', 'South Africa', 'India', 'Ukraine', 'Azerbaijan', 'China', 'Colombia', 'Niger', 'Libya', 'Brazil', 'Mali', 'Indonesia', 'Iraq', 'Iran', 'South Sudan', 'Venezuela', 'Burkina Faso', 'Germany', 'United Kingdom', 'Kuwait', 'Canada', 'Argentina', 'Japan', 'Austria', 'Spain', 'Estonia', 'Hungary', 'Australia', 'Morocco', 'Greece', 'Qatar', 'Oman', 'Liberia', 'Denmark', 'Malaysia', 'Jordan', 'Syria', 'Ethiopia', 'Norway', 'Ghana', 'Kazakhstan', 'Pakistan', 'Gabon', 'United Arab Emirates', 'Algeria', 'Turkey', 'Cyprus', 'Belize', 'Poland']

    return (
        <nav className="flex justify-around py-4 flex-col  md:items-start items-center   shadow-lg md:flex-row  ">
            <div className="logo  text-2xl text-blue-600">
                Welcome Admin!
            </div>


            <ul className="flex justify-around nav flex-col md:flex-row  ">
                <li className="px-4 "   >
                    <Link to='/'>Home </Link>

                </li>
                <li className="px-4 " onMouseEnter={() => { setyear(true) }} onMouseLeave={() => setyear(false)}>End Year
                    {year && <ul>
                        {years.map((e) => {
                            return (
                                <li>
                                    <a href={`/search?end_year=${e}`}>{e}</a>
                                </li>
                            )
                        })}
                    </ul>}
                </li>


                <li className="px-4 " onMouseEnter={() => { settopic(true) }} onMouseLeave={() => settopic(false)} >Topic

                    {topic && <ul>
                        {topics.map((e) => {
                            return (
                                <li>
                                    <a href={`/search?topic=${e}`}>{e}</a>
                                </li>
                            )
                        })}
                    </ul>}
                </li>



                <li className="px-2 " onMouseEnter={() => { setsector(true) }} onMouseLeave={() => setsector(false)}>Sector

                    {sector && <ul>

                        {sectors.map((e) => {
                            return (


                                <li>
                                    <a href={`/search?sector=${e}`}>{e}</a>
                                </li>
                            )
                        })}
                    </ul>}

                </li>
                <li className="px-2 " onMouseEnter={() => { setregion(true) }} onMouseLeave={() => setregion(false)} >Region
                    {region && <ul>

                        {regions.map((e) => {
                            return (


                                <li>
                                    <a href={`/search?region=${e}`}>{e}</a>
                                </li>
                            )

                        })}
                    </ul>}

                </li>
                <li className="px-2 " onMouseEnter={() => { setpest(true) }} onMouseLeave={() => setpest(false)} >PESTLE


                    {pest && <ul>

                        {pests.map((e) => {
                            return (
                                <li>
                                    <a href={`/search?pestle=${e}`}>{e}</a>
                                </li>
                            )
                        })}
                    </ul>}

                </li>
                <li className="px-2 " onMouseEnter={()=>{
                    setsource(true)
                }} onMouseLeave={()=>{
                    setsource(false)
                }} >Source  
                
                {source && <ul>
                    
                    {sources.map((e) => {
                            return (
                                <li>
                                    <a href={`/search?source=${e}`}>{e}</a>
                                </li>
                            )
                        })}
                    </ul>}
                </li>
                <li className="px-2 " onMouseEnter={()=>{setcountry(true)}}  onMouseLeave={()=>{setcountry(false)}} >Country  
                
                        {country && <ul>
                            {countries.map((e) => {
                            return (
                                <li>
                                    <a href={`/search?country=${e}`}>{e}</a>
                                </li>
                            )
                        })}
                            
                                </ul>}
                 </li>







            </ul>
        </nav>
    )
}

export default Navbar