
import { urlFor } from "../utils/tools"
import BlockContent from '@sanity/block-content-to-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trustbrand = ({content,slider}) => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
     accessibility: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed:2500,
        infinite: true,
        dots: false,
        arrows: false,
     
     responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
              {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
        
      
      };
    const overrides = {
        h2: props => <h2 className="heading-inner" {...props} />,
      }
      
      const serializers = {
        types: {
          block: props =>
            // Check if we have an override for the “style”
            overrides[props.node.style] 
              // if so, call the function and pass in the children, ignoring
              // the other unnecessary props
              ? overrides[props.node.style]({ children: props.children })
      
              // otherwise, fallback to the provided default with all props
              : BlockContent.defaultSerializers.types.block(props),
        }
      }
      
      

      
    return(
        <>

          <section className="section trustBrand trustBrand-change">
            <div className="container-fluid ">
                <div className="row">
                    <div className="wrapper col-12">
                        <div className="row">
                            <div className="col-md-12 col">
                                <img className="thumb" src={urlFor(content?.mainImage)} alt="" />
                                <div className="content">
                                    <BlockContent blocks={content?.maintypo} serializers={serializers} />
                                    <div className="bottom_speed">
                                        {content?.childtypos.map((item,i)=>(
                                            <div key={i}>
                                              <p className="title">{item.mainchild}</p>
                                              <p className="sub_title">{item.subchild}</p>
                                             </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row brand-logo">
                        {slider && <Slider {...settings}>
                            {slider.map((item,i)=>(
                                 <div key={i} className="col-md-4">
                                 <img src={urlFor(item.asset)} alt="" />
                             </div>
                            ))}
                           
                            
                            </Slider>}
                        </div>
                    </div>
                </div>
            </div>
          </section>
         {/* <section className="section trustBrand">
            <div className="container-fluid ">
                <div className="row">
                    <div className="wrapper col-12">
                        <div className="row trustBrand-slider">
                            <Slider {...settings}>
                                {content.map((item,i)=>(
                                     <div key={i} className="col-md-12 col">
                                        <img src={urlFor(item.image)} alt="" />
                                        <div className="content">
                                            <BlockContent blocks={item.description} />
                                        </div>
                                    </div>
                                ))}                        
                            </Slider>                     
                        </div>               
                    </div>
                   
                   
                </div>
             
            </div>
           
        </section> */}
        
        </>
    )
}

export default Trustbrand;