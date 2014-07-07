function addShipCtrl($scope, $compile) {
    $scope.boardSize = 16;
    $scope.capName = "Monkey D. Luffy";
    var boardSize;
    $scope.currentShip = [];
    $scope.shipList = [];

    // for creating board
    $scope.makeTable = function() {
        $("#board").empty();
        var table = ele(1);
        boardSize = $scope.boardSize;
        var row, td, id = 0;
        for (i = 0; i < boardSize; i++) {
            row = ele(2);
            for (j = 0; j < boardSize; j++) {
                id++;
                td = ele(4);
                td.setAttribute("id", id);
                row.appendChild(td);
            }
            table.appendChild(row);
        }
        $("#board").append(table);
        $compile(table)($scope);// compiling so ng-click would work
        $scope.currentShip = [];
        $scope.shipList = [];
    };

    //shorthand for creating HTML elements
    ele = function(num) {
        if (num === 1)
            return document.createElement('table');
        if (num === 2)
            return document.createElement('tr');
        if (num === 3)
            return document.createElement('td');
        if (num === 4) {
            var td = document.createElement('td');
            var sea = document.createElement('button');
            $(sea).addClass("plot");
            sea.setAttribute("ng-click", "addPoint($event)")
            td.appendChild(sea);
            return td;
        }

        return document.createElement('div');
    };
    
    pointClose= function(point, arry, direction){
        // direction 1- vertical 0-either 2- horizondal
        if(direction===0){
            if((arry[0]-point)%$scope.boardSize===0 || (arry[0]-point)===1)
                return true;
            if((arry[0]-point)%$scope.boardSize===0 || (arry[0]-point)===1)
        }
        return false;
    }

    // make selection possible
    $scope.addPoint = function(event) {
//        alert("hi");
//        alert(event.target.id);
        var button = $(event.target);
        var point = $(button).parent('td').attr('id') ;
        alert("point selected="+point);
        if (button.hasClass('ship')) {
            //code for possible unselection
        } else {
            //code for possible selection
            if ($scope.currentShip.length === 0) {
                $scope.currentShip.push($(button).parent('td').attr('id'));
                alert('$scope.currentShip=' + $scope.currentShip);
            }else if($scope.currentShip.length === 1) {
                if((arry[0]-point)%$scope.boardSize===0 || (arry[0]-point)===1){
                    
                }
            }
        }
        button.toggleClass('ship');
    }
    
    
    
    //Board initialized.
    $scope.makeTable();
}

