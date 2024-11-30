import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { normalize } from './normalize';
import fontFamily from './font';
import metrics from './metrics';





export const baseStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height:'100%',
  },
  flex: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: metrics.WIDTH,
    height: metrics.HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backdrop20,
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
    zIndex: 0,
  },
  col: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  mt4: {
    marginTop: 4,
  },
  mt12: {
    marginTop: 12,
  },
  mt16: {
    marginTop: 16,
  },
  mt20: {
    marginTop: 20,
  },
  mt24: {
    marginTop: 24,
  },
  mt36: {
    marginTop: 36,
  },
  mt48: {
    marginTop: 48,
  },
  mt60: {
    marginTop: 60,
  },
  mb8: {
    marginBottom: 8,
  },
  m16: {
    margin: 16,
  },
  mb12: {
    marginBottom: 12,
  },
  mb16: {
    marginBottom: 16,
  },
  mb20: {
    marginBottom: 20,
  },
  mb24: {
    marginBottom: 24,
  },
  mb28: {
    marginBottom: 28,
  },
  mb32: {
    marginBottom: 32,
  },
  mb48: {
    marginBottom: 48,
  },
  mr8: {
    marginRight: 8,
  },
  mr12: {
    marginRight: 12,
  },
  mr16: {
    marginRight: 16,
  },
  ml11: {
    marginLeft: 11,
  },
  ml16: {
    marginLeft: 16,
  },
  // common background color
  bgSearch: {
    backgroundColor: Colors.bgSearch,
  },
  bgBlurBorder: {
    backgroundColor: Colors.blurBorder,
  },
  bgBlack: {
    backgroundColor: Colors.black,
  },
  bgWhite: {
    backgroundColor: Colors.white,
  },
  bgPrimary: {
    backgroundColor: Colors.primary,
  },
  bgSuccess: {
    backgroundColor: Colors.success,
  },
  bgError: {
    backgroundColor: Colors.error,
  },
  bgWarning: {
    backgroundColor: Colors.warning,
  },
  bgInfo: {
    backgroundColor: Colors.info,
  },
  bgPrimaryBlur: {
    backgroundColor: Colors.primaryBlur,
  },
  bgGray: {
    backgroundColor: Colors.bgSearch,
  },
  bgLoading: {
    backgroundColor: Colors.borderMemberRating,
  },
  gap4: {
    gap: 4,
  },
  gap6: {
    gap: 6,
  },
  gap8: {
    gap: 8,
  },
  gap12: {
    gap: 12,
  },
  gap16: {
    gap: 16,
  },
  gap20: {
    gap: 20,
  },
  gap24: {
    gap: 24,
  },
  gap28: {
    gap: 28,
  },
  gap32: {
    gap: 28,
  },
  gap40: {
    gap: 40,
  },
  gap48: {
    gap: 48,
  },
  gap64: {
    gap: 64,
  },
  gapCol16: {
    columnGap: 16,
  },
  gapCol24: {
    columnGap: 24,
  },
  gapRow24: {
    rowGap: 24,
  },
  ph0: {
    paddingHorizontal: 0,
  },
  ph8: {
    paddingHorizontal: 8,
  },
  ph10: {
    paddingHorizontal: 10,
  },
  ph12: {
    paddingHorizontal: 12,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  ph24: {
    paddingHorizontal: 24,
  },
  ph40: {
    paddingHorizontal: 40,
  },
  pb12: {
    paddingBottom: 12,
  },
  pb16: {
    paddingBottom: 16,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb24: {
    paddingBottom: 24,
  },
  pb28: {
    paddingBottom: 28,
  },
  pb32: {
    paddingBottom: 32,
  },
  pb36: {
    paddingBottom: 36,
  },
  pb40: {
    paddingBottom: 40,
  },
  pb64: {
    paddingBottom: 64,
  },
  pv0: {
    paddingVertical: 0,
  },
  pv8: {
    paddingVertical: 8,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv12: {
    paddingVertical: 12,
  },
  pv14: {
    paddingVertical: 14,
  },
  pv16: {
    paddingVertical: 16,
  },
  pv20: {
    paddingVertical: 20,
  },
  pv24: {
    paddingVertical: 24,
  },
  pv28: {
    paddingVertical: 28,
  },
  pv32: {
    paddingVertical: 32,
  },
  pv48: {
    paddingVertical: 48,
  },
  pv64: {
    paddingVertical: 64,
  },
  pt8: {
    paddingTop: 8,
  },
  pt12: {
    paddingTop: 12,
  },
  pt16: {
    paddingTop: 16,
  },
  pt20: {
    paddingTop: 20,
  },
  pt24: {
    paddingTop: 24,
  },
  pt28: {
    paddingTop: 28,
  },
  pt32: {
    paddingTop: 32,
  },
  pt64: {
    paddingTop: 64,
  },
  pl16: {
    paddingLeft: 16,
  },
  pl20: {
    paddingLeft: 20,
  },
  pl24: {
    paddingLeft: 24,
  },
  pl32: {
    paddingLeft: 32,
  },
  pl40: {
    paddingLeft: 40,
  },
  pr16: {
    paddingRight: 16,
  },
  pr24: {
    paddingRight: 24,
  },
  pl8: {
    paddingLeft: 8,
  },
  pr8: {
    paddingRight: 8,
  },
  p16: {
    padding: 16,
  },
  p4: {
    padding: 4,
  },
  p8: {
    padding: 8,
  },
  p12: {
    padding: 12,
  },
  p18: {
    padding: 18,
  },
  p20: {
    padding: 20,
  },
  p48: {
    padding: 48,
  },
  boxShadow4: {
    padding: 4,
    margin: -4,
  },
  boxShadow24: {
    padding: 24,
    margin: -24,
  },
  h100per: {
    height: '100%',
  },
  w100per: {
    width: '100%',
  },
  w90per: {
    width: '90%',
  },
  w80per: {
    width: '80%',
  },
  w70per: {
    width: '70%',
  },
  w45per: {
    width: '45%',
  },
  bWidth1: {
    borderWidth: 1,
  },
  btWidth1: {
    borderTopWidth: 1,
  },
  bbWidth1: {
    borderBottomWidth: 1,
  },
  blWidth1: {
    borderLeftWidth: 1,
  },
  brWidth1: {
    borderRightWidth: 1,
  },
  radius8: {
    borderRadius: 8,
  },
  radius12: {
    borderRadius: 12,
  },
  radius16: {
    borderRadius: 16,
  },
  radius20: {
    borderRadius: 20,
  },
  radius24: {
    borderRadius: 24,
  },
  radius32: {
    borderRadius: 32,
  },
  bColor: {
    borderColor: Colors.borderBgSearch,
  },
  btColor: {
    borderTopColor: Colors.borderBgSearch,
  },
  bbColor: {
    borderBottomColor: Colors.borderBgSearch,
  },
  blColor: {
    borderLeftColor: Colors.borderBgSearch,
  },
  brColor: {
    borderRightColor: Colors.borderBgSearch,
  },
  cancelButton: {
    height: normalize(44),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderDisable,
  },
});

export default baseStyles;

export const TextStyles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  text_md_regular: {
    fontFamily: fontFamily.regular,
    fontSize: normalize(16),
    fontWeight: '400',
    lineHeight: normalize(24),
  },
  text_md_medium: {
    fontFamily: fontFamily.medium,
    fontWeight: '500',
    fontSize: normalize(16),
    lineHeight: normalize(24),
  },
  text_md_semibold: {
    fontFamily: fontFamily.semiBold,
    fontWeight: '600',
    fontSize: normalize(16),
    lineHeight: normalize(24),
  },
  text_sm_medium: {
    fontFamily: fontFamily.medium,
    fontSize: normalize(14),
    fontWeight: '500',
    lineHeight: normalize(20),
  },
  text_lg_semibold: {
    fontFamily: fontFamily.semiBold,
    fontSize: normalize(18),
    fontWeight: '600',
    lineHeight: normalize(28),
  },
  text_sm_semibold: {
    fontFamily: fontFamily.semiBold,
    fontSize: normalize(14),
    fontWeight: '600',
    lineHeight: normalize(20),
  },
  text_lg_regular: {
    fontFamily: fontFamily.regular,
    fontSize: normalize(18),
    fontWeight: '400',
    lineHeight: normalize(28),
  },
  text_sm_regular: {
    fontFamily: fontFamily.regular,
    fontSize: normalize(14),
    fontWeight: '400',
    lineHeight: normalize(20),
  },
  text_xs_regular: {
    fontFamily: fontFamily.regular,
    fontSize: normalize(12),
    fontWeight: '400',
    lineHeight: normalize(18),
  },
  text_xs_medium: {
    fontFamily: fontFamily.medium,
    fontSize: normalize(12),
    fontWeight: '500',
    lineHeight: normalize(18),
  },
  text_xs_semibold: {
    fontFamily: fontFamily.semiBold,
    fontSize: normalize(12),
    fontWeight: '600',
    lineHeight: normalize(18),
  },
  text_xl_semibold: {
    fontFamily: fontFamily.semiBold,
    fontSize: normalize(20),
    fontWeight: '600',
    lineHeight: normalize(30),
  },
  text_xl_bold: {
    fontFamily: fontFamily.bold,
    fontSize: normalize(20),
    fontWeight: '700',
    lineHeight: normalize(30),
  },
  display_xs_semibold: {
    fontFamily: fontFamily.semiBold,
    fontSize: normalize(24),
    fontWeight: '600',
    lineHeight: normalize(30),
  },
  display_lg_semibold: {
    fontFamily: fontFamily.semiBold,
    fontSize: normalize(48),
    fontWeight: '600',
    lineHeight: normalize(60),
  },
  // common text color
  textWhite: {
    color: Colors.white,
  },
  textPrimary: {
    color: Colors.primary,
  },
  textSuccess: {
    color: Colors.success,
  },
  textError: {
    color: Colors.error,
  },
  textWarning: {
    color: Colors.warning,
  },
  textInfo: {
    color: Colors.info,
  },
  textLoading: {
    color: Colors.loadingText,
  },
  textBlack: {
    color: Colors.black,
  },
  textBlack1: {
    color: Colors.hotVoucherText,
  },
  textBlack2: {
    color: Colors.genderSelectBlack,
  },
  textQuarternary: {
    color: Colors.placeholder,
  },
  textSecondary: {
    color: Colors.genderSelectBlack,
  },
  textBlue700: {
    color: Colors.textAddLocation,
  },
  textTag: {
    color: Colors.tag,
  },
  textGray700: {
    color: Colors.gray700,
  },
  textGray: {
    color: Colors.iconMinusDisabled,
  },
  textGray1: {
    color: Colors.gray,
  },
  textBrand700: {
    color: Colors.brand700,
  },
  captalize: {
    textTransform: 'capitalize',
  },
});
