// index.js
// 获取应用实例
const app = getApp()

Page({
  data:{
    num:"",
  },
  num :function(e){
    this.num=Number(e.detail.value)
  },
  delBtn:function(){

  },
  numBtn:function(e){
    var num=e.target.dataset.val;
    if(this.isClear||this.data.num=="0"){
      this.isClear=false;
      this.setData({
        num:num
      });
    }else{
      this.setData({num:this.data.num+num})
    }
  },
  opBtn:function(e){
    var op=this.data.op;
    var num=Number(this.data.num);
    this.setData({
      op:e.target.dataset.val
    });
    if(this.isClear){
      return;
    }
    this.isClear=true;
    if(this.result==null){
      this.result=num;
      return;
    }
    if(op == "+"){
      this.result=this.result+num;
    }else if(op == "-"){
      this.result=this.result-num;
    }else if(op == "×"){
      this.result=this.result*num;
    }else if(op == "÷"){
      this.result=this.result/num;
    }else if(op == "%"){
      this.result=this.result%num;
    }
    this.setData({
      num:this.result
    })
  },
  dotBtn:function(e){
    if(this.isClear){
      this.setData({num:"0"});
      this.isClear=false;
      return;
      }if(this.data.num.indexOf(".")>0){
        return;
    }
    this.setData({
      num:this.data.num+"."
    });
  },
  delBtn:function(e){
    var num=this.data.num.substr(0,this.fata.num.length-1);
    this.setData({
      num:num==""?"0" :num
    });
  },
  resetBtn:function(e){
    this.result=null;
    this.isClear=true;
    this.setData({
      num:'0',
      op:''
    });
  },
  

})
