window.mdc.autoInit();

var drawer = new mdc.drawer.MDCPersistentDrawer(document.getElementById('drawer'));
document.getElementById('menu-drawer').addEventListener('click', function () { drawer.open = !drawer.open;
});
