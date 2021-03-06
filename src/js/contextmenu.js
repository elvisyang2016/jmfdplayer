class ContextMenu {
    constructor (player) {

        this.player = player;
        this.shown = false;
        this.menuHeight = this.player.template.menu.offsetHeight;
        Array.prototype.slice.call(this.player.template.menuItem).forEach((item, index) => {
            if (this.player.options.contextmenu[index].click) {
                item.addEventListener('click', () => {
                    this.player.options.contextmenu[index].click(this.player);
                    this.hide();
                });
            }
        });

        this.player.container.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            if (this.shown) {
                this.hide();
                return;
            }

            const event = e || window.event;
            event.preventDefault();

            const clientRect = this.player.container.getBoundingClientRect();
            this.show(event.clientX - clientRect.left, event.clientY - clientRect.top);

            this.player.template.mask.addEventListener('click', () => {
                this.hide();
            });
            this.player.template.mask.addEventListener('contextmenu', () => {
                this.hide();
                return;
            });
        }, false);
    }

    show (x, y) {
        this.player.template.menu.classList.add('dplayer-menu-show');

        const clientRect = this.player.container.getBoundingClientRect();
        if (x + this.player.template.menu.offsetWidth >= clientRect.width) {
            this.player.template.menu.style.right = clientRect.width - x + 'px';
            this.player.template.menu.style.left = 'initial';
        }
        else {
            this.player.template.menu.style.left = x + 'px';
            this.player.template.menu.style.right = 'initial';
        }

        if (y + this.player.template.menu.offsetHeight >= clientRect.height) {
            this.player.template.menu.style.bottom = clientRect.height - y + 'px';
            if (parseFloat(this.player.template.menu.style.bottom) + this.menuHeight > clientRect.height) {
                this.player.template.menu.style.bottom = 0 + 'px';
            }
            this.player.template.menu.style.top = 'initial';
        }
        else {
            this.player.template.menu.style.top = y + 'px';
            if (parseFloat(this.player.template.menu.style.top) + this.menuHeight > clientRect.height) {
                this.player.template.menu.style.top = 0 + 'px';
            }
            this.player.template.menu.style.bottom = 'initial';
        }
        this.player.template.mask.classList.add('dplayer-mask-show');
        this.shown = true;
        this.player.events.trigger('contextmenu_show');
    }

    hide () {
        this.player.template.mask.classList.remove('dplayer-mask-show');
        this.player.template.menu.classList.remove('dplayer-menu-show');

        this.shown = false;
        this.player.events.trigger('contextmenu_hide');
    }
}

export default ContextMenu;
