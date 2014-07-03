function addShipCtrl($scope) {
    $scope.boardSize = 16;
    var boardSize;

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
    };

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
            sea.setAttribute("ng-click", "showAlert($event)")
            td.appendChild(sea);
            return td;
        }

        return document.createElement('div');
    };

    $scope.showAlert = function(event) {
        alert("hi");
//        alert(event.target.id);
    }

    $scope.makeTable();
}

