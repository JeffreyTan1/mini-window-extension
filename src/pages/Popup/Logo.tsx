import React, { FC } from 'react';

const Logo: FC<{}> = () => {
  return (
    <svg
      width="80"
      height="35"
      viewBox="0 0 73 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_9_14)">
        <path
          d="M20.668 12.936C21.004 11.136 20.86 9.648 20.236 8.472C19.612 7.296 18.724 6.408 17.572 5.808C16.996 5.544 16.36 5.328 15.664 5.16C14.992 4.992 14.296 4.896 13.576 4.872C12.88 4.824 12.184 4.848 11.488 4.944C10.792 5.016 10.156 5.172 9.58 5.412C8.428 5.892 7.444 6.624 6.628 7.608C5.836 8.592 5.296 9.684 5.008 10.884C4.72 12.084 4.732 13.32 5.044 14.592C5.38 15.864 6.1 17.028 7.204 18.084C7.54 18.372 7.912 18.624 8.32 18.84C8.728 19.056 9.172 19.212 9.652 19.308C10.156 19.404 10.696 19.512 11.272 19.632C11.848 19.728 12.376 19.884 12.856 20.1C13.36 20.316 13.792 20.604 14.152 20.964C14.512 21.3 14.728 21.756 14.8 22.332C14.944 23.172 14.776 23.796 14.296 24.204C13.84 24.612 13.288 24.828 12.64 24.852C12.016 24.852 11.416 24.66 10.84 24.276C10.288 23.892 9.988 23.316 9.94 22.548C9.124 22.572 8.212 22.56 7.204 22.512C6.196 22.44 5.272 22.464 4.432 22.584V22.692V22.8C4.36 23.952 4.564 24.984 5.044 25.896C5.524 26.784 6.172 27.54 6.988 28.164C7.804 28.788 8.728 29.28 9.76 29.64C10.816 29.976 11.872 30.156 12.928 30.18C13.672 30.204 14.392 30.144 15.088 30C15.808 29.832 16.468 29.58 17.068 29.244C17.692 28.908 18.244 28.476 18.724 27.948C19.204 27.42 19.588 26.784 19.876 26.04C20.164 25.416 20.368 24.768 20.488 24.096C20.632 23.4 20.68 22.716 20.632 22.044C20.608 21.372 20.488 20.724 20.272 20.1C20.056 19.452 19.732 18.852 19.3 18.3C18.604 17.268 17.704 16.416 16.6 15.744C15.52 15.072 14.344 14.664 13.072 14.52C12.568 14.448 12.1 14.316 11.668 14.124C11.236 13.932 10.924 13.548 10.732 12.972C10.708 12.804 10.684 12.648 10.66 12.504C10.66 12.336 10.684 12.168 10.732 12C10.828 11.328 11.14 10.872 11.668 10.632C12.22 10.392 12.784 10.332 13.36 10.452C13.936 10.572 14.428 10.848 14.836 11.28C15.244 11.712 15.376 12.252 15.232 12.9C16.072 13.14 16.972 13.248 17.932 13.224C18.892 13.176 19.792 13.08 20.632 12.936H20.668ZM27.5207 13.944C27.4967 13.608 27.4847 13.308 27.4847 13.044C27.5087 12.78 27.4967 12.444 27.4487 12.036C27.4487 11.964 27.3527 11.928 27.1607 11.928C26.9687 11.904 26.7527 11.904 26.5127 11.928C26.2727 11.952 26.0327 11.988 25.7927 12.036C25.5527 12.06 25.3847 12.072 25.2887 12.072C25.0007 12.096 24.7607 12.12 24.5687 12.144C24.3767 12.144 24.1967 12.144 24.0287 12.144C23.8607 12.144 23.6807 12.144 23.4887 12.144C23.2967 12.12 23.0567 12.096 22.7687 12.072C22.6727 15.24 22.6487 18.3 22.6967 21.252C22.7687 24.204 22.8047 27.156 22.8047 30.108C23.3807 30.06 23.8607 30.048 24.2447 30.072C24.6287 30.096 24.9767 30.108 25.2887 30.108C25.6007 30.132 25.9007 30.132 26.1887 30.108C26.5007 30.084 26.8607 30.012 27.2687 29.892V29.748C27.3647 28.956 27.4127 28.164 27.4127 27.372C27.4127 26.58 27.3887 25.788 27.3407 24.996C27.3167 24.18 27.2927 23.376 27.2687 22.584C27.2447 21.768 27.2567 20.94 27.3047 20.1C27.3527 19.452 27.5207 18.972 27.8087 18.66C28.0967 18.324 28.4207 18.108 28.7807 18.012C29.1407 17.892 29.5007 17.868 29.8607 17.94C30.2447 17.988 30.5327 18.06 30.7247 18.156C30.7487 18.18 30.7727 18.192 30.7967 18.192C30.8207 18.192 30.8447 18.204 30.8687 18.228C31.0607 18.372 31.2047 18.576 31.3007 18.84C31.4207 19.104 31.5047 19.404 31.5527 19.74C31.6247 20.076 31.6727 20.424 31.6967 20.784C31.7207 21.12 31.7447 21.432 31.7687 21.72C31.8167 22.368 31.8407 23.064 31.8407 23.808C31.8647 24.552 31.8647 25.296 31.8407 26.04C31.8407 26.784 31.8407 27.504 31.8407 28.2C31.8407 28.896 31.8647 29.52 31.9127 30.072C32.7527 30.072 33.4967 30.072 34.1447 30.072C34.8167 30.096 35.5727 30.048 36.4127 29.928C36.3647 29.208 36.3407 28.38 36.3407 27.444C36.3647 26.484 36.3887 25.5 36.4127 24.492C36.4367 23.46 36.4607 22.428 36.4847 21.396C36.5087 20.34 36.5087 19.344 36.4847 18.408C36.7007 18.24 36.9287 18.12 37.1687 18.048C37.4327 17.952 37.6847 17.904 37.9247 17.904C38.1887 17.904 38.4287 17.928 38.6447 17.976C38.8607 18.024 39.0407 18.084 39.1847 18.156C39.2087 18.18 39.2327 18.192 39.2567 18.192C39.2807 18.192 39.3047 18.204 39.3287 18.228C39.5207 18.372 39.6647 18.576 39.7607 18.84C39.8807 19.104 39.9647 19.404 40.0127 19.74C40.0847 20.076 40.1327 20.424 40.1567 20.784C40.1807 21.12 40.2047 21.432 40.2287 21.72C40.2767 22.368 40.3007 23.064 40.3007 23.808C40.3247 24.552 40.3247 25.296 40.3007 26.04C40.3007 26.784 40.3007 27.504 40.3007 28.2C40.3007 28.896 40.3247 29.52 40.3727 30.072C41.2127 30.072 41.9567 30.072 42.6047 30.072C43.2767 30.096 44.0327 30.048 44.8727 29.928C44.8247 29.112 44.8127 28.164 44.8367 27.084C44.8607 26.004 44.8847 24.888 44.9087 23.736C44.9327 22.56 44.9447 21.408 44.9447 20.28C44.9687 19.128 44.9567 18.072 44.9087 17.112C44.8847 16.152 44.8007 15.336 44.6567 14.664C44.5367 13.968 44.3567 13.512 44.1167 13.296C43.6127 12.864 43.0487 12.564 42.4247 12.396C41.8007 12.228 41.1527 12.156 40.4807 12.18C39.8327 12.204 39.1967 12.324 38.5727 12.54C37.9487 12.756 37.3847 13.044 36.8807 13.404C36.7607 13.5 36.6167 13.596 36.4487 13.692C36.2807 13.764 36.1367 13.836 36.0167 13.908C35.8967 13.62 35.7767 13.416 35.6567 13.296C35.1527 12.864 34.5887 12.564 33.9647 12.396C33.3407 12.228 32.6927 12.156 32.0207 12.18C31.3727 12.204 30.7367 12.324 30.1127 12.54C29.4887 12.756 28.9247 13.044 28.4207 13.404C28.3007 13.5 28.1447 13.596 27.9527 13.692C27.7847 13.788 27.6407 13.872 27.5207 13.944ZM47.702 13.584C47.63 13.848 47.522 14.208 47.378 14.664C47.234 15.096 47.15 15.444 47.126 15.708C47.054 16.164 47.006 16.608 46.982 17.04C46.958 17.448 46.946 17.868 46.946 18.3C47.018 19.092 47.03 19.968 46.982 20.928C46.958 21.888 46.97 22.848 47.018 23.808C47.066 24.744 47.21 25.644 47.45 26.508C47.69 27.372 48.134 28.092 48.782 28.668C49.622 29.508 50.654 30.036 51.878 30.252C52.55 30.252 53.294 30.276 54.11 30.324C54.926 30.396 55.718 30.396 56.486 30.324C57.254 30.276 57.962 30.132 58.61 29.892C59.282 29.652 59.822 29.244 60.23 28.668C60.47 28.428 60.65 27.984 60.77 27.336C60.914 26.688 61.022 25.956 61.094 25.14C61.19 24.324 61.25 23.472 61.274 22.584C61.322 21.696 61.358 20.904 61.382 20.208C61.358 19.416 61.334 18.648 61.31 17.904C61.286 17.136 61.226 16.44 61.13 15.816C61.034 15.168 60.89 14.604 60.698 14.124C60.506 13.644 60.242 13.296 59.906 13.08C59.402 12.6 58.802 12.24 58.106 12C57.41 11.736 56.678 11.58 55.91 11.532C55.406 11.484 54.926 11.484 54.47 11.532C54.038 11.556 53.582 11.544 53.102 11.496C52.526 11.496 51.95 11.532 51.374 11.604C50.822 11.676 50.294 11.808 49.79 12C49.31 12.168 48.878 12.384 48.494 12.648C48.134 12.912 47.87 13.224 47.702 13.584ZM52.202 17.832C52.514 17.448 52.922 17.184 53.426 17.04C54.362 16.824 55.118 16.908 55.694 17.292C56.27 17.676 56.618 18.288 56.738 19.128C56.882 19.824 56.918 20.568 56.846 21.36C56.798 22.128 56.726 22.896 56.63 23.664C56.486 24.264 56.21 24.66 55.802 24.852C55.49 25.02 55.094 25.14 54.614 25.212C54.134 25.26 53.666 25.236 53.21 25.14C52.778 25.02 52.406 24.816 52.094 24.528C51.782 24.216 51.638 23.784 51.662 23.232C51.71 22.392 51.734 21.6 51.734 20.856C51.734 20.088 51.782 19.32 51.878 18.552C51.95 18.168 52.058 17.928 52.202 17.832ZM63.6228 3.828C63.4068 6.012 63.2988 8.196 63.2988 10.38C63.3228 12.564 63.3708 14.748 63.4428 16.932C63.5148 19.116 63.5628 21.3 63.5868 23.484C63.6348 25.668 63.5748 27.84 63.4067 30C63.5748 29.952 63.9108 29.94 64.4148 29.964C64.9188 29.988 65.4468 30 65.9988 30C66.5748 30.024 67.1028 30.024 67.5828 30C68.0628 30 68.3628 29.928 68.4828 29.784C68.4348 28.824 68.3988 27.66 68.3748 26.292C68.3508 24.9 68.3388 23.412 68.3388 21.828C68.3388 20.244 68.3388 18.6 68.3388 16.896C68.3628 15.192 68.3868 13.548 68.4108 11.964C68.4348 10.38 68.4588 8.892 68.4828 7.5C68.5068 6.108 68.5188 4.92 68.5188 3.936L63.6228 3.828Z"
          fill="url(#paint0_linear_9_14)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_9_14"
          x="0.323997"
          y="0.828003"
          width="72.1948"
          height="34.604"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_14"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_14"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_9_14"
          x1="37"
          y1="-4"
          x2="37"
          y2="39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9900CF" />
          <stop offset="1" stop-color="#FF0F00" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
