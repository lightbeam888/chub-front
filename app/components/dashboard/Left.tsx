"use client"

import Image from "next/image"
import Link from "next/link"
import { logOut } from "../Icons"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
  className: String,
}
type subMenu = {
  name: String,
  icon: String,
  url: String,
}

type menuItem = {
  subtitle: String,
  items: subMenu[]
}

export default function Left({ className }: Props) {
  const menuItem: menuItem[] = [
    {
      subtitle: 'Menu',
      items: [
        // {
        //   name: 'Dex Board',
        //   icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <g clipPath="url(#clip0_0_3910)">
        //         <path fillRule="evenodd" clipRule="evenodd" d="M11.4469 3.02355C11.8125 2.95496 12.1876 2.95496 12.5532 3.02355C12.9337 3.09493 13.3137 3.27483 14.415 3.82549L21.5528 7.3944C22.0468 7.64139 22.6474 7.44116 22.8944 6.94719C23.1414 6.45321 22.9412 5.85254 22.4472 5.60555L15.3094 2.03663L15.1862 1.97498C14.2558 1.5094 13.6123 1.18735 12.922 1.05785C12.3127 0.943527 11.6874 0.943526 11.0781 1.05785C10.3878 1.18735 9.74426 1.5094 8.8139 1.97497L8.69067 2.03662L1.55279 5.60554C1.05881 5.85253 0.858583 6.4532 1.10557 6.94718C1.35256 7.44116 1.95323 7.64139 2.44721 7.3944L9.5851 3.82548C10.6864 3.27483 11.0664 3.09493 11.4469 3.02355ZM11.453 7.01093C11.8146 6.94386 12.1855 6.94386 12.5471 7.01093C12.9235 7.08073 13.2996 7.25652 14.39 7.79468L17.9899 9.57145C19.3499 10.2427 19.8091 10.484 20.1356 10.815C20.4494 11.1331 20.6882 11.5172 20.8345 11.9393C20.9868 12.3787 21 12.8972 21 14.4138V16.1C21 17.2366 20.9992 18.0289 20.9488 18.6457C20.8994 19.2509 20.8072 19.5986 20.673 19.8619C20.3854 20.4264 19.9265 20.8854 19.362 21.173C19.0986 21.3072 18.7509 21.3994 18.1458 21.4488C17.5289 21.4992 16.7366 21.5 15.6 21.5H8.40001C7.2634 21.5 6.47109 21.4992 5.85425 21.4488C5.24908 21.3994 4.90139 21.3072 4.63804 21.173C4.07355 20.8854 3.61461 20.4264 3.32699 19.8619C3.1928 19.5986 3.10063 19.2509 3.05118 18.6457C3.00079 18.0289 3.00001 17.2366 3.00001 16.1L3 14.4138C3 12.8972 3.01318 12.3787 3.16549 11.9393C3.31182 11.5172 3.5506 11.1331 3.86437 10.815C4.19095 10.484 4.65008 10.2427 6.01009 9.57145L9.61012 7.79467C10.7005 7.25652 11.0766 7.08073 11.453 7.01093ZM12.9119 5.04447C12.3091 4.93268 11.691 4.93268 11.0882 5.04447C10.4055 5.17109 9.7682 5.4859 8.8469 5.941L8.72496 6.00121L5.12493 7.77799L4.97089 7.85397C3.82537 8.41875 3.03401 8.80891 2.44061 9.4104C1.91766 9.94048 1.51971 10.5807 1.27581 11.2842C0.999063 12.0826 0.999429 12.9649 0.999957 14.242L1 14.4138L1.00001 16.1L1.00001 16.1428C0.999997 17.2266 0.99999 18.1007 1.05783 18.8086C1.11738 19.5374 1.24319 20.1776 1.54498 20.7699C2.02434 21.7107 2.78925 22.4756 3.73006 22.955C4.32235 23.2568 4.96254 23.3826 5.69138 23.4422C6.39924 23.5 7.27335 23.5 8.35707 23.5H8.35717H8.40001H15.6H15.6428H15.6429C16.7267 23.5 17.6008 23.5 18.3086 23.4422C19.0375 23.3826 19.6777 23.2568 20.27 22.955C21.2108 22.4756 21.9757 21.7107 22.455 20.7699C22.7568 20.1776 22.8826 19.5374 22.9422 18.8086C23 18.1007 23 17.2266 23 16.1429V16.1428V16.1V14.4138L23 14.242C23.0006 12.9648 23.0009 12.0825 22.7242 11.2842C22.4803 10.5807 22.0823 9.94048 21.5594 9.4104C20.966 8.80891 20.1747 8.41875 19.0292 7.85397L18.8751 7.77799L15.2751 6.00123L15.1532 5.94101C14.2319 5.48591 13.5946 5.1711 12.9119 5.04447Z" fill="currentColor"/>
        //         </g>
        //         <defs>
        //         <clipPath id="clip0_0_3910">
        //         <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
        //         </clipPath>
        //         </defs>
        //         </svg>`,
        //   url: '/'
        // },
        // {
        //   name: 'Overview',
        //   icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <g clipPath="url(#clip0_0_3910)">
        //         <path fillRule="evenodd" clipRule="evenodd" d="M11.4469 3.02355C11.8125 2.95496 12.1876 2.95496 12.5532 3.02355C12.9337 3.09493 13.3137 3.27483 14.415 3.82549L21.5528 7.3944C22.0468 7.64139 22.6474 7.44116 22.8944 6.94719C23.1414 6.45321 22.9412 5.85254 22.4472 5.60555L15.3094 2.03663L15.1862 1.97498C14.2558 1.5094 13.6123 1.18735 12.922 1.05785C12.3127 0.943527 11.6874 0.943526 11.0781 1.05785C10.3878 1.18735 9.74426 1.5094 8.8139 1.97497L8.69067 2.03662L1.55279 5.60554C1.05881 5.85253 0.858583 6.4532 1.10557 6.94718C1.35256 7.44116 1.95323 7.64139 2.44721 7.3944L9.5851 3.82548C10.6864 3.27483 11.0664 3.09493 11.4469 3.02355ZM11.453 7.01093C11.8146 6.94386 12.1855 6.94386 12.5471 7.01093C12.9235 7.08073 13.2996 7.25652 14.39 7.79468L17.9899 9.57145C19.3499 10.2427 19.8091 10.484 20.1356 10.815C20.4494 11.1331 20.6882 11.5172 20.8345 11.9393C20.9868 12.3787 21 12.8972 21 14.4138V16.1C21 17.2366 20.9992 18.0289 20.9488 18.6457C20.8994 19.2509 20.8072 19.5986 20.673 19.8619C20.3854 20.4264 19.9265 20.8854 19.362 21.173C19.0986 21.3072 18.7509 21.3994 18.1458 21.4488C17.5289 21.4992 16.7366 21.5 15.6 21.5H8.40001C7.2634 21.5 6.47109 21.4992 5.85425 21.4488C5.24908 21.3994 4.90139 21.3072 4.63804 21.173C4.07355 20.8854 3.61461 20.4264 3.32699 19.8619C3.1928 19.5986 3.10063 19.2509 3.05118 18.6457C3.00079 18.0289 3.00001 17.2366 3.00001 16.1L3 14.4138C3 12.8972 3.01318 12.3787 3.16549 11.9393C3.31182 11.5172 3.5506 11.1331 3.86437 10.815C4.19095 10.484 4.65008 10.2427 6.01009 9.57145L9.61012 7.79467C10.7005 7.25652 11.0766 7.08073 11.453 7.01093ZM12.9119 5.04447C12.3091 4.93268 11.691 4.93268 11.0882 5.04447C10.4055 5.17109 9.7682 5.4859 8.8469 5.941L8.72496 6.00121L5.12493 7.77799L4.97089 7.85397C3.82537 8.41875 3.03401 8.80891 2.44061 9.4104C1.91766 9.94048 1.51971 10.5807 1.27581 11.2842C0.999063 12.0826 0.999429 12.9649 0.999957 14.242L1 14.4138L1.00001 16.1L1.00001 16.1428C0.999997 17.2266 0.99999 18.1007 1.05783 18.8086C1.11738 19.5374 1.24319 20.1776 1.54498 20.7699C2.02434 21.7107 2.78925 22.4756 3.73006 22.955C4.32235 23.2568 4.96254 23.3826 5.69138 23.4422C6.39924 23.5 7.27335 23.5 8.35707 23.5H8.35717H8.40001H15.6H15.6428H15.6429C16.7267 23.5 17.6008 23.5 18.3086 23.4422C19.0375 23.3826 19.6777 23.2568 20.27 22.955C21.2108 22.4756 21.9757 21.7107 22.455 20.7699C22.7568 20.1776 22.8826 19.5374 22.9422 18.8086C23 18.1007 23 17.2266 23 16.1429V16.1428V16.1V14.4138L23 14.242C23.0006 12.9648 23.0009 12.0825 22.7242 11.2842C22.4803 10.5807 22.0823 9.94048 21.5594 9.4104C20.966 8.80891 20.1747 8.41875 19.0292 7.85397L18.8751 7.77799L15.2751 6.00123L15.1532 5.94101C14.2319 5.48591 13.5946 5.1711 12.9119 5.04447Z" fill="currentColor"/>
        //         </g>
        //         <defs>
        //         <clipPath id="clip0_0_3910">
        //         <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
        //         </clipPath>
        //         </defs>
        //         </svg>`,
        //   url: '/overview'
        // },
        // {
        //   name: 'Live New Pairs',
        //   icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6088 3.45005C11.3898 2.669 12.6561 2.669 13.4372 3.45004L14.6945 4.7074C14.7864 4.79926 14.8672 4.89736 14.937 5.00024H14.5086C14.3564 5 14.1988 5 14.0355 5L14 5L9.0588 5L10.6088 3.45005ZM6.53869 5.01469C6.60265 4.74722 6.74238 4.48799 6.96659 4.26378L9.19454 2.03583C10.7566 0.473735 13.2893 0.473732 14.8514 2.03583L16.1088 3.29319C16.4962 3.68065 16.7889 4.12994 16.9847 4.61041C17.0579 4.78989 17.0977 4.9693 17.1089 5.14431C17.3881 5.19796 17.6544 5.27333 17.9134 5.3806C19.1386 5.88807 20.1119 6.86144 20.6194 8.08658C20.8305 8.59628 20.9181 9.13456 20.9596 9.74331C20.9845 10.1078 20.994 10.5237 20.9977 11H21C22.6569 11 24 12.3431 24 14C24 15.6569 22.6569 17 21 17H20.9977C20.994 17.4763 20.9845 17.8922 20.9596 18.2567C20.9181 18.8654 20.8305 19.4037 20.6194 19.9134C20.1119 21.1386 19.1386 22.1119 17.9134 22.6194C17.4037 22.8305 16.8654 22.9181 16.2567 22.9596C15.6647 23 14.9373 23 14.0355 23H14H9.31759C8.36712 23.6317 7.22539 24 6 24C2.68629 24 0 21.3137 0 18C0 16.7746 0.368327 15.6329 1 14.6824V12.4V12.3572C0.99999 11.2734 0.999982 10.3993 1.05782 9.69138C1.11737 8.96253 1.24318 8.32234 1.54497 7.73005C2.02433 6.78924 2.78924 6.02433 3.73005 5.54497C4.32234 5.24318 4.96253 5.11737 5.69138 5.05782C5.95078 5.03662 6.2325 5.0232 6.53869 5.01469ZM18.9643 9.87945C18.9855 10.1905 18.9941 10.5535 18.9976 11H18C16.3431 11 15 12.3431 15 14C15 15.6569 16.3431 17 18 17H18.9976C18.9941 17.4465 18.9855 17.8095 18.9643 18.1206C18.9297 18.6275 18.865 18.9227 18.7716 19.1481C18.4672 19.8831 17.8831 20.4672 17.1481 20.7716C16.9227 20.865 16.6275 20.9297 16.1206 20.9643C15.6047 20.9995 14.9456 21 14 21H11.1971C11.7074 20.1177 12 19.093 12 18C12 14.6863 9.31371 12 6 12C4.90703 12 3.88231 12.2926 3 12.8029V12.4C3 11.2634 3.00078 10.4711 3.05118 9.85424C3.10062 9.24907 3.19279 8.90138 3.32698 8.63803C3.6146 8.07354 4.07354 7.6146 4.63803 7.32698C4.90138 7.19279 5.24907 7.10062 5.85424 7.05118C6.4362 7.00363 7.17434 7.00025 8.21043 7.00002L8.23905 7.00024H14.4732C15.173 7.00126 15.6954 7.00673 16.1206 7.03574C16.6275 7.07033 16.9227 7.135 17.1481 7.22836C17.8831 7.53284 18.4672 8.11687 18.7716 8.85195C18.865 9.07734 18.9297 9.37254 18.9643 9.87945ZM2.79949 15.6002C3.53097 14.6266 4.69217 14 6 14C8.20914 14 10 15.7909 10 18C10 19.3078 9.3734 20.469 8.39981 21.2005C7.73131 21.7028 6.90181 22 6 22C3.79086 22 2 20.2091 2 18C2 17.0982 2.29723 16.2687 2.79949 15.6002ZM18 13C17.4477 13 17 13.4477 17 14C17 14.5523 17.4477 15 18 15H21C21.5523 15 22 14.5523 22 14C22 13.4477 21.5523 13 21 13H20H18ZM8.53033 17.0303C8.82322 16.7374 8.82322 16.2626 8.53033 15.9697C8.23744 15.6768 7.76256 15.6768 7.46967 15.9697L5 18.4393L4.53033 17.9697C4.23744 17.6768 3.76256 17.6768 3.46967 17.9697C3.17678 18.2626 3.17678 18.7374 3.46967 19.0303L4.46967 20.0303C4.76256 20.3232 5.23744 20.3232 5.53033 20.0303L8.53033 17.0303Z" fill="currentColor"/>
        //         </svg>`,
        //   url: '/live-new-pairs'
        // },
        // {
        //   name: 'Banners',
        //   icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M2 7V7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V7" stroke="currentColor" strokeWidth="2"/>
        //         <path d="M8.4 20H15.6C17.8402 20 18.9603 20 19.816 19.564C20.5686 19.1805 21.1805 18.5686 21.564 17.816C22 16.9603 22 15.8402 22 13.6V9H2V13.6C2 15.8402 2 16.9603 2.43597 17.816C2.81947 18.5686 3.43139 19.1805 4.18404 19.564C5.03969 20 6.15979 20 8.4 20Z" stroke="currentColor" strokeWidth="2"/>
        //         <path d="M5 13.1771C5 13.1771 7.78571 12.063 7.78571 14.9272C7.78571 17.7914 11.9643 16.0729 13.3571 13.2088C14.75 10.3447 15.2143 15.9999 18 15.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        //         </svg>`,
        //   url: '/banners'
        // },
        // {
        //   name: 'Coin Explorer',
        //   icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M20 13C20 14.78 19.4722 16.5201 18.4832 18.0001C17.4943 19.4802 16.0887 20.6337 14.4442 21.3149C12.7996 21.9961 10.99 22.1743 9.24419 21.8271C7.49836 21.4798 5.89471 20.6226 4.63604 19.364C3.37737 18.1053 2.5202 16.5016 2.17293 14.7558C1.82567 13.01 2.0039 11.2004 2.68508 9.55585C3.36627 7.91131 4.51983 6.50571 5.99987 5.51677C7.47991 4.52784 9.21997 4 11 4L11 13H20Z" stroke="currentColor" strokeWidth="2"/>
        //         <path d="M22 9.5C22 8.51509 21.806 7.53982 21.4291 6.62987C21.0522 5.71993 20.4997 4.89314 19.8033 4.1967C19.1069 3.50026 18.2801 2.94781 17.3701 2.5709C16.4602 2.19399 15.4849 2 14.5 2L14.5 9.5H22Z" stroke="currentColor" strokeWidth="2"/>
        //         </svg>`,
        //   url: '/coin-explorer'
        // },
        // {
        //   name: 'Premium Access',
        //   icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path fillRule="evenodd" clipRule="evenodd" d="M6.5 1.25C6.75683 1.25 6.9958 1.38142 7.13336 1.5983L10.6334 7.11669C10.7729 7.33667 10.7883 7.61329 10.674 7.84738L9.27345 10.7167C9.13171 11.0071 9.30818 11.3555 9.56649 11.5496C9.97217 11.8545 10.2163 12.3591 10.1584 12.9075L9.26116 21.4075C9.1806 22.1707 8.53692 22.75 7.76945 22.75H5.23056C4.46309 22.75 3.81941 22.1707 3.73884 21.4075L2.84162 12.9075C2.78374 12.3591 3.02783 11.8545 3.43352 11.5496C3.69183 11.3555 3.86829 11.0071 3.72655 10.7167L2.326 7.84738C2.21174 7.61329 2.22713 7.33667 2.36665 7.11669L5.86665 1.5983C6.0042 1.38142 6.24317 1.25 6.5 1.25ZM5.51899 10.9693C5.60282 11.1411 5.77722 11.25 5.96833 11.25H7.03168C7.22279 11.25 7.39718 11.1411 7.48101 10.9693L9.01956 7.81724C9.09573 7.66118 9.08547 7.47677 8.99246 7.33012L8.17224 6.03689C7.90411 5.61413 7.25 5.80407 7.25 6.30469V7.51839C7.25 7.93261 6.91422 8.26839 6.5 8.26839C6.08579 8.26839 5.75 7.93261 5.75 7.51839V6.30469C5.75 5.80407 5.0959 5.61413 4.82776 6.03689L4.00754 7.33012C3.91453 7.47677 3.90427 7.66118 3.98045 7.81724L5.51899 10.9693ZM5.1875 12.75H4.88889C4.59198 12.75 4.36049 13.0072 4.39165 13.3025L5.18332 20.8025C5.21017 21.0569 5.42473 21.25 5.68056 21.25L7.31945 21.25C7.57527 21.25 7.78983 21.0569 7.81668 20.8025L8.60835 13.3025C8.63952 13.0072 8.40802 12.75 8.11111 12.75H7.8125H5.1875Z" fill="currentColor"/>
        //         <path fillRule="evenodd" clipRule="evenodd" d="M18.25 2.00001C18.25 1.77252 18.1468 1.55732 17.9693 1.41498C17.7919 1.27263 17.5594 1.21852 17.3373 1.26787C14.7203 1.84943 13.4074 3.90754 13.1918 5.92011C13.0226 7.49967 13.5293 9.24641 14.7823 10.1958C14.9635 10.3331 15.059 10.5635 14.9966 10.7821L14.6415 12.0248C14.5735 12.2629 14.7523 12.5 15 12.5H15.6886C15.9119 12.5 16.1081 12.352 16.1694 12.1374L16.4621 11.1127C16.5235 10.898 16.7197 10.75 16.9429 10.75H18.0572C18.2804 10.75 18.4766 10.898 18.5379 11.1127L18.8307 12.1374C18.8921 12.352 19.0882 12.5 19.3115 12.5H20C20.2477 12.5 20.4266 12.2629 20.3585 12.0247L19.9631 10.6405C19.9068 10.4435 19.9785 10.2341 20.1308 10.097C21.0454 9.2735 21.3826 8.2497 21.2425 7.26895C21.0798 6.13033 20.2732 5.13382 19.2372 4.78849C18.9315 4.68659 18.7536 4.57611 18.6424 4.47312C18.5372 4.37567 18.459 4.25503 18.3991 4.07533C18.2591 3.65557 18.25 3.05128 18.25 2.00001ZM20.4835 15.0763C20.5366 14.7757 20.3053 14.5 20 14.5H19.4815C19.2389 14.5 19.0313 14.6742 18.9891 14.9131L17.9353 20.8849C17.898 21.0961 17.7145 21.25 17.5001 21.25C17.2857 21.25 17.1022 21.0961 17.0649 20.8849L16.011 14.9131C15.9689 14.6742 15.7613 14.5 15.5187 14.5H15C14.6948 14.5 14.4636 14.7756 14.5166 15.0761L15.6522 21.5107C15.7787 22.2275 16.4015 22.75 17.1293 22.75H17.8709C18.5987 22.75 19.2216 22.2275 19.348 21.5107L20.4835 15.0763ZM19.7576 7.48107C19.8264 7.96316 19.6777 8.59325 18.9075 9.16204C18.8275 9.22108 18.7295 9.25003 18.6301 9.25003H16.2303C16.166 9.25003 16.1018 9.23836 16.0436 9.21098C15.1186 8.77607 14.527 7.53872 14.6833 6.07991C14.7903 5.08102 15.2481 4.10266 16.1075 3.44101C16.3936 3.22075 16.7701 3.4468 16.8153 3.80503C16.8488 4.07027 16.8995 4.32007 16.976 4.54968C17.1036 4.93248 17.3067 5.28059 17.6233 5.57377C17.934 5.86141 18.3186 6.06342 18.7629 6.21152C19.2269 6.36619 19.6702 6.86969 19.7576 7.48107Z" fill="currentColor"/>
        //         </svg>`,
        //   url: '/premium-access'
        // },
        {
          name: 'Trending Channel List',
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.5 1.25C6.75683 1.25 6.9958 1.38142 7.13336 1.5983L10.6334 7.11669C10.7729 7.33667 10.7883 7.61329 10.674 7.84738L9.27345 10.7167C9.13171 11.0071 9.30818 11.3555 9.56649 11.5496C9.97217 11.8545 10.2163 12.3591 10.1584 12.9075L9.26116 21.4075C9.1806 22.1707 8.53692 22.75 7.76945 22.75H5.23056C4.46309 22.75 3.81941 22.1707 3.73884 21.4075L2.84162 12.9075C2.78374 12.3591 3.02783 11.8545 3.43352 11.5496C3.69183 11.3555 3.86829 11.0071 3.72655 10.7167L2.326 7.84738C2.21174 7.61329 2.22713 7.33667 2.36665 7.11669L5.86665 1.5983C6.0042 1.38142 6.24317 1.25 6.5 1.25ZM5.51899 10.9693C5.60282 11.1411 5.77722 11.25 5.96833 11.25H7.03168C7.22279 11.25 7.39718 11.1411 7.48101 10.9693L9.01956 7.81724C9.09573 7.66118 9.08547 7.47677 8.99246 7.33012L8.17224 6.03689C7.90411 5.61413 7.25 5.80407 7.25 6.30469V7.51839C7.25 7.93261 6.91422 8.26839 6.5 8.26839C6.08579 8.26839 5.75 7.93261 5.75 7.51839V6.30469C5.75 5.80407 5.0959 5.61413 4.82776 6.03689L4.00754 7.33012C3.91453 7.47677 3.90427 7.66118 3.98045 7.81724L5.51899 10.9693ZM5.1875 12.75H4.88889C4.59198 12.75 4.36049 13.0072 4.39165 13.3025L5.18332 20.8025C5.21017 21.0569 5.42473 21.25 5.68056 21.25L7.31945 21.25C7.57527 21.25 7.78983 21.0569 7.81668 20.8025L8.60835 13.3025C8.63952 13.0072 8.40802 12.75 8.11111 12.75H7.8125H5.1875Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.25 2.00001C18.25 1.77252 18.1468 1.55732 17.9693 1.41498C17.7919 1.27263 17.5594 1.21852 17.3373 1.26787C14.7203 1.84943 13.4074 3.90754 13.1918 5.92011C13.0226 7.49967 13.5293 9.24641 14.7823 10.1958C14.9635 10.3331 15.059 10.5635 14.9966 10.7821L14.6415 12.0248C14.5735 12.2629 14.7523 12.5 15 12.5H15.6886C15.9119 12.5 16.1081 12.352 16.1694 12.1374L16.4621 11.1127C16.5235 10.898 16.7197 10.75 16.9429 10.75H18.0572C18.2804 10.75 18.4766 10.898 18.5379 11.1127L18.8307 12.1374C18.8921 12.352 19.0882 12.5 19.3115 12.5H20C20.2477 12.5 20.4266 12.2629 20.3585 12.0247L19.9631 10.6405C19.9068 10.4435 19.9785 10.2341 20.1308 10.097C21.0454 9.2735 21.3826 8.2497 21.2425 7.26895C21.0798 6.13033 20.2732 5.13382 19.2372 4.78849C18.9315 4.68659 18.7536 4.57611 18.6424 4.47312C18.5372 4.37567 18.459 4.25503 18.3991 4.07533C18.2591 3.65557 18.25 3.05128 18.25 2.00001ZM20.4835 15.0763C20.5366 14.7757 20.3053 14.5 20 14.5H19.4815C19.2389 14.5 19.0313 14.6742 18.9891 14.9131L17.9353 20.8849C17.898 21.0961 17.7145 21.25 17.5001 21.25C17.2857 21.25 17.1022 21.0961 17.0649 20.8849L16.011 14.9131C15.9689 14.6742 15.7613 14.5 15.5187 14.5H15C14.6948 14.5 14.4636 14.7756 14.5166 15.0761L15.6522 21.5107C15.7787 22.2275 16.4015 22.75 17.1293 22.75H17.8709C18.5987 22.75 19.2216 22.2275 19.348 21.5107L20.4835 15.0763ZM19.7576 7.48107C19.8264 7.96316 19.6777 8.59325 18.9075 9.16204C18.8275 9.22108 18.7295 9.25003 18.6301 9.25003H16.2303C16.166 9.25003 16.1018 9.23836 16.0436 9.21098C15.1186 8.77607 14.527 7.53872 14.6833 6.07991C14.7903 5.08102 15.2481 4.10266 16.1075 3.44101C16.3936 3.22075 16.7701 3.4468 16.8153 3.80503C16.8488 4.07027 16.8995 4.32007 16.976 4.54968C17.1036 4.93248 17.3067 5.28059 17.6233 5.57377C17.934 5.86141 18.3186 6.06342 18.7629 6.21152C19.2269 6.36619 19.6702 6.86969 19.7576 7.48107Z" fill="currentColor"/>
                </svg>`,
          url: '/trading-channel'
        },
      ]
    },
    {
      subtitle: 'Others',
      items: [
        {
          name: 'Terms & Conditions',
          icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 7H11V5H9M10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM9 15H11V9H9V15Z" fill="currentColor"/>
                  </svg>`,
          url: '/terms'
        },
        {
          name: 'Support',
          icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.4 13.5H10.75C14.202 13.5 17 10.702 17 7.25C17 3.798 14.202 1 10.75 1H7.25C3.798 1 1 3.798 1 7.25C1 11.28 3.298 13.69 5.715 15.143C6.928 15.872 8.15 16.343 9.0735 16.6315C9.18717 16.6672 9.296 16.7 9.4 16.73V13.5ZM10.4 18C10.4 18 10.018 17.9355 9.4 17.7685C6.795 17.0625 0 14.525 0 7.25C0 3.246 3.246 0 7.25 0H10.75C14.754 0 18 3.246 18 7.25C18 11.254 14.754 14.5 10.75 14.5H10.4V18Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.8456 3.24101C11.3606 3.58301 11.7486 4.13751 11.7486 4.88101C11.7486 5.67001 11.4306 6.25001 10.9151 6.60501C10.7116 6.74298 10.487 6.84669 10.2501 6.91201V7.67802C10.2501 7.87693 10.171 8.06769 10.0304 8.20834C9.88973 8.349 9.69897 8.42801 9.50006 8.42801C9.30114 8.42801 9.11038 8.349 8.96973 8.20834C8.82907 8.06769 8.75006 7.87693 8.75006 7.67802V6.27951C8.75001 6.08923 8.8223 5.90604 8.95228 5.76706C9.08225 5.62808 9.26019 5.5437 9.45006 5.53101C9.72706 5.51251 9.93706 5.45751 10.0636 5.37001C10.1148 5.33601 10.1562 5.2891 10.1836 5.23401C10.2136 5.17402 10.2486 5.06701 10.2486 4.88051C10.2486 4.72451 10.1876 4.60451 10.0151 4.48951C9.81906 4.35951 9.50406 4.26351 9.12556 4.25151C8.75156 4.23951 8.38806 4.31251 8.12056 4.44201C7.85256 4.57201 7.75406 4.71801 7.72656 4.82551C7.70206 4.92092 7.65902 5.01057 7.59988 5.08934C7.54075 5.16811 7.46667 5.23446 7.38189 5.2846C7.29711 5.33475 7.20329 5.3677 7.10577 5.38158C7.00826 5.39547 6.90896 5.39001 6.81356 5.36552C6.71815 5.34102 6.6285 5.29798 6.54973 5.23884C6.47096 5.17971 6.40461 5.10563 6.35447 5.02085C6.30432 4.93607 6.27137 4.84225 6.25749 4.74473C6.2436 4.64722 6.24907 4.54792 6.27356 4.45251C6.44606 3.78201 6.94756 3.34401 7.46656 3.09251C7.98656 2.84001 8.59806 2.73351 9.17306 2.75201C9.74456 2.77001 10.3546 2.91401 10.8456 3.24101Z" fill="currentColor"/>
                  <path d="M10.5 10.5C10.5 10.7652 10.3946 11.0196 10.2071 11.2071C10.0196 11.3946 9.76522 11.5 9.5 11.5C9.23478 11.5 8.98043 11.3946 8.79289 11.2071C8.60536 11.0196 8.5 10.7652 8.5 10.5C8.5 10.2348 8.60536 9.98043 8.79289 9.79289C8.98043 9.60536 9.23478 9.5 9.5 9.5C9.76522 9.5 10.0196 9.60536 10.2071 9.79289C10.3946 9.98043 10.5 10.2348 10.5 10.5Z" fill="currentColor"/>
                  </svg>`,
          url: '/support'
        },
      ]
    },
  ]

  const mobileMenu = () => {
    const menu = document.querySelector('.layout-left');
    if (menu?.classList.contains('show-menu')) {
      menu.classList.remove('show-menu')
    } else {
      menu?.classList.add('show-menu')
    }
  }
  const router = usePathname();

  return (
    <div className={`border-r border-solid border-[#1D1F26] ${className}`}>
      <div className="bg-[#0F1013] lg:bg-transparent px-6 min-h-[var(--top-height)] flex items-center justify-between border-b border-solid border-[#1D1F26]">
        <Link href="/">
          <Image src="/img/logo.png" alt="logo" width={40} height={40} />
        </Link>
        <button onClick={() => mobileMenu()} className="bg-transparent p-0 border-0 hover:text-[#FF2021] lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-4 xl:p-6 flex flex-col h-[calc(100vh-var(--top-height))] overflow-auto">
        {menuItem.map((item, index) => (
          <div className={index != menuItem.length - 1 ? 'mb-6' : 'mb-0'} key={index}>
            <span className="block text-xs font-semibold text-[#f6f6f6] mb-3 capitalize">{item.subtitle}</span>
            {item.items.map((subItem, index) => (
              <Link onClick={() => mobileMenu()} href={`${subItem.url}`} key={index} className={`${router === subItem.url ? 'text-[#F5F3F5] bg-[#ff2121] bg-opacity-10 border-[#1D1F26]' : 'text-[#898989] border-transparent bg-transparent'} ${index != item.items.length - 1 ? 'mb-5 md:mb-6' : 'mb-0'} flex items-center gap-[10px] border border-solid hover:text-[#F5F3F5] hover:border-[#1D1F26] py-3 px-4 xl:px-[18px] rounded-full text-sm xl:text-base font-normal capitalize`}>
                <span dangerouslySetInnerHTML={{ __html: subItem.icon }}></span>
                <span className="text">{subItem.name}</span>
              </Link>
            ))}
          </div>
        ))}
        {/*<div className="mt-auto">*/}
        {/*  <Link href="/" className="flex mt-6 items-center gap-[10px] text-[#898989] p-3 text-base text-lufga hover:text-[#F5F3F5]">*/}
        {/*    <span dangerouslySetInnerHTML={{ __html: logOut }}></span>*/}
        {/*    Logout*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}