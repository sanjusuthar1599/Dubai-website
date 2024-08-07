// eslint-disable-next-line no-unused-vars
import React from 'react';
import './History.css'

const History = () => {
  return (

    
<div className=''>
    <div className="container">
      <div className="row padding-bottom-88">
        <div className="col-md-12">
          <div className="form-group">
            <div className="input-icon input-icon-append">

            <section className="relative h-screen w-screen overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://i.pinimg.com/564x/ce/9b/3a/ce9b3aceb63116df06ca65a19a73197a.jpg"
    alt=""
  />
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right p-8 md:p-12 lg:px-16 lg:py-24">
      
    </div>
  </div>
</section>
            
              
            </div>
            <span aria-hidden="true" className="glyphicon glyphicon-ok form-control-feedback"></span>
            <span id="inputGroupSuccess3Status" className="sr-only">
              (success)
            </span>
          </div>
          <a style={{ display: 'none' }} id="submitSearch" onClick={SearchQuery}></a>
        </div>
      </div>
      <div id="searchResults">
        <div className="row padding-bottom-21">
          
        </div>
        <div>
          <div id="govae" role="tabpanel" className="nonactive active">
            <h2 className="text-black">History from Dubai</h2>
            <div style={{ marginTop: 30, marginBottom: 30 }}>
              <p>
                <span className="light h6 text-black">Displaying</span> <b className="h4 text-black" id="currentGovItems">8</b>{' '}
                <span className="light h6 text-black">of</span> <b className="h4 text-black" id="totalGovItems">8</b>{' '}
                <span className="light h6 text-black">Results</span>
              </p>
            </div>
            <div id="SCSearchListDiv">
              <h4 className="text-black no-padding-top no-margin-top padding-bottom-14">
                <a href="https://u.ae/en/more/history-of-the-uae">History of the UAE | The Official Portal of the UAE Government</a>
              </h4>
              <p>
                The area history can be traced back to 6000 B.C. The UAE as a federation did not exist then. The area and the surrounding region was
                referred to as Arabian Peninsula.&nbsp;The area history can be traced back to 6000 B.C. The UAE as a federation did not exist then. The
                area and ...
              </p>
              <hr />
              <h4 className="text-black no-padding-top no-margin-top padding-bottom-14">
                <a href="https://u.ae/en/information-and-services/business/financial-credibility-for-individuals-and-companies">
                  Credit report of individuals and companies | The Official Portal of the UAE Government
                </a>
              </h4>
              <p>
                Credit report is a document that includes your personal identity information, details of your credit cards, loans and other credit
                facilities, along with your payment and bounced cheque history.
              </p>
              <hr />
              <h4 className="text-black no-padding-top no-margin-top padding-bottom-14">
                <a href="https://u.ae/en/about-the-uae/the-seven-emirates/dubai">Dubai | The Official Portal of the UAE Government</a>
              </h4>
              <p>
                Dubai is the second largest emirate in the UAE. Because of its heritage and history, it is known as the Pearl of the Gulf and Jewel of the
                world. Dubai economy is diversified relying heavily on trade, tourism, services and finance sectors, with a thriving business ...
              </p>
              <hr />
              <h4 className="text-black no-padding-top no-margin-top padding-bottom-14">
                <a href="https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/strategies-plans-and-visions/social-affairs/national-tolerance-programme">
                  National Tolerance Programme | The Official Portal of the UAE Government
                </a>
              </h4>
              <p>
                The National Tolerance Programme is based on Islam, the Constitution, Zayeds legacy and ethics of the UAE, international conventions,
                archaeology and history, humanity and common values. The programme aims to strengthen government role as an incubator of tolerance and ...
              </p>
              <hr />
              <h4 className="text-black no-padding-top no-margin-top padding-bottom-14">
                <a href="https://u.ae/en/about-the-uae/digital-uae/digital-technology/blockchain-in-the-uae-government">
                  Blockchain in the UAE government | The Official Portal of the UAE Government
                </a>
              </h4>
              <p>
                Blockchain is a shared immutable real-time ledger for recording the history of financial transactions, contracts, physical assets, supply
                chain info, etc. The UAE Government adopted blockchain technology in conducting its transactions. To aid this move, it launched the Emirates
                ...
              </p>
              <hr />
              <h4 className="text-black no-padding-top no-margin-top padding-bottom-14">
                <a href="https://u.ae/en/about-the-uae/culture/arab-and-islamic-heritage/efforts-of-the-uae-government-in-preserving-the-heritage">
                  Efforts of the UAE Government in preserving the heritage | The Official Portal of the UAE Government
                </a>
              </h4>
              <p>
                Government entities have taken and continue to take several measure not only to preserve the heritage but also to create awareness about it.
                It has achieved this through:&nbsp;Festivals and eventsAnnual festivals such as Qasr Al Hosn Festival, Sheikh Zayed Heritage Festival,
                Sultan ...
              </p>
              <hr />
              <h4 className="text-black no-padding-top no-margin-top padding-bottom-14">
                <a href="https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/strategies-plans-and-visions/strategies-plans-and-visions-untill-2021/national-strategy-for-the-year-of-giving">
                  National Strategy for the Year of Giving | The Official Portal of the UAE Government
                </a>
              </h4>
              <p>
                National Strategy for the Year of Giving is a noble plan to sustain charitable efforts of the UAE and its people. In line with the UAE’s
                history of giving, the strategy aims to build a sustainable practice of giving in the new generations.&nbsp;H. H. Sheikh Khalifa bin Zayed Al
                ...
              </p>
              <hr />
              <h4 className="text-black no-padding-top no-margin-top padding-bottom-14">
                <a href="https://u.ae/en/participate/blogs/blog?id=246">Blog | The Official Portal of the UAE Government</a>
              </h4>
              <p>
                30/07/2018 The UAE is a unique model of tolerance in the region and around the world. It hosts more than 200 nationalities. They all enjoy
                mutual respect and appreciation, under a fair legislation that guarantees justice, respect and equality.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>    
  );
};

const SearchQuery = () => {
  // Functionality for handling the search query can be added here
};

export default History;
 