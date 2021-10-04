const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《UNIX编程导论》',
        date:'2005-9',
        price:59.00,
        count:1
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2010-9',
        price:39.00,
        count:1
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2020-9',
        price:125.00,
        count:1
      },
    ]
  },
  computed:{
totalprice(){
  let num=0;
    for(let e of this.books){
num+=e.price*e.count
    }
return  num
}
  },
  methods:{
    dec(index){
      console.log(index);
      this.books[index].count--
    },
    add(index){
      this.books[index].count++
    },
    removebtn(index){
this.books.splice(index,1)
    }
  },
  // 过滤器
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  }
})