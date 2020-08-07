window.onload=function(){
    var list = document.getElementById("shuffleAndSort");

    function shuffle(items)
    {
        var cached = items.slice(0), temp, i = cached.length, rand;
        while(--i)
        {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }
    function shuffleNodes()
    {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while(i < nodes.length)
        {
            list.appendChild(nodes[i]);
            ++i;
        }
    } 

    function sortNodes()
    {
      var nodes = list.children, i=0;
      nodes = Array.prototype.slice.call(nodes);
      let itemsArr = [];
      for ( var i in nodes){
        if (nodes[i].nodeType == 1) { 
            itemsArr.push(nodes[i]);
        }
      }

      itemsArr.sort(function(a, b) {
        return a.innerHTML == b.innerHTML
                ? 0
                : (a.innerHTML > b.innerHTML ? 1 : -1);
      });

      for (i = 0; i < itemsArr.length; ++i) {
        list.appendChild(itemsArr[i]);
      }

    } 

    document.getElementById("shuffle").onclick = shuffleNodes;
    document.getElementById("sort").onclick = sortNodes;
    
    } 