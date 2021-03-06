const Backbone = require('backbone');
const UserModel  = require('./model-user.js')
const {SudsModel, SudsCollection}  = require('./model-suds.js')
const STORE = require('./store.js')

const ACTIONS = {
  authenticateUser: function(userDataObj){
     console.log(userDataObj)
     let userMod = new UserModel()
     userMod.set(userDataObj)
     console.log(userMod)


    userMod.save().then(function(serverRes){
      console.log(serverRes)
      location.hash = "suds"
    })
  },

  fetchSudsCollection: function(queryObj){
     const sudsColl = new SudsCollection()
     sudsColl.fetch().then(function(){
        STORE.setStore('currentSuds', sudsColl.models )
     })

  },

  createNewSuds: function(newSudsData){
     const sudsMod = new SudsModel()
     sudsMod.set(newSudsData)
     sudsMod.url = '/input'
     return sudsMod.save().then(function(){
        window.location.hash = "login"
     })
  },




}

module.exports = ACTIONS
