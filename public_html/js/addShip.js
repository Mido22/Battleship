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

    // adding your selected ship to list.
    $scope.addShip = function() {
        if ($scope.currentShip.length === 0) {
            alert("Sorry, our radar cannot detect your well hidden sub...");
        } else if ($scope.currentShip.length === 1) {
            alert("Sorry, our science has not advanced enough to let us make one man submarine... ");
        } else {
            $scope.shipList.push($scope.currentShip);
            $.each($scope.currentShip, function(i, val) {
                $('#'+val).children('button').removeClass('ship');                
            });
            $scope.currentShip=[];
        }
    }

    // make selection possible
    $scope.addPoint = function(event) {
        var button = $(event.target);
        var point = $(button).parent('td').attr('id');
        if (button.hasClass('ship')) {
            //code for possible unselection
            if ($scope.currentShip[0] === point) {
                $scope.currentShip.shift();
                button.removeClass('ship');
            }

            if ($scope.currentShip[$scope.currentShip.length - 1] === point) {
                $scope.currentShip.pop();
                button.removeClass('ship');

            }
            //code for possible unselection
        } else {
            //code for possible selection
            if ($scope.currentShip.length === 0) {
                $scope.currentShip.push($(button).parent('td').attr('id'));
                button.addClass('ship');
            } else if ($scope.currentShip.length === 1) {
                if (($scope.currentShip[0] - point) === $scope.boardSize || ($scope.currentShip[0] - point) === 1) {
                    $scope.currentShip.unshift(point);
                    button.addClass('ship');
                }
                if ((point - $scope.currentShip[0]) === $scope.boardSize || (point - $scope.currentShip[0]) === 1) {
                    $scope.currentShip.push(point);
                    button.addClass('ship');
                }
            } else {
                if (($scope.currentShip[0] - point) === $scope.currentShip[1] - $scope.currentShip[0]) {
                    $scope.currentShip.unshift(point);
                    button.addClass('ship');
                }
                if ((point - $scope.currentShip[$scope.currentShip.length - 1]) === $scope.currentShip[1] - $scope.currentShip[0]) {
                    $scope.currentShip.push(point);
                    button.addClass('ship');
                }
            }
            //code for possible selection
        }
    }



    //Board initialized.
    $scope.makeTable();
}

