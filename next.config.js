/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
  }
   
module.exports = nextConfig
module.exports = {
    async redirects(){
        return [
        //     basic redirect
    //         { source: '/meals',
    //         destination: '/meals',
    //         permanent : true
    //     },
    //     { source: '/community',
    //     destination: '/community',
    //     permanent : true
    // },
        // wildcard path matching
        // { source: '/meals/:mealslug',
        //     destination: '/:mealslug',
        //     permanent : true
        // }
        ]
    }
}