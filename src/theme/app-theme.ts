import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#9B9B9B',
    orange: '#FF9427',

    textPrimary: '#ffffff',
    textSecondary: '#666666',
    background: '#000000'
}

export const globalStyles = StyleSheet.create({
   background: {
        flex: 1,
        backgroundColor: colors.background
   },
   calculatorConrainer:{
    flex:1,
    justifyContent: 'flex-end',
    paddingBottom: 10
   },
   mainResult: {
    color: colors.textPrimary,
    marginBottom: 5,
    fontSize: 70,
    fontWeight: '400',
    textAlign: 'right'
   },
   subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    fontWeight: '300',
    textAlign: 'right'
   },


   containerButtons: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    flexWrap: 'wrap'
   },
   button: {
    width: 80,
    height: 80,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center'
   },
   buttonNormal: {
    width: 80
   },
   buttonLarge: {
    width: 180
   },
   buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500'
   }
})