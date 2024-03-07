// import React from 'react'

import OfferCard from "../../components/static/OfferCard";
import { MdDeveloperMode } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaUsersLine } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";

const Offer = () => {
  return (
    <div className="w-full flex items-center justify-center relative font-pop">
        <div className="w-[90%] flex flex-col justify-center items-center py-[40px] gap-4">

            <h5 className="text-[14px] font-bold md:text-left animate-bounce text-orange-500">OUR SERVICES</h5>

            <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-left">What We Offer for You</h3>

            <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between items-center flex-wrap">

                <OfferCard
                    img={<MdDeveloperMode />}
                    offerName="Software Development"
                    offerContent="Building tailored software solutions to meet specific business needs, whether it's web applications, mobile apps, enterprise software, or other digital products."
                 />

                 <OfferCard
                     img={<TbDeviceMobileCode />}
                     offerName="Mobile App Development"
                     offerContent="Creating native or cross-platform mobile applications for iOS, Android, or other platforms to extend the reach of businesses to mobile users."
                  />

                  <OfferCard
                      img={<IoMdAnalytics />}
                      offerName="Data Analytics & Business Development"
                      offerContent=" Leveraging data to gain insights, make informed decisions, and optimize business performance through data analytics, reporting, and visualization."
                   />

                   <OfferCard
                       img={<FaCloudArrowDown />}
                       offerName="Cloud Services"
                       offerContent="Helping businesses leverage cloud computing platforms such as AWS, Azure, or Google Cloud for scalability, reliability, and cost-effectiveness."
                    />

                    <OfferCard
                        img={<FaUsersLine />}
                        offerName="Digital Marketing"
                        offerContent="Providing digital marketing services such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and content marketing to increase online visibility and drive traffic.

                        "
                     />

                     <OfferCard
                         img={<SiHiveBlockchain />}
                         offerName="Blockchain Solutions"
                         offerContent="Developing blockchain-based applications, smart contracts, and decentralized systems for industries such as finance, supply chain, healthcare, and more."
                      />

            </div>

        </div>
    </div>
  )
}

export default Offer;