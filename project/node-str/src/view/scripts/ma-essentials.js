var data = data || {} 

data.css = {
    height: function(object, value){
        document.querySelector(object).style.height = value;
    },
    maxHeight: function(object, value){
        document.querySelector(object).style.maxHeight = value;
    },
    width: function(object, value){
        document.querySelector(object).style.width = value;
    },
    maxWidth: function(object, value){
        document.querySelector(object).style.maxWidth = value;
    },
    float: function(object, value){
        document.querySelector(object).style.float = value;
    },
    position: function(object, value){
        document.querySelector(object).style.position = value;
    },
    top: function(object, value){
        document.querySelector(object).style.top = value;
    },
    left: function(object, value){
        document.querySelector(object).style.left = value;
    },
    right: function(object, value){
        document.querySelector(object).style.right = value;
    },
    bottom: function(object, value){
        document.querySelector(object).style.bottom = value;
    },
    opacity: function(object, value){
        document.querySelector(object).style.opacity = value;
    },
    visibility: function(object, value){
        document.querySelector(object).style.visibility = value;
    },
    display: function(object, value){
        document.querySelector(object).style.display = value;
    },
    zIndex: function(object, value){
        document.querySelector(object).style.zIndex = value;
    },
    margin: function(object, value){
        document.querySelector(object).style.margin = value;
    },
    marginTop: function(object, value){
        document.querySelector(object).style.marginTop = value;
    },
    padding: function(object, value){
        document.querySelector(object).style.padding = value;
    },
    overflow: function(object, value){
        document.querySelector(object).style.overflow = value;
    },
    overflowY: function(object, value){
        document.querySelector(object).style.overflowY = value;
    },
    color: function(object, value){
        document.querySelector(object).style.color = value;
    },
    border: function(object, value){
        document.querySelector(object).style.border = value;
    },
    borderBottom: function(object, value){
        document.querySelector(object).style.borderBottom = value;
    },
    background: function(object, value){
        document.querySelector(object).style.background = value;
    },
    backgroundImage: function(object, value){
        document.querySelector(object).style.backgroundImage = value;
    },
    backgroundColor: function(object, value){
        document.querySelector(object).style.backgroundColor = value;
    },
    listStyleImage: function(object, value){
        document.querySelector(object).style.listStyleImage = value;
    },
    cursor: function(object, value){
        document.querySelector(object).style.cursor = value;
    },
    transition: function(object, value) {
        document.querySelector(object).style.webkitTransition = value;
        document.querySelector(object).style.mozTransition = value;
        document.querySelector(object).style.oTransition = value;
        document.querySelector(object).style.Transition = value;
    },
    transform: function(object, value) {
        document.querySelector(object).style.webkitTransform = value;
        document.querySelector(object).style.mozTransform = value;
        document.querySelector(object).style.oTransform = value;
        document.querySelector(object).style.transform = value;
    }
}