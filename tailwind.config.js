let uno ='#FFFFFF'
let dos ='#E5E5E5'
let tres ='#FCA311'
let cuatro ='#14213D'
let cinco ='#000000'


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //textColor: theme => theme('colors'),
    textColor: (theme) => ({
      ...theme("colors"),
      uno: uno,
      dos: dos,
      tres: tres,
      cuatro: cuatro,
      cinco: cinco,
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      uno: uno,
      dos: dos,
      tres: tres,
      cuatro: cuatro,
      cinco: cinco,

    }),
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
       uno: uno,
       dos: dos,
       tres: tres,
       cuatro: cuatro,
       cinco: cinco,
     })
  },
  extend: {},
  variants: {
    extend: {
      translate: ['hover', 'group-hover'],
      overflow: ["hover"],
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
//https://coolors.co/000000-14213d-fca311-e5e5e5-ffffff