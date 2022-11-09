export const state = () => ({
  usersSignIn: [],
  userSignInProfile: [],
  tasks:[
   
  ]
})
export const getters = {
  usersSignIn: state => state.usersSignIn,
  usersSignOut: state => state.usersSignOut,
  userSignInProfile: state => state.userSignInProfile,
  tasks:state=>state.tasks
}
export const mutations = {
  ADD_TASK(state,task){
state.tasks=[{content:task,done:false},...state.tasks]
  },
  REMOVE_TASK(state,task){
state.tasks.splice(state.tasks.indexOf(task),1)
  },
 
  users_Sign_In(state, usersSignIn) {
    state.usersSignIn = usersSignIn
  },
  users_Sign_Out(state, usersSignOut) {
    state.usersSignOut = usersSignOut
  },
  getuserSendProfile(state, userSignInProfile) {
    state.userSignInProfile = userSignInProfile
  }
}
export const actions = {
  getUsersSignOut({ commit }) {
    const api = '/user-accounts/sign-out'
    const data = this.$axios.post(api).then(
      commit('users_Sign_Out', data.data))
  },

  getUsersSignIn({ commit }) {
    this.$axios.post('/user-accounts/sign-in', {
      username: '0078896290',
    password: 123456
    }).then(res => {
      res.data.accessToken
      console.log(res.data.accessToken);
      commit('users_Sign_In')
      localStorage.setItem('token', res.data.accessToken)
    }).catch(error => {
      alert(error)
      console.log(error)    
    })
  },
  addTask({commit},task){
    this.$axios.get('https://fakestoreapi.com/products/').then(res => {
      res.data
      console.log(res.data[0]);
      commit('ADD_TASK',task,res.data[0])
       
    }).catch(error => {
      console.log(error)    
    })
  },
  getUserSendLogin({ commit }) {
    this.$axios.get('user-accounts/profile').then(res => {
      console.log(res.data);
      commit('getuserSendProfile',res.data)
       
    }).catch(error => {
      console.log(error)    
    })
  },
}
