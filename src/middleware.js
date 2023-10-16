export { default } from "next-auth/middleware"


// which route i need to protected . by user 
export const config = { matcher: ["/contact"] }