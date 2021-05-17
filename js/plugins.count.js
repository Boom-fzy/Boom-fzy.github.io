(function () {
    window.EvtDispatcher || (window.EvtDispatcher = function () {
        this.handles = {}
    }, EvtDispatcher.prototype = {
        constructor: EvtDispatcher,
        addEvent: function (a, b) {
            this.handles[a] = this.handles[a] || [];
            this.handles[a].push(b)
        },
        fireEvent: function (a) {
            a.target || (a.target = this);
            var b = this.handles[a.type];
            if (b instanceof Array)
                for (var c = 0, d = b.length; c < d; c++) b[c](a)
        },
        removeEvent: function (a, b) {
            if (!this.handles[a] || !this.handles[a] instanceof Array) return !1;
            var c = this.handles[a],
                d, e;
            d = 0;
            for (e = c.length; d < e; d++)
                if (c[d] ===
                    b) {
                    c.splice(d, 1);
                    break
                }
            0 === b.length && delete this.handles[a]
        }
    }, window.evtDispatcher = new EvtDispatcher);
    ({
        init: function () {
            this.doEvent()
        },
        doEvent: function () {
            var a = this;
            evtDispatcher.addEvent("public.jsonData", function (b) {
                a.outputCount(b.json)
            })
        },
        outputCount: function (a) {
            var b = document,
                c = "undefined" == typeof a.topicCount ? 0 : a.topicCount;
            a = "undefined" == typeof a.partiCount ? 0 : a.partiCount;
            try {
                console.warn("changyan_count_unit11", c)
            } catch (d) {}
            var e = b.getElementById("changyan_count_unit"),
                f = b.getElementById("changyan_parti_unit"),
                g = b.getElementById("SOHUCS"),
                b = b.createElement("a");
            e && (e.href = "javascript:void(0);", e.onclick = function () {
                changyanjQuery(window).scrollTop(changyanjQuery("#article_info_sohu").offset().top - changyanjQuery(window).height() + 180)
            });
            f && (f.href = "javascript:void(0);", f.onclick = function () {
                changyanjQuery(window).scrollTop(changyanjQuery("#article_info_sohu").offset().top - changyanjQuery(window).height() + 180)
            });
            b.id = "changyan_area";
			if (g) {
				g.parentNode.insertBefore(b, g);
			}
            e && (e.innerHTML = c);
            f && (f.innerHTML = a)
        }
    }).init()
})();