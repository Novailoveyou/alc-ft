import 'server-only'
import { getHeader } from './actions'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LocaleSwitch } from './LocaleSwitch'
import { Icon } from '@/components/shared/icons'

type Header = Exclude<Awaited<ReturnType<typeof getHeader>>, null>

const LogoSvg = () => {
  return (
    <svg
      width='38'
      height='36'
      viewBox='0 0 38 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.452 0.0664463C15.227 0.147256 15.1443 0.244108 14.9136 0.697538C14.8151 0.890946 14.7199 1.07663 14.7021 1.11017C14.6756 1.15978 14.5178 1.47668 14.4005 1.71578C14.3007 1.91922 14.1716 2.17766 14.1283 2.26045C14.0999 2.31491 14.0555 2.40404 14.0298 2.45851C13.8592 2.82007 12.6816 5.16853 12.6642 5.18186C12.6524 5.19094 12.6222 5.25036 12.5971 5.31391C12.5549 5.42073 12.1656 6.20307 12.0796 6.35373C12.0589 6.39004 11.9182 6.67228 11.7669 6.98093C11.2272 8.08225 11.0846 8.36938 11.0046 8.51591C10.9601 8.59761 10.8265 8.86499 10.7078 9.1101C10.589 9.3552 10.4791 9.57802 10.4635 9.60525C10.4479 9.63248 10.2129 10.1004 9.94132 10.6451C9.66973 11.1897 9.41878 11.6874 9.38367 11.7509C9.34853 11.8145 9.28999 11.9333 9.25357 12.015C9.21715 12.0967 9.15776 12.2155 9.12156 12.2791C9.08541 12.3426 9.01883 12.4763 8.97358 12.5762C8.92836 12.676 8.8503 12.8334 8.80017 12.9258C8.75 13.0183 8.69359 13.1297 8.67479 13.1734C8.65602 13.2171 8.60897 13.3123 8.57028 13.3849C8.48175 13.5511 7.95173 14.6167 7.84781 14.8374C7.80509 14.9282 7.74219 15.0544 7.70803 15.118C7.67387 15.1815 7.48812 15.5529 7.29525 15.9432C7.10238 16.3336 6.93198 16.6752 6.91663 16.7025C6.90127 16.7297 6.72559 17.0788 6.52619 17.4782C6.32679 17.8776 6.15032 18.2267 6.13401 18.254C6.10232 18.3069 5.90098 18.7129 5.79841 18.9307C5.76418 19.0033 5.70512 19.1221 5.66716 19.1948C5.62919 19.2674 5.57006 19.3862 5.53574 19.4588C5.50145 19.5315 5.44442 19.6429 5.40902 19.7064C5.37358 19.77 5.28752 19.9408 5.21772 20.086C5.05317 20.4285 3.04816 24.4457 2.86168 24.8065C2.73014 25.061 2.59941 25.3214 2.54675 25.4337C2.51272 25.5063 2.45782 25.6178 2.42475 25.6813C2.39171 25.7448 2.31877 25.8934 2.26262 26.0114C2.20648 26.1294 2.13108 26.278 2.09502 26.3415C2.05896 26.4051 1.99904 26.5239 1.96186 26.6056C1.92469 26.6873 1.86661 26.8061 1.83278 26.8697C1.79898 26.9332 1.59978 27.3343 1.39017 27.7609C1.18053 28.1876 0.992448 28.5664 0.97217 28.6027C0.951892 28.639 0.729751 29.0772 0.478472 29.5765C0.0436074 30.4406 0.0208683 30.4956 0.00534797 30.72C-0.0218536 31.1138 0.0209668 31.1772 0.961342 32.1348C1.4071 32.5887 2.26213 33.4648 2.86149 34.0817C4.45152 35.7184 4.60209 35.8651 4.76173 35.9336C4.8976 35.9919 5.41046 35.9942 18.9301 35.9984C32.895 36.0027 32.9583 36.0024 33.1435 35.9365C33.3162 35.875 33.3915 35.8062 34.1935 34.9777C34.6687 34.4867 35.279 33.8605 35.5497 33.5859C37.2488 31.8627 37.7707 31.3115 37.8475 31.1592C37.9109 31.0331 37.9286 30.9476 37.9286 30.7651C37.9286 30.55 37.9151 30.5048 37.7541 30.1781C37.5649 29.7943 37.5576 29.7796 37.4214 29.5105C37.3708 29.4106 37.2268 29.121 37.1014 28.8668C36.976 28.6126 36.8591 28.3778 36.8417 28.345C36.8243 28.3122 36.7655 28.1933 36.7111 28.0809C36.6567 27.9685 36.5957 27.8468 36.5756 27.8105C36.5556 27.7742 36.1013 26.868 35.5661 25.7968C35.0309 24.7256 34.5766 23.8195 34.5566 23.7832C34.5365 23.7469 34.482 23.6355 34.4355 23.5356C34.3889 23.4358 34.3365 23.3318 34.3191 23.3046C34.3016 23.2773 34.2434 23.1585 34.1897 23.0405C34.1361 22.9225 34.0631 22.7739 34.0276 22.7104C33.9921 22.6468 33.9008 22.4686 33.8246 22.3142C33.5762 21.8108 31.0816 16.8207 31.0275 16.719C30.9986 16.6645 30.9366 16.5383 30.8898 16.4384C30.8431 16.3385 30.7774 16.2048 30.744 16.1413C30.7106 16.0778 30.6528 15.9589 30.6156 15.8772C30.5784 15.7955 30.5187 15.6767 30.483 15.6131C30.4474 15.5496 30.3834 15.4233 30.3409 15.3325C30.2517 15.1422 28.8838 12.3948 28.8288 12.2956C28.8087 12.2593 28.5621 11.7691 28.2809 11.2063C27.9996 10.6434 27.7526 10.1532 27.732 10.1169C27.7114 10.0806 27.6588 9.97662 27.6152 9.88584C27.5714 9.79506 27.5122 9.67622 27.4834 9.62176C27.4547 9.56729 27.3934 9.44102 27.3472 9.34117C27.301 9.24131 27.249 9.13733 27.2315 9.1101C27.2141 9.08286 27.1607 8.97145 27.113 8.86252C27.0652 8.75358 27.017 8.65703 27.0059 8.64795C26.9947 8.63887 26.961 8.57945 26.931 8.51591C26.901 8.45236 26.815 8.27569 26.7397 8.12335C26.6645 7.97097 26.5917 7.82243 26.5779 7.79325C26.5641 7.76403 26.5349 7.70557 26.513 7.66329C26.3323 7.3146 25.8864 6.41074 25.8864 6.39331C25.8864 6.38126 25.8273 6.27431 25.7551 6.15567C25.6829 6.03703 25.6239 5.92519 25.6239 5.90717C25.6239 5.88911 25.5611 5.75199 25.4844 5.60238C25.4077 5.45281 25.3302 5.29865 25.3121 5.2598C25.2591 5.14575 24.283 3.19566 24.2156 3.0692C24.1817 3.00566 24.1236 2.88682 24.0865 2.80512C24.0493 2.72342 23.9901 2.60458 23.9549 2.54103C23.9196 2.47749 23.8627 2.36608 23.8283 2.29346C23.7939 2.22083 23.7203 2.07229 23.6648 1.96335C23.6092 1.85442 23.5237 1.68465 23.4748 1.58611C23.4259 1.48754 23.3735 1.38356 23.3584 1.35504C23.327 1.29549 23.0538 0.748275 22.9453 0.527403C22.9052 0.445702 22.8206 0.318315 22.7575 0.244339C22.5373 -0.0135377 22.7335 -0.000927798 18.9673 0.000425627C15.7379 0.00158099 15.6267 0.00366064 15.452 0.0664463ZM16.6568 1.7818C16.68 1.82719 16.8553 2.19112 17.0465 2.59055C17.2376 2.98998 17.4738 3.48219 17.5714 3.68435C17.669 3.8865 17.7488 4.06133 17.7488 4.07285C17.7488 4.0844 17.7858 4.15267 17.8309 4.22456C17.876 4.29646 17.9129 4.3703 17.9129 4.38866C17.9129 4.40698 18.0399 4.68582 18.195 5.00823C18.3501 5.33067 18.5509 5.75047 18.6411 5.9411C18.7314 6.13174 18.85 6.37684 18.9047 6.48577C18.9595 6.59471 19.126 6.94379 19.2748 7.26152C19.4235 7.57924 19.652 8.06202 19.7825 8.33435C20.0206 8.83119 20.2792 9.37454 20.4974 9.83632C20.5617 9.97249 20.6256 10.1062 20.6393 10.1334C20.6531 10.1607 20.7102 10.2795 20.7664 10.3975C20.8225 10.5155 20.9401 10.7606 21.0276 10.9422C21.1151 11.1237 21.2283 11.3614 21.279 11.4703C21.3298 11.5793 21.3875 11.6907 21.4072 11.7179C21.427 11.7451 21.4616 11.8222 21.4841 11.8892C21.5066 11.9562 21.5835 12.1179 21.6549 12.2487C21.7264 12.3793 21.7848 12.5006 21.7848 12.5182C21.7848 12.5357 21.8347 12.6487 21.8956 12.7694C21.9566 12.8901 22.0878 13.1596 22.1874 13.3684C22.2869 13.5772 22.4585 13.9356 22.5687 14.1649C22.679 14.3942 22.7692 14.5913 22.7692 14.603C22.7692 14.6146 22.8031 14.6795 22.8446 14.7473C22.8862 14.815 22.9404 14.9343 22.9653 15.0123C22.9901 15.0904 23.0213 15.1611 23.0346 15.1693C23.0479 15.1776 23.0912 15.2548 23.1307 15.341C23.1702 15.4271 23.2731 15.6461 23.3593 15.8277C23.4455 16.0093 23.5718 16.2766 23.6399 16.4219C23.7081 16.5671 23.7792 16.7058 23.7979 16.7301C23.8167 16.7544 23.8575 16.847 23.8886 16.9359C23.9197 17.0247 23.9733 17.1385 24.0077 17.1888C24.0421 17.239 24.0901 17.3322 24.1144 17.3957C24.1546 17.5008 24.2944 17.7959 24.9468 19.1521C25.0665 19.4011 25.1645 19.613 25.1645 19.6232C25.1645 19.6334 25.198 19.6971 25.2391 19.7649C25.2801 19.8326 25.3339 19.9469 25.3587 20.019C25.3834 20.091 25.444 20.2173 25.4934 20.2996C25.5428 20.3818 25.602 20.5086 25.625 20.5812C25.6479 20.6538 25.6977 20.7652 25.7356 20.8288C25.7734 20.8923 25.8284 20.9963 25.8578 21.0598C25.9728 21.3085 26.529 22.4855 26.5987 22.6278C26.6254 22.6823 26.6667 22.764 26.6906 22.8094C26.8111 23.0385 27.2317 23.948 27.2317 23.9794C27.2317 23.9895 26.4587 23.9978 25.514 23.9978H23.7964L23.6765 23.7676C23.6106 23.641 23.5567 23.5199 23.5567 23.4985C23.5567 23.477 23.511 23.3622 23.4551 23.2433C23.3993 23.1244 23.3247 22.9534 23.2894 22.8632C23.2541 22.7731 23.1679 22.5787 23.098 22.4312C23.028 22.2837 22.9602 22.1191 22.9473 22.0653C22.9344 22.0116 22.8841 21.8934 22.8357 21.8026C22.7872 21.7118 22.7285 21.5855 22.7053 21.522C22.6576 21.3915 22.3958 20.7651 22.3259 20.6142C22.3007 20.5597 22.235 20.4197 22.1801 20.303C22.1251 20.1863 22.0801 20.0741 22.0801 20.0537C22.0801 20.0333 22.0229 19.8976 21.953 19.7522C21.8831 19.6068 21.8152 19.4516 21.802 19.4073C21.7889 19.363 21.7152 19.1931 21.6383 19.0297C21.5614 18.8663 21.4871 18.6955 21.4731 18.6501C21.4591 18.6047 21.3906 18.4447 21.3209 18.2946C21.2512 18.1445 21.1942 18.0083 21.1942 17.9919C21.1942 17.9756 21.1277 17.8211 21.0465 17.6486C20.9653 17.4761 20.8988 17.3255 20.8988 17.314C20.8988 17.2927 20.8229 17.1179 20.6818 16.8148C20.6388 16.7223 20.6035 16.6362 20.6035 16.6234C20.6035 16.6107 20.5368 16.4575 20.4552 16.2831C20.3736 16.1087 20.2974 15.9278 20.2858 15.8813C20.2742 15.8347 20.2386 15.7516 20.2067 15.6967C20.1749 15.6416 20.081 15.4282 19.9981 15.2225C19.9152 15.0167 19.8181 14.7907 19.7825 14.7204C19.7468 14.65 19.7176 14.5779 19.7176 14.5601C19.7176 14.5423 19.6512 14.3856 19.5699 14.212C19.4887 14.0383 19.4223 13.8879 19.4223 13.8778C19.4223 13.8676 19.3838 13.7749 19.3368 13.6717C19.2898 13.5684 19.1994 13.3578 19.1359 13.2036C19.0724 13.0494 18.9706 12.8162 18.9096 12.6852C18.8487 12.5543 18.7988 12.4339 18.7988 12.4177C18.7988 12.4015 18.7398 12.2667 18.6676 12.1181C18.5954 11.9695 18.5363 11.8345 18.5363 11.8182C18.5363 11.8019 18.4684 11.6427 18.3854 11.4644C18.3024 11.2861 18.2083 11.066 18.1765 10.9752C18.1446 10.8844 18.0893 10.7581 18.0537 10.6946C18.0181 10.631 17.9699 10.521 17.9466 10.45C17.9234 10.379 17.8644 10.2379 17.8155 10.1364C17.7667 10.0349 17.7079 9.89987 17.6849 9.83632C17.5994 9.60017 17.4459 9.28931 17.379 9.21685C17.341 9.17572 17.2425 9.10194 17.1602 9.05292C16.9607 8.93405 16.5923 8.92616 16.3827 9.03628C16.1123 9.17833 16.0462 9.28838 15.3475 10.7606C15.2571 10.9512 15.1697 11.1295 15.1534 11.1567C15.137 11.184 15.1102 11.2373 15.0938 11.2751C15.0773 11.313 14.9427 11.5953 14.7946 11.9023C14.6465 12.2094 14.4221 12.676 14.2959 12.9393C14.1698 13.2026 13.9259 13.7076 13.754 14.0616C13.5821 14.4157 13.3461 14.9059 13.2295 15.151C13.113 15.3961 12.9138 15.812 12.787 16.0753C12.3126 17.0599 11.9901 17.7279 11.6875 18.353C11.5161 18.707 11.3014 19.1527 11.2104 19.3433C11.1194 19.5339 10.9193 19.9499 10.7658 20.2676C10.119 21.6061 9.38859 23.1235 9.17679 23.5686C9.01571 23.9072 8.88312 24.1779 8.78074 24.3774C8.75278 24.4319 8.66343 24.6175 8.58219 24.79C8.37957 25.2202 7.92755 26.163 7.55339 26.9357C7.38197 27.2897 7.17775 27.7131 7.09956 27.8765C7.02136 28.0399 6.82222 28.4558 6.65705 28.8008C6.49187 29.1457 6.31862 29.5097 6.27202 29.6095C6.22546 29.7094 6.16962 29.8134 6.14793 29.8406C6.1262 29.8678 6.08854 29.9495 6.06419 30.0222C6.03984 30.0948 5.98816 30.2067 5.94931 30.2709C5.91049 30.3351 5.84635 30.4614 5.80674 30.5515C5.76717 30.6416 5.67756 30.8342 5.6076 30.9795C5.24069 31.7415 4.87188 32.5113 4.82476 32.6135C4.79546 32.677 4.74066 32.781 4.70299 32.8445C4.66536 32.9081 4.60777 33.0311 4.57509 33.118C4.54241 33.2048 4.50362 33.2833 4.48892 33.2925C4.47422 33.3016 4.29553 33.1364 4.09183 32.9254C3.88812 32.7143 3.29697 32.1099 2.77811 31.5821C2.25928 31.0544 1.83475 30.6081 1.83475 30.5905C1.83475 30.5728 1.91071 30.4081 2.00357 30.2243C2.09643 30.0405 2.33376 29.5633 2.53096 29.1639C2.7282 28.7645 2.90296 28.4154 2.91937 28.3881C2.93574 28.3609 2.98726 28.2569 3.03385 28.1571C3.08041 28.0572 3.13527 27.9458 3.15581 27.9095C3.17632 27.8732 3.42386 27.383 3.70588 26.8202C3.98791 26.2573 4.23531 25.7671 4.25569 25.7308C4.27603 25.6945 4.32197 25.5979 4.35777 25.5162C4.39357 25.4345 4.45221 25.3157 4.4881 25.2522C4.524 25.1886 4.59248 25.0549 4.64029 24.9551C4.68806 24.8552 4.76668 24.6974 4.81495 24.6044C4.86322 24.5114 4.91811 24.4 4.93691 24.3569C4.95568 24.3137 5.00254 24.2189 5.04096 24.1463C5.07938 24.0737 5.17352 23.888 5.25011 23.7337C6.06511 22.0915 6.54404 21.1395 6.56199 21.1259C6.57393 21.1168 6.59496 21.0722 6.60868 21.0268C6.62243 20.9814 6.70564 20.8124 6.79358 20.6512C6.88155 20.49 6.95351 20.3508 6.95351 20.3419C6.95351 20.3329 7.06701 20.1009 7.20571 19.8262C7.3444 19.5515 7.48632 19.2674 7.5211 19.1948C7.55585 19.1221 7.61944 18.9959 7.66239 18.9142C7.70537 18.8325 7.77773 18.6839 7.82324 18.5841C7.86875 18.4842 7.92368 18.3728 7.9453 18.3365C7.98284 18.2734 9.45202 15.3434 9.58393 15.0685C9.61877 14.9958 9.67761 14.877 9.71468 14.8044C9.75176 14.7318 9.81837 14.5981 9.8627 14.5073C9.90707 14.4165 9.96652 14.2977 9.99487 14.2432C10.0415 14.1536 12.215 9.81048 12.4894 9.25864C12.5525 9.13155 12.6418 8.9533 12.6876 8.86252C12.7335 8.77174 12.8666 8.50436 12.9834 8.26833C13.1002 8.03231 13.2117 7.80949 13.2312 7.77318C13.2508 7.73687 13.4975 7.24666 13.7796 6.68383C14.0617 6.12101 14.3088 5.6308 14.3288 5.59449C14.3487 5.55818 14.4032 5.44677 14.4497 5.34692C14.4963 5.24706 14.548 5.14308 14.5646 5.11584C14.5812 5.08861 14.6444 4.96234 14.7051 4.83525C14.8436 4.54536 14.9798 4.2752 15.0629 4.12553C15.0982 4.06199 15.1559 3.94315 15.1911 3.86145C15.2263 3.77975 15.2703 3.68633 15.2889 3.65388C15.3076 3.6214 15.5314 3.17576 15.7864 2.66357C16.0414 2.15135 16.2661 1.72099 16.2857 1.70716C16.3054 1.69336 16.3874 1.68593 16.4681 1.69065C16.5868 1.69762 16.6227 1.71498 16.6568 1.7818ZM21.715 1.81481C21.7469 1.87835 21.8022 1.98976 21.838 2.06238C21.8738 2.13501 21.9348 2.25384 21.9736 2.32647C22.0123 2.39909 22.1023 2.57735 22.1736 2.72259C22.4079 3.20019 23.7723 5.92311 23.8112 5.99062C23.8321 6.02693 23.9528 6.27203 24.0796 6.53529C24.2064 6.79855 24.3388 7.06593 24.3739 7.12947C24.409 7.19302 24.4769 7.32671 24.5247 7.42657C24.5725 7.52642 24.6392 7.66012 24.6729 7.72366C24.7066 7.78721 24.7641 7.90604 24.8006 7.98774C24.8371 8.06944 24.8957 8.18828 24.9307 8.25183C24.9657 8.31537 25.0231 8.42678 25.0581 8.4994C25.1719 8.73536 26.3434 11.0708 26.4077 11.1897C26.4419 11.2533 26.7154 11.7997 27.0153 12.404C27.3153 13.0084 27.5744 13.5283 27.5911 13.5594C27.6317 13.6349 27.8823 14.1432 27.9607 14.3092C27.995 14.3818 28.0599 14.5081 28.105 14.5898C28.15 14.6715 28.2231 14.8201 28.2675 14.9199C28.3118 15.0198 28.3631 15.1238 28.3813 15.151C28.3996 15.1782 28.4597 15.2971 28.5149 15.4151C28.5702 15.5331 28.6438 15.6816 28.6786 15.7452C28.7134 15.8087 28.8901 16.1578 29.0713 16.5209C29.2525 16.884 29.4139 17.2034 29.4299 17.2306C29.4459 17.2579 29.5557 17.4807 29.6738 17.7258C29.792 17.9709 29.9175 18.2234 29.9527 18.287C29.9879 18.3505 30.1181 18.6105 30.242 18.8647C30.5327 19.4611 31.551 21.5085 31.621 21.6375C31.6505 21.692 31.868 22.1228 32.1042 22.5948C32.3405 23.0669 32.5794 23.5422 32.6351 23.6512C32.6908 23.7601 32.7834 23.9458 32.8408 24.0638C32.8982 24.1818 32.9575 24.3006 32.9726 24.3279C32.9877 24.3551 33.0365 24.4517 33.0811 24.5424C33.1258 24.6332 33.1998 24.7818 33.2457 24.8725C33.2916 24.9633 33.3653 25.1119 33.4095 25.2026C33.4537 25.2934 33.5132 25.4123 33.5418 25.4667C33.5704 25.5212 33.6487 25.6772 33.7158 25.8133C33.783 25.9495 34.1824 26.7515 34.6035 27.5955C35.0247 28.4395 35.3692 29.134 35.3692 29.1387C35.3692 29.1435 30.5113 29.1474 24.5739 29.1474C14.9366 29.1474 13.7785 29.142 13.7785 29.0972C13.7785 29.0696 13.8376 28.9231 13.9098 28.7717C13.982 28.6202 14.041 28.4862 14.041 28.4739C14.041 28.4615 14.0867 28.3518 14.1426 28.23C14.3364 27.8076 14.5549 27.3026 14.6312 27.1007C14.6621 27.019 14.7401 26.8388 14.8046 26.7002C14.869 26.5617 14.9623 26.3465 15.0117 26.222C15.0612 26.0976 15.1328 25.9362 15.1707 25.8633L15.2397 25.7308L22.0314 25.7143L28.8231 25.6978L28.9766 25.607C29.1546 25.5018 29.3154 25.2804 29.3688 25.0672C29.4309 24.8189 29.3859 24.6271 29.1502 24.1361C29.0309 23.8875 28.8595 23.5282 28.7693 23.3376C28.6791 23.1469 28.5265 22.8276 28.4301 22.6278C28.3337 22.4281 28.186 22.1162 28.1019 21.9346C27.8793 21.4545 27.8458 21.3859 27.7723 21.2579C27.7358 21.1944 27.6861 21.083 27.6618 21.0103C27.6376 20.9377 27.5776 20.8113 27.5283 20.7294C27.4791 20.6475 27.4195 20.5212 27.3958 20.4488C27.3722 20.3764 27.321 20.2651 27.282 20.2016C27.2431 20.138 27.191 20.034 27.1663 19.9705C27.1415 19.907 27.0436 19.699 26.9486 19.5084C26.7226 19.0549 26.3785 18.3236 26.3785 18.2968C26.3785 18.2852 26.3588 18.2522 26.3346 18.2236C26.3104 18.1949 26.2564 18.0823 26.2145 17.9734C26.1726 17.8644 26.1215 17.753 26.101 17.7258C26.0804 17.6986 26.0397 17.6243 26.0106 17.5607C25.8857 17.2886 25.4032 16.2636 25.1559 15.7452C24.9012 15.2112 24.8986 15.2058 24.8525 15.118C24.8287 15.0726 24.7333 14.8721 24.6405 14.6723C24.5477 14.4726 24.3895 14.1384 24.2889 13.9296C24.1119 13.5619 23.9303 13.1799 23.787 12.8733C23.7488 12.7916 23.7042 12.7024 23.688 12.6752C23.6717 12.648 23.5822 12.4623 23.4889 12.2626C23.278 11.8107 23.0478 11.3245 22.8014 10.8101C22.697 10.5923 22.55 10.2803 22.4748 10.1169C22.3996 9.95351 22.3242 9.79394 22.3074 9.76231C22.2554 9.6648 22.0948 9.33397 22.0067 9.14311C21.9606 9.04325 21.8163 8.73873 21.686 8.46639C21.5558 8.19406 21.3894 7.84497 21.3164 7.69065C21.2434 7.53633 21.1616 7.36672 21.1346 7.31371C20.9553 6.96201 20.8996 6.84565 20.8993 6.82188C20.899 6.80703 20.7576 6.50251 20.585 6.14517C20.286 5.52616 20.1388 5.21864 19.8392 4.58768C19.766 4.43335 19.6913 4.27738 19.6734 4.24107C19.5378 3.96639 19.4361 3.75522 19.2601 3.3828C19.1485 3.14677 19.0003 2.83483 18.9307 2.68958C18.8611 2.54434 18.7796 2.37351 18.7496 2.30996C18.7196 2.24642 18.6586 2.122 18.614 2.03347C18.5695 1.94493 18.5245 1.82966 18.5141 1.77731L18.4952 1.68214L20.0761 1.69069L21.657 1.69927L21.715 1.81481ZM17.0578 12.6092C17.2327 13.0319 17.4377 13.5056 17.5544 13.7564C17.6072 13.8699 17.6504 13.9778 17.6504 13.9962C17.6504 14.0145 17.6649 14.0553 17.6826 14.0869C17.7472 14.2021 17.9129 14.5693 17.9129 14.5973C17.9129 14.6131 17.9424 14.6875 17.9785 14.7627C18.0603 14.9329 18.0601 14.9485 17.9737 15.1418C17.935 15.2286 17.892 15.3292 17.8782 15.3656C17.8643 15.4019 17.8074 15.5293 17.7517 15.6488C17.696 15.7682 17.6504 15.8765 17.6504 15.8895C17.6504 15.9024 17.604 16.0126 17.5473 16.1344C17.4905 16.2562 17.3785 16.5118 17.2982 16.7025C17.2179 16.8931 17.0895 17.1976 17.0129 17.3792C16.9363 17.5607 16.8478 17.7593 16.8163 17.8203C16.7847 17.8814 16.7396 17.9854 16.716 18.0514C16.6925 18.1174 16.6273 18.2704 16.5712 18.3914C16.5151 18.5123 16.4692 18.6206 16.4692 18.632C16.4692 18.651 16.4089 18.7868 16.1873 19.267C16.1438 19.3612 16.1082 19.4532 16.1082 19.4715C16.1082 19.4897 16.0508 19.628 15.9806 19.7788C15.9104 19.9296 15.7893 20.2016 15.7115 20.3831C15.6336 20.5647 15.5582 20.7273 15.5438 20.7446C15.5294 20.7618 15.5176 20.7962 15.5176 20.8209C15.5176 20.8455 15.4603 20.9874 15.3903 21.1361C15.3203 21.2848 15.2517 21.4436 15.2379 21.489C15.2241 21.5344 15.156 21.6903 15.0866 21.8356C15.0172 21.9808 14.9602 22.1178 14.9601 22.1399C14.9599 22.1621 14.9315 22.2363 14.8969 22.305C14.7992 22.499 14.6421 22.8513 14.6179 22.9306C14.6059 22.9701 14.545 23.1079 14.4826 23.2368C14.4202 23.3658 14.3691 23.4852 14.3691 23.5022C14.3691 23.5192 14.3027 23.6761 14.2215 23.851C14.1403 24.0259 14.0738 24.1765 14.0738 24.1856C14.0738 24.2027 14.0362 24.2896 13.8766 24.6415C13.8272 24.7504 13.7644 24.899 13.737 24.9716C13.7095 25.0442 13.6339 25.2181 13.5688 25.3579C13.5036 25.4978 13.4504 25.6273 13.4504 25.6457C13.4504 25.6641 13.3913 25.8008 13.3191 25.9494C13.247 26.098 13.1879 26.2329 13.1879 26.2491C13.1879 26.2654 13.1214 26.4208 13.0402 26.5944C12.959 26.7681 12.8926 26.9231 12.8926 26.9389C12.8926 26.9546 12.8261 27.1068 12.7449 27.2771C12.6637 27.4473 12.5973 27.5983 12.5973 27.6128C12.5973 27.6272 12.5548 27.7296 12.5029 27.8403C12.451 27.951 12.3557 28.17 12.2912 28.3269C12.2267 28.4839 12.1288 28.7081 12.0738 28.8253C12.0188 28.9424 11.9738 29.0525 11.9738 29.07C11.9738 29.0875 11.9213 29.2091 11.8571 29.3402C11.7166 29.6272 11.6465 29.849 11.6461 30.0087C11.6451 30.3223 11.8443 30.6573 12.1034 30.7779L12.2527 30.8474L24.0242 30.8559C30.4986 30.8606 35.7956 30.8754 35.7953 30.8889C35.7948 30.9159 35.3402 31.3883 33.635 33.1333L32.4981 34.2969L19.2008 34.2969C11.8873 34.297 5.90351 34.2873 5.90351 34.2754C5.90351 34.251 5.99394 34.0533 6.25601 33.5048C6.35576 33.296 6.46122 33.0734 6.49036 33.0101C6.5195 32.9468 6.56182 32.8752 6.58437 32.8509C6.60694 32.8267 6.62538 32.7869 6.62538 32.7627C6.62538 32.7384 6.70288 32.5636 6.79765 32.3743C6.89238 32.185 6.98625 31.9943 7.00624 31.9504C7.02619 31.9066 7.08896 31.7787 7.14569 31.6663C7.20242 31.5538 7.24882 31.4396 7.24882 31.4124C7.24882 31.3852 7.26198 31.3548 7.27802 31.3448C7.2941 31.3348 7.36947 31.1965 7.44553 31.0375C7.52162 30.8785 7.62656 30.6629 7.67873 30.5583C7.7309 30.4538 7.78593 30.3424 7.80099 30.3107C7.81608 30.2791 7.9033 30.0973 7.99481 29.9066C8.08633 29.716 8.28232 29.3075 8.43037 28.9988C8.88049 28.0605 9.03615 27.7372 9.3442 27.1007C9.76568 26.23 10.222 25.2819 10.496 24.7075C10.626 24.4352 10.8187 24.0341 10.9244 23.8162C11.2672 23.1092 11.7668 22.0706 11.8413 21.9101C11.8812 21.8239 11.9274 21.745 11.9439 21.7348C11.9603 21.7245 11.9743 21.691 11.9747 21.6603C11.9753 21.6296 12.0118 21.5377 12.056 21.456C12.1362 21.3076 12.2243 21.1264 12.4732 20.5977C12.5459 20.4434 12.6209 20.2874 12.6398 20.2511C12.6863 20.1621 12.9013 19.7205 13.0656 19.3763C13.1392 19.222 13.2367 19.0215 13.2821 18.9307C13.3275 18.8399 13.3819 18.7285 13.4029 18.6831C13.4527 18.5753 13.6747 18.1151 14.2199 16.9895C14.4644 16.4846 14.6645 16.0582 14.6645 16.0419C14.6645 16.0255 14.7057 15.941 14.7562 15.8539C14.8066 15.7669 14.8745 15.6362 14.907 15.5636C14.9395 15.491 15.0302 15.2979 15.1086 15.1345C15.4787 14.3632 15.9124 13.4631 16.1744 12.9228C16.3328 12.596 16.4678 12.3138 16.4743 12.2956C16.4807 12.2774 16.5359 12.1662 16.5969 12.0483L16.7078 11.834L16.818 12.0648C16.8786 12.1917 16.9865 12.4367 17.0578 12.6092ZM19.1255 17.4206C19.1263 17.4434 19.1649 17.54 19.2113 17.6352C19.2577 17.7304 19.3403 17.9197 19.3947 18.0559C19.4491 18.1921 19.5049 18.3183 19.5187 18.3365C19.5324 18.3546 19.6222 18.5626 19.7183 18.7986C19.8143 19.0347 19.9109 19.2575 19.9328 19.2938C19.9548 19.3301 19.9905 19.4161 20.0122 19.4848C20.0339 19.5536 20.0944 19.6947 20.1467 19.7984C20.199 19.9021 20.2419 20.0003 20.2422 20.0166C20.2426 20.0495 20.5397 20.7295 20.7378 21.1511C20.8084 21.3012 20.866 21.4398 20.866 21.4591C20.866 21.4784 20.9325 21.6354 21.0137 21.8079C21.0949 21.9804 21.1614 22.1292 21.1614 22.1386C21.1614 22.148 21.1824 22.2025 21.2081 22.2597C21.3775 22.6364 21.4364 22.7734 21.4728 22.8754C21.4955 22.939 21.5594 23.0875 21.6149 23.2055C21.6703 23.3235 21.7617 23.5315 21.8179 23.6677C21.874 23.8038 21.9281 23.9338 21.9379 23.9565C21.9522 23.9894 21.345 23.9978 18.9629 23.9978C16.5808 23.9978 15.9736 23.9894 15.9879 23.9565C15.9977 23.9338 16.05 23.8085 16.104 23.678C16.158 23.5475 16.2534 23.3321 16.3159 23.1993C16.3785 23.0665 16.4404 22.9208 16.4534 22.8754C16.4665 22.83 16.4889 22.778 16.5033 22.7597C16.5177 22.7415 16.5989 22.5558 16.6837 22.3471C16.7685 22.1384 16.8786 21.8859 16.9282 21.7861C16.9778 21.6862 17.0298 21.5676 17.0437 21.5226C17.0576 21.4775 17.1203 21.329 17.1829 21.1926C17.2455 21.0563 17.323 20.8777 17.3551 20.7958C17.3872 20.7139 17.4647 20.5352 17.5273 20.3989C17.5899 20.2625 17.6525 20.114 17.6665 20.069C17.6804 20.0239 17.7416 19.8871 17.8024 19.765C17.8632 19.6429 17.913 19.5241 17.9132 19.5009C17.9133 19.4778 17.9703 19.34 18.0397 19.1948C18.1092 19.0495 18.1776 18.8937 18.1918 18.8484C18.2159 18.7719 18.3257 18.5203 18.4738 18.2023C18.5082 18.1285 18.5363 18.0573 18.5363 18.0441C18.5363 18.0309 18.5954 17.8989 18.6676 17.7508C18.7398 17.6026 18.7988 17.4597 18.7988 17.4332C18.7988 17.4067 18.8379 17.318 18.8855 17.2362L18.9723 17.0873L19.0481 17.2333C19.0899 17.3135 19.1247 17.3978 19.1255 17.4206Z'
        fill='#445FF8'
      />
    </svg>
  )
}

const Hamburger = () => {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z'
        fill='currentColor'
        fillRule='evenodd'
        clipRule='evenodd'></path>
    </svg>
  )
}
export const Header = <_Header extends Header>({ buttons }: _Header) => {
  const links = buttons.filter(item => item.linkTo)

  return (
    <header>
      <div className='container flex justify-between gap-1 py-4'>
        <div className='flex flex-row flex-nowrap items-center grow sm:grow-0 gap-2 '>
          <LogoSvg />
          <span className='text-nowrap'>АЛСИ-ФТ</span>
        </div>
        <div className='items-center hidden sm:flex flex-wrap justify-center'>
          {links.map((link, idx) => {
            return (
              <Link
                key={`header_link_${idx}`}
                href={link.linkTo!}
                passHref
                legacyBehavior>
                <Button variant={'ghost'}>{link.text}</Button>
              </Link>
            )
          })}
        </div>
        <Button variant={'outline'} className='sm:hidden'>
          <Icon>
            <Hamburger />
          </Icon>
        </Button>
        <LocaleSwitch />
      </div>
    </header>
  )
}
