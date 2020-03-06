const size = {
    mobileS: '320px'
  , mobileM: '375px'
  , mobileL: '425px'
  ,  tablet: '768px'
  , laptopS: '992px'
  , laptopM: '1024px'
  , desktop: '1530px'
};

export const device = {
     mobile: `(max-width: ${size.mobileL})`
  ,  tablet: `(max-width: ${size.tablet} ) and (min-width: ${size.mobileL})`
  ,  laptop: `(max-width: ${size.laptopS}) and (min-width: ${size.tablet})`
  , desktop: `(max-width: ${size.desktop}) and (min-width: ${size.laptopS})`
};
  