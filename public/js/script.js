import { handleMobileMenu, handleResize } from "./navigation.mjs";

const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger-lines");
const body = document.querySelector("body");
const navLinks = document.querySelector("nav")

handleMobileMenu(header, hamburger, navLinks, body)
handleResize(header, body, navLinks)