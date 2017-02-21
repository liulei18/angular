
(function(angular){
	//注册一个新模块
	angular.module('app.services.main',[])
		.service('MainService',['$window',function($window){

			var storage=$window.localStorage;

			var todos=storage['my_todo_list']?JSON.parse(storage['my_todo_list']):[];

			// var todos = [{
		 //      id: 0.123,
		 //      text: '学习',
		 //      completed: false
		 //    }, {
		 //      id: 0.22,
		 //      text: '睡觉',
		 //      completed: false
		 //    }, {
		 //      id: 0.232,
		 //      text: '打豆豆',
		 //      completed: true
		 //    }];

		    // 控制私有字段的访问权限
		    this.get =function(){
		    	return todos;
		    }

		    // [1,2,3,4,5]
		    // 获取唯一ID
		    function getId() {
		      var id = Math.random(); // 1 2
		      for (var i = 0; i < todos.length; i++) {
		        if (todos[i].id === id) {
		          id = getId();
		          break;
		        }
		      }
		      return id;
		    }

		    this.save= function (){
		    	console.log('调用save方法：');
		    	console.log(JSON.stringify(todos));
		    	storage['my_todo_list']=JSON.stringify(todos);
		    }

			//业务逻辑都必须出现在服务中(专门定义业务逻辑)
			// 添加todo
		    this.add = function(text) {
		      todos.push({
		      	id:getId(),
		      	text:text,
		      	completed:false
		      });
		      this.save();
		    };


		    // 处理删除
		    this.remove = function(id) {
		    	console.log("id="+id);
		        for (var i = 0; i < todos.length; i++) {
		          if (todos[i].id === id) {
		            todos.splice(i, 1);
		            console.log(888);
		            break;
		          }
		        }
		        console.log(1);
		        this.save();
		        // storage['my_todo_list']=JSON.stringify(todos);
		        console.log(2);
	      	};

		    // 清空已完成
		    this.clearCompleted = function() {
		     	var result=[];
		     	for(var i=0;i<todos.length;i++){
		     		if(!todos[i].completed){
		     			result.push(todos[i]);
		     		}
		     	}
		     	//此时我们将todos指向了一个新的地址
		     	todos=result;
		     	this.save();
		     	return todos;
		    };

		    // 是否有已经完成的
		    this.existCompleted = function() {
		     	for(var i=0;i<todos.length;i++){
		     		if(todos[i].completed){
		     			return true;
		     		}
		     	}
		     	return false;
		    };

		    //更新 
		   	this.update=function(id,target){
		   		this.save();
		   	}

		    var now = true;
		    this.toggleAll = function() {
		      for(var i=0;i<todos.length;i++){
		      	todos[i].completed=now;
		      }
		      now=!now;
		      this.save();
		    }
		}]);			
})(angular);