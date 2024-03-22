<template>
  <!-- manage product  -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="lg:w-6 lg:h-6 md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    v-if="props.type == MANAGE_PRODUCT"
  >
    <path
      d="M2 12.6101H19"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.25 17.8101H6.96997"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.10986 17.8101H12.5499"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!-- circle -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    v-if="props.type == CIRCLE"
  >
    <circle
      cx="12"
      cy="12"
      r="3"
      :fill="props.active ? COLOR.primary : COLOR.gray"
    />
    <circle v-if="props.color" cx="12" cy="12" r="5" :fill="props.color" />
  </svg>
  <!-- manage order -->
  <svg
    class="lg:w-6 lg:h-6 md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type == ORDER"
  >
    <path
      d="M21.6599 10.44L20.6799 14.62C19.8399 18.23 18.1799 19.69 15.0599 19.39C14.5599 19.35 14.0199 19.26 13.4399 19.12L11.7599 18.72C7.58994 17.73 6.29994 15.67 7.27994 11.49L8.25994 7.30001C8.45994 6.45001 8.69994 5.71001 8.99994 5.10001C10.1699 2.68001 12.1599 2.03001 15.4999 2.82001L17.1699 3.21001C21.3599 4.19001 22.6399 6.26001 21.6599 10.44Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.0601 19.39C14.4401 19.81 13.6601 20.16 12.7101 20.47L11.1301 20.99C7.1601 22.27 5.0701 21.2 3.7801 17.23L2.5001 13.28C1.2201 9.31001 2.2801 7.21001 6.2501 5.93001L7.8301 5.41001C8.2401 5.28001 8.6301 5.17001 9.0001 5.10001C8.7001 5.71001 8.4601 6.45001 8.2601 7.30001L7.2801 11.49C6.3001 15.67 7.5901 17.73 11.7601 18.72L13.4401 19.12C14.0201 19.26 14.5601 19.35 15.0601 19.39Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.6399 8.53L17.4899 9.76"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.6599 12.4L14.5599 13.14"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <!-- manage store -->
  <svg
    class="lg:w-6 lg:h-6 md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === MANAGE_STORE"
  >
    <path
      d="M3.01001 11.22V15.71C3.01001 20.2 4.81001 22 9.30001 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.63988 12C7.28988 12 8.77988 10.66 8.93988 9.01L9.15988 6.8L9.63988 2H6.58988C3.96988 2 2.96988 3 2.60988 5.6L2.33988 8.35C2.13988 10.36 3.61988 12 5.63988 12Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!-- arrow right -->
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === ARROW_RIGHT"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.5 12H14.5"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 15L15.5 12L12.5 9"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <!-- arrow down -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="lg:w-6 lg:h-6 md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    v-if="props.type === ARROW_DOWN"
  >
    <path
      d="M18 10L13.0606 14.5932C12.4773 15.1356 11.5227 15.1356 10.9394 14.5932L6 10"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!-- hamburger icon -->
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === HUMBURER"
  >
    <rect width="30" height="30" rx="2" fill="white" />
    <path
      d="M6 10H24"
      :stroke="COLOR.primary"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M6 15H24"
      :stroke="COLOR.primary"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M6 20H24"
      :stroke="COLOR.primary"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
  <!--next breadcrumb-->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    v-if="props.type === NEXT_BREADCRUMB"
  >
    <path
      d="M5.66369 8.49996C5.74908 8.50025 5.83344 8.48141 5.91058 8.44483C5.98773 8.40824 6.05569 8.35484 6.10949 8.28855L8.86998 4.8603C8.95405 4.75807 9 4.62983 9 4.49748C9 4.36514 8.95405 4.2369 8.86998 4.13466L6.01233 0.70641C5.91532 0.589726 5.77591 0.516348 5.62478 0.502418C5.47366 0.488488 5.32318 0.535147 5.20647 0.632132C5.08975 0.729116 5.01635 0.868481 5.00242 1.01957C4.98848 1.17065 5.03516 1.32109 5.13217 1.43777L7.68691 4.50034L5.2179 7.56291C5.14801 7.64678 5.10361 7.7489 5.08997 7.85721C5.07632 7.96551 5.09399 8.07546 5.14089 8.17403C5.18778 8.27261 5.26195 8.3557 5.3546 8.41346C5.44725 8.47122 5.55451 8.50124 5.66369 8.49996Z"
      fill="#9D9D9D"
    />
    <path
      d="M0.663692 8.49996C0.749076 8.50025 0.83344 8.48141 0.910584 8.44483C0.987729 8.40824 1.05569 8.35484 1.10949 8.28855L3.86998 4.8603C3.95405 4.75807 4 4.62983 4 4.49748C4 4.36514 3.95405 4.2369 3.86998 4.13466L1.01233 0.70641C0.915315 0.589726 0.775912 0.516348 0.624784 0.502418C0.473656 0.488488 0.323183 0.535147 0.206467 0.632132C0.0897505 0.729116 0.0163522 0.868481 0.00241828 1.01957C-0.0115156 1.17065 0.0351567 1.32109 0.132168 1.43777L2.68691 4.50034L0.217898 7.56291C0.148009 7.64678 0.103614 7.7489 0.0899663 7.85721C0.0763183 7.96551 0.0939882 8.07546 0.140886 8.17403C0.187783 8.27261 0.261945 8.3557 0.354596 8.41346C0.447248 8.47122 0.55451 8.50124 0.663692 8.49996Z"
      fill="#9D9D9D"
    />
  </svg>
  <!--logout-->
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === LOGOUT"
  >
    <path
      d="M15.1001 7.55999C14.7901 3.95999 12.9401 2.48999 8.8901 2.48999H8.7601C4.2901 2.48999 2.5001 4.27999 2.5001 8.74999V15.27C2.5001 19.74 4.2901 21.53 8.7601 21.53H8.8901C12.9101 21.53 14.7601 20.08 15.0901 16.54"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.99988 12H20.3799"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.15 8.6499L21.5 11.9999L18.15 15.3499"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <!-- pen -->
  <svg
    class="lg:w-6 lg:h-6 md:w-[18px] md:h-[18px] w-[16px] h-[16px]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === PENCIL"
  >
    <path
      d="M12.9493 5.12701L6.79017 11.9325C6.5576 12.191 6.33254 12.7 6.28753 13.0524L6.00995 15.5898C5.91243 16.5061 6.5426 17.1326 7.41284 16.976L9.82849 16.5453C10.1661 16.4826 10.6387 16.2242 10.8713 15.9579L17.0305 9.15237C18.0957 7.97766 18.5759 6.63848 16.9179 5.00171C15.2675 3.3806 14.0146 3.95229 12.9493 5.12701Z"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 7C12.3156 8.60777 13.9596 9.83689 16 10"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 20H19"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!-- delete -->
  <svg
    class="lg:w-6 lg:h-6 md:w-[18px] md:h-[18px] w-[16px] h-[16px]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === DELETE"
  >
    <path
      d="M20 6C17.04 6 14.0622 6 11.0933 6C9.33333 6 7.57333 6 5.81333 6H4"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 5L9.18857 4.11785C9.32571 3.47811 9.42857 3 10.8771 3H13.1229C14.5714 3 14.6829 3.50505 14.8114 4.12458L15 5"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 10L17.4307 18.6135C17.3343 19.9565 17.2555 21 14.8117 21H9.18832C6.74453 21 6.66569 19.9565 6.56934 18.6135L6 10"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.3301 16.5H13.6601"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 12H14"
      stroke="#A1A1A1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <!--dashboard-->
  <svg
    class="lg:w-6 lg:h-6 md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === DASHBOARD"
  >
    <path
      d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.5 11.5L12.3 15.7L10.7 13.3L7.5 16.5"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5 11.5H16.5V13.5"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <!--  warehouse-->
  <svg
    class="lg:w-6 lg:h-6 md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === WAREHOUSE"
  >
    <path
      d="M2 22H22"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 16.25V17.75"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 7.5H13.5"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <!--  promotion-->
  <svg
    class="lg:w-6 lg:h-6 md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === MANAGE_PROMOTION"
  >
    <path
      d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 7H15"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 7H5"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 7.72998C17.37 8.92998 19 11.51 19 14.5C19 14.67 18.99 14.83 18.97 15"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.03 15C5.01 14.83 5 14.67 5 14.5C5 11.51 6.63 8.92998 9 7.72998"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <!--  news-->
  <svg
    class="lg:w-6 lg:h-6 md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === MANAGE_NEWS"
  >
    <path
      d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 7H16"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 10.5H13"
      :stroke="props.active ? COLOR.primary : COLOR.gray"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!-- plus circle -->
  <svg
    width="42"
    height="42"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    v-if="props.type === PLUS_CIRCLE"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
  <!-- save -->
  <svg
    width="30"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    v-if="props.type === SAVE"
  >
    <path
      d="M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
    />
  </svg>
  <!-- plus -->
  <svg
    width="26"
    height="26"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="{1.5}"
    stroke="currentColor"
    v-if="props.type === PLUS"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
  <!--Error -->
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === ERROR"
  >
    <path
      d="M8.57465 3.21659L1.51632 14.9999C1.37079 15.2519 1.29379 15.5377 1.29298 15.8287C1.29216 16.1197 1.36756 16.4059 1.51167 16.6587C1.65579 16.9115 1.86359 17.1222 2.11441 17.2698C2.36523 17.4174 2.65032 17.4967 2.94132 17.4999H17.058C17.349 17.4967 17.6341 17.4174 17.8849 17.2698C18.1357 17.1222 18.3435 16.9115 18.4876 16.6587C18.6317 16.4059 18.7071 16.1197 18.7063 15.8287C18.7055 15.5377 18.6285 15.2519 18.483 14.9999L11.4247 3.21659C11.2761 2.97168 11.0669 2.76919 10.8173 2.62866C10.5677 2.48813 10.2861 2.41431 9.99965 2.41431C9.71321 2.41431 9.43159 2.48813 9.18199 2.62866C8.93238 2.76919 8.72321 2.97168 8.57465 3.21659V3.21659Z"
      stroke="#CF0D3C"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 7.5V10.8333"
      stroke="#CF0D3C"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 14.1667H10.0083"
      stroke="#CF0D3C"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!--Success-->
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === SUCCESS"
  >
    <g clip-path="url(#clip0_343_1826)">
      <path
        d="M18.3337 9.2333V9.99997C18.3326 11.797 17.7507 13.5455 16.6748 14.9848C15.5988 16.4241 14.0864 17.477 12.3631 17.9866C10.6399 18.4961 8.79804 18.4349 7.11238 17.8121C5.42673 17.1894 3.98754 16.0384 3.00946 14.5309C2.03138 13.0233 1.56682 11.24 1.68506 9.4469C1.80329 7.65377 2.498 5.94691 3.66556 4.58086C4.83312 3.21482 6.41098 2.26279 8.16382 1.86676C9.91665 1.47073 11.7505 1.65192 13.392 2.3833"
        stroke="#439F6E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 3.33325L10 11.6749L7.5 9.17492"
        stroke="#439F6E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_343_1826">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
  <!--Info-->
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === INFO"
  >
    <g clip-path="url(#clip0_343_1804)">
      <path
        d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334Z"
        stroke="#4097A3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 13.3333V10"
        stroke="#4097A3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 6.66675H10.0083"
        stroke="#4097A3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_343_1804">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
  <!--Close-->
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === CLOSE"
  >
    <path
      d="M15 5L5 15"
      stroke="#6D6E70"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 5L15 15"
      stroke="#6D6E70"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!--Upload-->
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === UPLOAD"
  >
    <path
      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
      stroke="#4097A3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 8L12 3L7 8"
      stroke="#4097A3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 3V15"
      stroke="#4097A3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!-- Profile -->
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === PROFILE"
  >
    <path
      d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!-- Shopping Cart -->
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === SHOPPING_CART"
  >
    <path
      d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 8H21"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <!-- Loading -->
  <svg
    :class="props.classCustom"
    class="-ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    v-if="props.type === LOADING"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
</template>
<script setup>
import { COLOR } from '../../utils/theme';
import {
  MANAGE_PRODUCT,
  CIRCLE,
  WAREHOUSE,
  MANAGE_STORE,
  ARROW_DOWN,
  HUMBURER,
  NEXT_BREADCRUMB,
  LOGOUT,
  PENCIL,
  DELETE,
  DASHBOARD,
  ORDER,
  MANAGE_PROMOTION,
  MANAGE_NEWS,
  PLUS_CIRCLE,
  SAVE,
  PLUS,
  ERROR,
  SUCCESS,
  INFO,
  CLOSE,
  UPLOAD,
  ARROW_RIGHT,
  PROFILE,
  SHOPPING_CART,
  LOADING,
} from '../../utils/constant';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
  classCustom: {
    type: String,
    default: '',
  },
});
</script>
