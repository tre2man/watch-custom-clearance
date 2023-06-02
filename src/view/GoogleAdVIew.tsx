import mobileAds, {
  BannerAd,
  BannerAdSize,
} from 'react-native-google-mobile-ads';
import {AD_UNIT_ID} from '@env';

const adUnitId = AD_UNIT_ID;

const GoogleAdView = () => {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};

export default GoogleAdView;
