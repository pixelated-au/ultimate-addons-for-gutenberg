/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function TestimonialStyle( props ) {
    const {
            headingAlign,
            designationColor,
            descColor,
            authorColor,
            nameFontSize,
            designationFontSize,
            descFontSize,
            separatorWidth,
            headSpace,
            separatorSpace,
            descSpace,
            block_id,
            iconHover,
            iconimgBg,
            nameSpace,
            imgVrPadding,
            imgHrPadding,
            imageSize,  
            imageWidth,  
            rowGap,
            columnGap,
            contentPadding,
            backgroundType,
            backgroundColor,
            backgroundImage,
            backgroundPosition,
            backgroundSize,
            backgroundRepeat,
            backgroundAttachment,
            backgroundImageColor,
            backgroundOpacity,
            borderStyle,
            borderWidth ,
            borderRadius,
            borderColor         
        } = props.attributes;        

        if( props.clientId ){
            var clientId = 'uagb-testimonial-'+props.clientId;
        }else{
            var clientId = 'uagb-testimonial-'+block_id;
        }

        var selectors = {};

            selectors['.uagb-testomonial__wrap'] = {
                    'padding-left' : columnGap/2+'px',
                    'padding-right' : columnGap/2+'px',                                
                    'margin-bottom' : rowGap+'px',
                }; 
            
            selectors['.uagb-testomonial__wrap .uagb-tm__image-content'] = {
                    'padding-left' : imgHrPadding+'px',
                    'padding-right' : imgHrPadding+'px',                                
                    'padding-top' : imgVrPadding+'px',
                    'padding-bottom' : imgVrPadding+'px',
                }; 

            // Image
            selectors['.uagb-tm__image img'] = {
                    'width': imageWidth+'px',
                    'max-width': imageWidth+'px',
                }; 
            
            selectors['.uagb-tm__content'] = {                    
                    'text-align' : headingAlign, 
                    'padding' : contentPadding+'px',                  
                };                       

            // Prefix Style
            selectors['.uagb-tm__author-name'] = {
                    'font-size' : nameFontSize+'px',
                    'color': authorColor,
                    'margin-bottom': nameSpace+'px',
                };

            // Title Style
            selectors['.uagb-tm__company'] = {
                    'font-size' : designationFontSize+'px',
                    'color': designationColor,
                };

            // Description Style
            selectors['.uagb-tm__desc'] = {
                    'font-size' : descFontSize+'px',
                    'color': descColor,
                    'margin-bottom': descSpace+'px',
                };     

            selectors['.uagb-testomonial__wrap.uagb-tm__bg-type-color .uagb-tm__content'] = {
                    'background-color': backgroundColor,
                };  

            var position = backgroundPosition.replace( "-", " " )
            selectors['.uagb-testomonial__wrap.uagb-tm__bg-type-image .uagb-tm__content'] = {
                    'background-image': ( backgroundImage ) ? `url(${ backgroundImage.url })` : null,
                    'background-position':position,
                    'background-attachment':backgroundAttachment,
                    'background-repeat':backgroundRepeat,
                    'background-size':backgroundSize,
                }; 

            selectors['.uagb-testomonial__wrap.uagb-tm__bg-type-image .uagb-tm__overlay'] = {
                    'background-color':backgroundImageColor,
                    'opacity':'0.'+backgroundOpacity,
                };                              
               
            if ( borderStyle != "none" ) {
                selectors['.uagb-testomonial__wrap .uagb-tm__content'] = {
                    'border-color': borderColor,
                    'border-style':borderStyle,
                    'border-width':borderWidth + "px",
                    'border-radius':borderRadius + "px",                    
                };                 
            }

        var styling_css = '';

        for( var i in selectors ) {
           
            styling_css += '#wpwrap #'+clientId+' '+i + ' { ';
            
            
            var sel = selectors[i];
            var css = '';

            for( var j in sel ) {

                css += j + ': ' + sel[j] + ';';
            }

            styling_css += css + ' } ';
        }       

        return styling_css;

}

export default TestimonialStyle;
