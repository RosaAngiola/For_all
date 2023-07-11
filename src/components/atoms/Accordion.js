import { useState } from 'react';

// funzione che fa funzionare l'accordion con la costante dichiarate prima del return, sono consapevole che questa funzione sarebbe stato bene farla in un atomo e richiamarla, ma FUNZIONA e non la tocco
function Panel({
    title,
    children,
    isActive,
    onShow
  }) {
    return (
        <div className='flex flex-col items-center'>
            <section className="p-1 rounded-t-lg shadow-md panel w-80">
                
                {isActive ? 
                (<div> 
                  <h3 className='p-2 text-center border-2 rounded-lg bg-secondary'>{title}</h3>
                  <p className='p-4 overflow-y-scroll text-center h-72 overscroll-y-contain'>{children}</p>
                  </div> ) : 
                (<button className='flex items-center justify-between w-full border-2 rounded-lg bg-secondary' onClick={onShow}>
                 
                    <h3 className='p-1'>{title}</h3>
                    <div className='w-20 h-8 border-2 rounded border-grey-500'><i class="fa-solid fa-sort-down fa-2xl h-full"></i>
                    </div>
                
                </button>
                )}
            </section>
      </div>
    );
  }
  
// Funzione del contenuto dell'accordion
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <div className='flex flex-col items-center gap-2 mt-10'>
    
      <Panel
        title="What is Bitcoin?"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
       Bitcoin is the first and most widely recognized cryptocurrency. It enables peer-to-peer exchange of value in the digital realm through the use of a decentralized protocol, cryptography.
      </Panel>
      <Panel
        title="Is there any risk"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Cryptocurrency has taken the world by storm. Since 2009, when the first cryptocurrency—Bitcoin—was launched, the cryptosphere has seen tremendous highs and terrifying lows.

        The truth is that cryptocurrency is an extremely volatile asset. Investors need to understand that owning crypto involves taking on a great deal of risk in their portfolios. But for investors who understand how to manage risk, crypto could present great opportunities.
      </Panel>
      <Panel
        title="How can I buy Bitcoin?"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
       
        The price of Bitcoin is around $17,000 as of this writing. This is significantly below its high of more than $65,000 in November 2021.
        However, rather than a long-term investment, Bitcoin was initially lauded as a form of electronic cash. For this to work as promised, cryptocurrencies like Bitcoin would have to be able to be used to purchase goods and services.
        But with more than 22,000 cryptocurrencies in circulation, very few of them are widely accepted for the purchase of goods or services.
        In late 2020, it was estimated that approximately 2,300 U.S. businesses accepted cryptocurrency for payments. In 2019, there were more than 35 million businesses in the United States, which means those accepting cryptocurrencies are a drop in the bucket.
        
      </Panel>
      </div>
    </>
  );
}

