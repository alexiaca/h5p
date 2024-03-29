! function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 3)
}([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = t.curry = function (e) {
            var t = e.length;
            return function n() {
                var i = Array.prototype.slice.call(arguments, 0);
                return i.length >= t ? e.apply(null, i) : function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return n.apply(null, i.concat(e))
                }
            }
        },
        o = (t.compose = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.reduce(function (e, t) {
                return function () {
                    return e(t.apply(void 0, arguments))
                }
            })
        }, t.forEach = i(function (e, t) {
            t.forEach(e)
        }), t.map = i(function (e, t) {
            return t.map(e)
        }), t.filter = i(function (e, t) {
            return t.filter(e)
        })),
        r = (t.some = i(function (e, t) {
            return t.some(e)
        }), t.contains = i(function (e, t) {
            return -1 != t.indexOf(e)
        }));
    t.without = i(function (e, t) {
        return o(function (t) {
            return !r(t, e)
        }, t)
    }), t.inverseBooleanString = function (e) {
        return ("true" !== e).toString()
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createElement = t.toggleClass = t.toggleVisibility = t.show = t.hide = t.removeClass = t.addClass = t.classListContains = t.removeChild = t.querySelectorAll = t.nodeListToArray = t.querySelector = t.appendChild = t.toggleAttribute = t.attributeEquals = t.hasAttribute = t.removeAttribute = t.setAttribute = t.getAttribute = void 0;
    var i = n(0),
        o = t.getAttribute = (0, i.curry)(function (e, t) {
            return t.getAttribute(e)
        }),
        r = t.setAttribute = (0, i.curry)(function (e, t, n) {
            return n.setAttribute(e, t)
        }),
        a = (t.removeAttribute = (0, i.curry)(function (e, t) {
            return t.removeAttribute(e)
        }), t.hasAttribute = (0, i.curry)(function (e, t) {
            return t.hasAttribute(e)
        }), t.attributeEquals = (0, i.curry)(function (e, t, n) {
            return n.getAttribute(e) === t
        }), t.toggleAttribute = (0, i.curry)(function (e, t) {
            var n = o(e, t);
            r(e, (0, i.inverseBooleanString)(n), t)
        }), t.appendChild = (0, i.curry)(function (e, t) {
            return e.appendChild(t)
        }), t.querySelector = (0, i.curry)(function (e, t) {
            return t.querySelector(e)
        }), t.nodeListToArray = function (e) {
            return Array.prototype.slice.call(e)
        }),
        s = (t.querySelectorAll = (0, i.curry)(function (e, t) {
            return a(t.querySelectorAll(e))
        }), t.removeChild = (0, i.curry)(function (e, t) {
            return e.removeChild(t)
        }), t.classListContains = (0, i.curry)(function (e, t) {
            return t.classList.contains(e)
        }), t.addClass = (0, i.curry)(function (e, t) {
            return t.classList.add(e)
        })),
        l = t.removeClass = (0, i.curry)(function (e, t) {
            return t.classList.remove(e)
        }),
        u = t.hide = s("hidden"),
        c = t.show = l("hidden");
    t.toggleVisibility = (0, i.curry)(function (e, t) {
        return (e ? c : u)(t)
    }), t.toggleClass = (0, i.curry)(function (e, t, n) {
        n.classList[t ? "add" : "remove"](e)
    }), t.createElement = function (e) {
        var t = e.tag,
            n = e.id,
            i = e.classes,
            o = e.attributes,
            r = document.createElement(t);
        return n && (r.id = n), i && i.forEach(function (e) {
            r.classList.add(e)
        }), o && Object.keys(o).forEach(function (e) {
            r.setAttribute(e, o[e])
        }), r
    }
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = function () {
            function e() {
                i(this, e)
            }
            return o(e, null, [{
                key: "setElementOpacity",
                value: function (t, n) {
                    e.setOpacity(t, "borderColor", n), e.setOpacity(t, "boxShadow", n), e.setOpacity(t, "background", n)
                }
            }, {
                key: "setOpacity",
                value: function (t, n, i) {
                    function o(e, t) {
                        switch (e) {
                            case "borderColor":
                                return {
                                    borderTopColor: t, borderRightColor: t, borderBottomColor: t, borderLeftColor: t
                                };
                            default:
                                var n = {};
                                return n[e] = t, n
                        }
                    }
                    if ("background" === n) return e.setOpacity(t, "backgroundColor", i), void e.setOpacity(t, "backgroundImage", i);
                    i = void 0 === i ? 1 : i / 100;
                    var r = t.css(n),
                        a = o(n, "");
                    t.css(a);
                    for (var s in a) break;
                    var l = t.css(s);
                    "" !== l && "none" !== l || (l = r), l = e.setAlphas(l, "rgba(", i), l = e.setAlphas(l, "rgb(", i), t.css(o(n, l))
                }
            }, {
                key: "setAlphas",
                value: function (e, t, n) {
                    if (e) {
                        for (var i = e.indexOf(t); - 1 !== i;) {
                            var o = e.indexOf(")", i),
                                r = e.substring(i + t.length, o).split(",");
                            r[3] = void 0 !== r[3] ? parseFloat(r[3]) * n : n, e = e.substring(0, i) + "rgba(" + r.join(",") + e.substring(o, e.length), i = e.indexOf(t, o)
                        }
                        return e
                    }
                }
            }, {
                key: "elementToDraggable",
                value: function (e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n]) {
                            var i = e[n].findElement(t);
                            if (i) return i.draggable = e[n], i
                        }
                }
            }, {
                key: "elementToDropZone",
                value: function (e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n].$dropZone.is(t)) return e[n]
                }
            }, {
                key: "positionToPercentage",
                value: function (e, t) {
                    return {
                        top: 100 * parseInt(t.css("top")) / e.innerHeight() + "%",
                        left: 100 * parseInt(t.css("left")) / e.innerWidth() + "%"
                    }
                }
            }, {
                key: "addHover",
                value: function (t, n) {
                    t.hover(function () {
                        t.addClass("h5p-draggable-hover"), t.parent().hasClass("h5p-dragging") || e.setElementOpacity(t, n)
                    }, function () {
                        t.parent().hasClass("h5p-dragging") || setTimeout(function () {
                            t.removeClass("h5p-draggable-hover"), e.setElementOpacity(t, n)
                        }, 1)
                    }), e.setElementOpacity(t, n)
                }
            }, {
                key: "strip",
                value: function (e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t.textContent || t.innerText || ""
                }
            }]), e
        }();
    t.default = r
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, t, n) {
        var i, o, r = this;
        w++, this.id = this.contentId = t, this.contentData = n, H5P.Question.call(r, "dragquestion"), this.options = y.extend(!0, {}, {
            scoreShow: "Check",
            tryAgain: "Retry",
            grabbablePrefix: "Grabbable {num} of {total}.",
            grabbableSuffix: "Placed in dropzone {num}.",
            dropzonePrefix: "Dropzone {num} of {total}.",
            noDropzone: "No dropzone",
            tipLabel: "Show tip.",
            tipAvailable: "Tip available",
            correctAnswer: "Correct answer",
            wrongAnswer: "Wrong answer",
            feedbackHeader: "Feedback",
            scoreBarLabel: "You got :num out of :total points",
            scoreExplanationButtonLabel: "Show score explanation",
            question: {
                settings: {
                    questionTitle: this.contentData && this.contentData.metadata && this.contentData.metadata.title ? this.contentData.metadata.title : "COMPLETE O NOME COM AS LETRAS QUE ESTÃO FALTANDO.",
                    size: {
                        width: 620,
                        height: 310
                    }
                },
                task: {
                    elements: [],
                    dropZones: []
                }
            },
            overallFeedback: [],
            behaviour: {
                enableRetry: !0,
                enableCheckButton: !0,
                preventResize: !1,
                singlePoint: !1,
                showSolutionsRequiresInput: !0,
                applyPenalties: !0,
                enableScoreExplanation: !0,
                dropZoneHighlighting: "dragging",
                autoAlignSpacing: 2,
                showScorePoints: !0,
                showTitle: !1
            }
        }, e), this.options.behaviour.singlePoint && (this.options.behaviour.enableScoreExplanation = !1), this.draggables = [], this.dropZones = [], this.answered = n && void 0 !== n.previousState && void 0 !== n.previousState.answers && n.previousState.answers.length, this.blankIsCorrect = !0, this.backgroundOpacity = void 0 === this.options.behaviour.backgroundOpacity || "" === this.options.behaviour.backgroundOpacity.trim() ? void 0 : this.options.behaviour.backgroundOpacity, r.$noDropZone = y('<div class="h5p-dq-no-dz" role="button" style="display:none;"><span class="h5p-hidden-read">' + r.options.noDropzone + "</span></div>");
        var a = k(r.draggables, r.dropZones, r.$noDropZone[0]),
            s = function (e) {
                for (var t = 0; t < a.drop.elements.length; t++) a.drop.elements[t].setAttribute("aria-dropeffect", e)
            },
            l = [],
            u = this.options.question.task;
        for (this.correctDZs = [], i = 0; i < u.dropZones.length; i++) {
            l.push(!0);
            var c = u.dropZones[i].correctElements;
            for (o = 0; o < c.length; o++) {
                var d = c[o];
                void 0 === this.correctDZs[d] && (this.correctDZs[d] = []), this.correctDZs[d].push(i)
            }
        }
        this.weight = 1;
        var h = {
            prefix: r.options.grabbablePrefix.replace("{total}", u.elements.length),
            suffix: r.options.grabbableSuffix,
            correctAnswer: r.options.correctAnswer,
            wrongAnswer: r.options.wrongAnswer
        };
        for (i = 0; i < u.elements.length; i++) {
            var p = u.elements[i];
            if (void 0 !== p.dropZones && p.dropZones.length) {
                void 0 !== this.backgroundOpacity && (p.backgroundOpacity = this.backgroundOpacity);
                var g = null;
                n && void 0 !== n.previousState && void 0 !== n.previousState.answers && void 0 !== n.previousState.answers[i] && (g = n.previousState.answers[i]);
                var v = new m.default(p, i, g, h),
                    x = "dragging" === r.options.behaviour.dropZoneHighlighting;
                for (v.on("elementadd", function (e) {
                        a.drag.addElement(e.data)
                    }), v.on("elementremove", function (e) {
                        a.drag.removeElement(e.data), "true" === e.data.getAttribute("aria-grabbed") && (a.drag.firesEvent("select", e.data), e.data.removeAttribute("aria-grabbed"))
                    }), v.on("focus", function (e) {
                        a.drag.setTabbable(e.data), e.data.focus()
                    }), v.on("dragstart", function (e) {
                        x && r.$container.addClass("h5p-dq-highlight-dz"), s(e.data)
                    }), v.on("dragend", function () {
                        x && r.$container.removeClass("h5p-dq-highlight-dz"), s("none")
                    }), v.on("interacted", function () {
                        r.answered = !0, r.triggerXAPIScored(r.getScore(), r.getMaxScore(), "interacted")
                    }), v.on("leavingDropZone", function (e) {
                        r.dropZones[e.data.dropZone].removeAlignable(e.data.$)
                    }), this.draggables[i] = v, o = 0; o < p.dropZones.length; o++) l[p.dropZones[o]] = !1
            }
        }
        this.numDropZonesWithoutElements = 0;
        var E = {
            prefix: r.options.dropzonePrefix.replace("{total}", u.dropZones.length),
            tipLabel: r.options.tipLabel,
            tipAvailable: r.options.tipAvailable
        };
        for (i = 0; i < u.dropZones.length; i++) {
            var A = u.dropZones[i];
            !0 === l[i] && (this.numDropZonesWithoutElements += 1), this.blankIsCorrect && A.correctElements.length && (this.blankIsCorrect = !1), A.autoAlign = {
                enabled: A.autoAlign,
                spacing: r.options.behaviour.autoAlignSpacing,
                size: r.options.question.settings.size
            }, this.dropZones[i] = new b.default(A, i, E), this.dropZones[i].on("elementaligned", function (e) {
                for (var t = e.data, n = 0; n < r.draggables.length; n++) {
                    var i = r.draggables[n];
                    if (i && i.elements && i.elements.length)
                        for (var o = 0; o < i.elements.length; o++) {
                            var a = i.elements[o];
                            if (a && a.$[0] === t[0]) return void(a.position = f.default.positionToPercentage(r.$container, a.$))
                        }
                }
            })
        }
        this.on("resize", r.resize, r), this.on("domChanged", function (e) {
            r.contentId === e.data.contentId && r.trigger("resize")
        }), this.on("enterFullScreen", function () {
            r.$container && (r.$container.parents(".h5p-content").css("height", "100%"), r.trigger("resize"))
        }), this.on("exitFullScreen", function () {
            r.$container && (r.$container.parents(".h5p-content").css("height", "auto"), r.trigger("resize"))
        })
    }
    var r = n(4),
        a = i(r),
        s = n(6),
        l = i(s),
        u = n(7),
        c = i(u),
        d = n(8),
        h = i(d),
        p = n(2),
        f = i(p),
        g = n(9),
        b = i(g),
        v = n(10),
        m = i(v),
        y = H5P.jQuery,
        w = 0;
    o.prototype = Object.create(H5P.Question.prototype), o.prototype.constructor = o, o.prototype.registerDomElements = function () {
        var e = this;
        e.options.behaviour.showTitle && (e.$introduction = y('<p class="h5p-dragquestion-introduction" id="dq-intro-' + w + '">' + e.options.question.settings.questionTitle + "</p>"), e.setIntroduction(e.$introduction));
        var t = "";
        if (void 0 !== this.options.question.settings.background && (t += "h5p-dragquestion-has-no-background"), "always" === e.options.behaviour.dropZoneHighlighting && (t && (t += " "), t += "h5p-dq-highlight-dz-always"), e.setContent(e.createQuestionContent(), {
                class: t
            }), !1 !== H5P.canHasFullScreen && this.options.behaviour.enableFullScreen) {
            var n = function () {
                    H5P.isFullscreen ? H5P.exitFullScreen(e.$container) : H5P.fullScreen(e.$container.parent().parent(), e)
                },
                i = y("<div/>", {
                    class: "h5p-my-fullscreen-button-enter",
                    title: this.options.localize.fullscreen,
                    role: "button",
                    tabindex: 0,
                    on: {
                        click: n,
                        keypress: function (e) {
                            13 !== e.which && 32 !== e.which || (n(), e.preventDefault())
                        }
                    },
                    prependTo: this.$container.parent()
                });
            this.on("enterFullScreen", function () {
                i.attr("class", "h5p-my-fullscreen-button-exit"), i.attr("title", this.options.localize.exitFullscreen)
            }), this.on("exitFullScreen", function () {
                i.attr("class", "h5p-my-fullscreen-button-enter"), i.attr("title", this.options.localize.fullscreen)
            })
        }
        e.registerButtons(), setTimeout(function () {
            e.trigger("resize")
        }, 200)
    }, o.prototype.getXAPIData = function () {
        var e = this.createXAPIEventTemplate("answered");
        return this.addQuestionToXAPI(e), this.addResponseToXAPI(e), {
            statement: e.data.statement
        }
    }, o.prototype.addQuestionToXAPI = function (e) {
        var t = e.getVerifiedStatementValue(["object", "definition"]);
        y.extend(t, this.getXAPIDefinition())
    }, o.prototype.getXAPIDefinition = function () {
        var e = {};
        e.description = {
            "en-US": y("<div>" + this.options.question.settings.questionTitle + "</div>").text()
        }, e.type = "http://adlnet.gov/expapi/activities/cmi.interaction", e.interactionType = "matching", e.source = [];
        for (var t = 0; t < this.options.question.task.elements.length; t++) {
            var n = this.options.question.task.elements[t];
            if (n.dropZones && n.dropZones.length) {
                var i = n.type.params.alt ? n.type.params.alt : n.type.params.text;
                e.source.push({
                    id: "" + t,
                    description: {
                        "en-US": y("<div>" + i + "</div>").text()
                    }
                })
            }
        }
        e.correctResponsesPattern = [""], e.target = [];
        var o = !0;
        for (t = 0; t < this.options.question.task.dropZones.length; t++)
            if (e.target.push({
                    id: "" + t,
                    description: {
                        "en-US": y("<div>" + this.options.question.task.dropZones[t].label + "</div>").text()
                    }
                }), this.options.question.task.dropZones[t].correctElements)
                for (var r = 0; r < this.options.question.task.dropZones[t].correctElements.length; r++) o || (e.correctResponsesPattern[0] += "[,]"), e.correctResponsesPattern[0] += t + "[.]" + this.options.question.task.dropZones[t].correctElements[r], o = !1;
        return e
    }, o.prototype.addResponseToXAPI = function (e) {
        var t = this.getMaxScore(),
            n = this.getScore(),
            i = n == t;
        e.setScoredResult(n, t, this, !0, i), e.data.statement.result.response = this.getUserXAPIResponse()
    }, o.prototype.getUserXAPIResponse = function () {
        var e = this.getUserAnswers();
        return e ? e.filter(function (e) {
            return e.elements.length
        }).map(function (e) {
            return e.elements.filter(function (e) {
                return void 0 !== e.dropZone
            }).map(function (t) {
                return t.dropZone + "[.]" + e.index
            }).join("[,]")
        }).filter(function (e) {
            return void 0 !== e && "" !== e
        }).join("[,]") : ""
    }, o.prototype.getUserAnswers = function () {
        return this.draggables.map(function (e, t) {
            return {
                index: t,
                draggable: e
            }
        }).filter(function (e) {
            return void 0 !== e.draggable && e.draggable.elements
        }).map(function (e) {
            return {
                index: e.index,
                elements: e.draggable.elements
            }
        })
    }, o.prototype.createQuestionContent = function () {
        var e;
        this.$container = y('<div class="h5p-inner" role="application" aria-labelledby="dq-intro-' + w + '"></div>'), void 0 !== this.options.question.settings.background && this.$container.css("backgroundImage", 'url("' + H5P.getPath(this.options.question.settings.background.path, this.id) + '")');
        var t = this.options.question.task;
        for (e = 0; e < t.elements.length; e++) {
            var n = t.elements[e];
            if (void 0 !== n.dropZones && 0 !== n.dropZones.length) this.draggables[e].appendTo(this.$container, this.id);
            else {
                var i = this.addElement(n, "static", e);
                H5P.newRunnable(n.type, this.id, i);
                ! function (e, t) {
                    setTimeout(function () {
                        f.default.setOpacity(e, "background", t.backgroundOpacity)
                    }, 0)
                }(i, n)
            }
        }
        for (this.$noDropZone.appendTo(this.$container), e = 0; e < this.dropZones.length; e++) this.dropZones[e].appendTo(this.$container, this.draggables);
        return this.$container
    }, o.prototype.registerButtons = function () {
        this.options.behaviour.enableCheckButton && this.addSolutionButton(), this.addRetryButton()
    }, o.prototype.addSolutionButton = function () {
        var e = this;
        this.addButton("check-answer", this.options.scoreShow, function () {
            e.answered = !0, e.showAllSolutions(), e.showScore(), e.addExplanation();
            var t = e.createXAPIEventTemplate("answered");
            e.addQuestionToXAPI(t), e.addResponseToXAPI(t), e.trigger(t), (e.$introduction ? e.$introduction : e.$container.children().first()).focus()
        })
    }, o.prototype.addExplanation = function () {
        var e = this,
            t = this.options.question.task,
            n = [];
        t.dropZones.forEach(function (t, i) {
            var o = {
                correct: t.tipsAndFeedback.feedbackOnCorrect,
                incorrect: t.tipsAndFeedback.feedbackOnIncorrect
            };
            if (void 0 !== o.correct || void 0 !== o.incorrect) {
                var r = t.correctElements,
                    a = {};
                e.draggables.forEach(function (e) {
                    e.elements.forEach(function (t) {
                        t.dropZone == i && (a[e.id] = {
                            instance: e,
                            correct: -1 !== r.indexOf("" + e.id)
                        })
                    })
                }), Object.keys(a).forEach(function (e) {
                    var r = a[e],
                        s = f.default.strip(r.instance.type.params.alt || r.instance.type.params.text) || "?",
                        l = f.default.strip(t.label);
                    r.correct && o.correct ? (n.push({
                        correct: l + " + " + s,
                        text: o.correct
                    }), r.instance.setFeedback(o.correct, i)) : !r.correct && o.incorrect && (n.push({
                        correct: l + " + ",
                        wrong: s,
                        text: o.incorrect
                    }), r.instance.setFeedback(o.incorrect, i))
                })
            }
        }), 0 !== n.length && this.setExplanation(n, this.options.feedbackHeader)
    }, o.prototype.addRetryButton = function () {
        var e = this;
        this.addButton("try-again", this.options.tryAgain, function () {
            e.resetTask(), e.showButton("check-answer"), e.hideButton("try-again")
        }, !1)
    }, o.prototype.addElement = function (e, t, n) {
        return y('<div class="h5p-' + t + '" style="left:' + e.x + "%;top:" + e.y + "%;width:" + e.width + "em;height:" + e.height + 'em"></div>').appendTo(this.$container).data("id", n)
    }, o.prototype.resize = function (e) {
        var t = this;
        if (void 0 !== this.$container && this.$container.is(":visible")) {
            t.dropZones.forEach(function (e) {
                e.updateBackgroundOpacity()
            });
            var n = e && e.data && e.data.decreaseSize;
            n || (this.$container.css("height", "99999px"), t.$container.parents(".h5p-standalone.h5p-dragquestion").css("width", ""));
            var i = this.options.question.settings.size,
                o = i.width / i.height,
                r = this.$container.parent(),
                a = r.width() - parseFloat(r.css("margin-left")) - parseFloat(r.css("margin-right")),
                s = t.$container.parents(".h5p-standalone.h5p-dragquestion.h5p-semi-fullscreen");
            if (s.length) {
                s.css("width", ""), n || (t.$container.css("width", "10px"), s.css("width", ""), setTimeout(function () {
                    t.trigger("resize", {
                        decreaseSize: !0
                    })
                }, 200));
                var l = y(window.frameElement);
                if (l) {
                    a = l.parent().width(), s.css("width", a + "px")
                }
            }
            var u = a / o;
            a <= 0 && (a = i.width, u = i.height), this.$container.css({
                width: a + "px",
                height: u + "px",
                fontSize: a / i.width * 16 + "px"
            })
        }
    }, o.prototype.disableDraggables = function () {
        this.draggables.forEach(function (e) {
            e.disable()
        })
    }, o.prototype.enableDraggables = function () {
        this.draggables.forEach(function (e) {
            e.enable()
        })
    }, o.prototype.showAllSolutions = function (e) {
        this.points = 0, this.rawPoints = 0, this.blankIsCorrect && (this.points = 1, this.rawPoints = 1);
        var t;
        !e && this.options.behaviour.showScorePoints && !this.options.behaviour.singlePoint && this.options.behaviour.applyPenalties && (t = new H5P.Question.ScorePoints);
        for (var n = 0; n < this.draggables.length; n++) {
            var i = this.draggables[n];
            void 0 !== i && (e || i.disable(), this.points += i.results(e, this.correctDZs[n], t), this.rawPoints += i.rawPoints)
        }
        this.points < 0 && (this.points = 0), !this.answered && this.blankIsCorrect && (this.points = this.weight), this.options.behaviour.singlePoint && (this.points = this.points === this.calculateMaxScore() ? 1 : 0), e || this.hideButton("check-answer"), this.options.behaviour.enableRetry && !e && this.showButton("try-again"), !this.hasButton("check-answer") || !1 !== this.options.behaviour.enableRetry && this.points !== this.getMaxScore() || this.hideButton("try-again")
    }, o.prototype.showSolutions = function () {
        this.showAllSolutions(), this.showScore(), this.hideButton("check-answer"), this.hideButton("try-again"), this.disableDraggables()
    }, o.prototype.resetTask = function () {
        this.points = 0, this.rawPoints = 0, this.answered = !1, this.enableDraggables(), this.draggables.forEach(function (e) {
            e.resetPosition()
        }), this.showButton("check-answer"), this.hideButton("try-again"), this.removeFeedback(), this.setExplanation()
    }, o.prototype.calculateMaxScore = function () {
        var e = 0;
        if (this.blankIsCorrect) return 1;
        for (var t = this.options.question.task.elements, n = 0; n < t.length; n++) {
            var i = this.correctDZs[n];
            void 0 !== i && i.length && (t[n].multiple ? e += i.length : e++)
        }
        return e
    }, o.prototype.getMaxScore = function () {
        return this.options.behaviour.singlePoint ? this.weight : this.calculateMaxScore()
    }, o.prototype.getScore = function () {
        this.showAllSolutions(!0);
        var e = this.options.behaviour.applyPenalties || this.options.behaviour.singlePoint ? this.points : this.rawPoints;
        return delete this.points, delete this.rawPoints, e
    }, o.prototype.getAnswerGiven = function () {
        return !this.options.behaviour.showSolutionsRequiresInput || this.answered || this.blankIsCorrect
    }, o.prototype.showScore = function () {
        var e = this.calculateMaxScore();
        this.options.behaviour.singlePoint && (e = 1);
        var t = this.options.behaviour.applyPenalties || this.options.behaviour.singlePoint ? this.points : this.rawPoints,
            n = H5P.Question.determineOverallFeedback(this.options.overallFeedback, t / e).replace("@score", t).replace("@total", e),
            i = !(!this.options.behaviour.enableScoreExplanation || !this.options.behaviour.applyPenalties) && this.options.scoreExplanation;
        this.setFeedback(n, t, e, this.options.scoreBarLabel, i, void 0, this.options.scoreExplanationButtonLabel)
    }, o.prototype.getCurrentState = function () {
        for (var e = {
                answers: []
            }, t = 0; t < this.draggables.length; t++) {
            var n = this.draggables[t];
            if (void 0 !== n) {
                for (var i = [], o = 0; o < n.elements.length; o++) {
                    var r = n.elements[o];
                    void 0 !== r && void 0 !== r.dropZone && i.push({
                        x: Number(r.position.left.replace("%", "")),
                        y: Number(r.position.top.replace("%", "")),
                        dz: r.dropZone
                    })
                }
                i.length && (e.answers[t] = i)
            }
        }
        return e
    }, o.prototype.getTitle = function () {
        return H5P.createTitle(this.contentData && this.contentData.metadata && this.contentData.metadata.title ? this.contentData.metadata.title : "Drag and drop")
    };
    var k = function (e, t, n) {
        var i = {
            drag: new a.default([new h.default, new l.default]),
            drop: new a.default([new h.default, new c.default])
        };
        i.drag.useNegativeTabIndex(), i.drop.useNegativeTabIndex();
        var o, r = function () {
            o.draggable.trigger("dragend"), o.element.$.removeClass("h5p-draggable-hover"), f.default.setElementOpacity(o.element.$, o.draggable.backgroundOpacity), -1 !== i.drop.elements.indexOf(n) && (i.drop.removeElement(n), n.style.display = "none");
            for (var e = 0; e < t.length; e++) {
                var r = t[e];
                r.dehighlight(), -1 !== i.drop.elements.indexOf(r.$dropZone[0]) && i.drop.removeElement(r.$dropZone[0])
            }
            if (o.element.$.is(":visible")) o.element.$.focus();
            else {
                var a = o.draggable.elements[o.draggable.elements.length - 1].$;
                i.drag.setTabbable(a[0]), a.focus()
            }
            o = void 0
        };
        return i.drag.on("select", function (a) {
            var s = f.default.elementToDraggable(e, a.element);
            if (o) return void r();
            o = s, o.element.$.addClass("h5p-draggable-hover"), f.default.setElementOpacity(o.element.$, o.draggable.backgroundOpacity), o.draggable.trigger("dragstart", o.draggable.mustCopyElement(o.element) ? "copy" : "move"), i.drop.addElement(n), n.style.display = "block", n.style.left = o.draggable.x + "%", n.style.top = o.draggable.y + "%", n.style.width = o.draggable.width + "em", n.style.height = o.draggable.height + "em";
            for (var l, u = 0; u < t.length; u++) {
                var c = t[u];
                c.accepts(o.draggable, e) && (c.highlight(), i.drop.addElement(c.$dropZone[0]), l && o.element.dropZone !== c.id || (l = c.$dropZone))
            }
            l && (i.drop.setTabbable(l[0]), l.focus())
        }), i.drop.on("select", function (e) {
            if (o) {
                if (e.element === n) return void 0 !== o.element.dropZone && o.element.reset(), void(void 0 !== o && (o.element.$.css({
                    left: o.draggable.x + "%",
                    top: o.draggable.y + "%",
                    width: o.draggable.width + "em",
                    height: o.draggable.height + "em"
                }), o.draggable.updatePlacement(o.element), o.element.$[0].setAttribute("aria-grabbed", "false"), r()));
                var i = f.default.elementToDropZone(t, e.element);
                o.draggable.mustCopyElement(o.element) && o.element.clone(), o.draggable.addToDropZone(o.index, o.element, i.id), o.element.$.css({
                    left: i.x + "%",
                    top: i.y + "%"
                }), -1 === i.getIndexOf(o.element.$) && i.alignables.push(o.element.$), i.autoAlign(), o.element.$[0].setAttribute("aria-grabbed", "false"), r()
            }
        }), i
    };
    H5P.DragQuestion = o
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        a = n(1),
        s = n(0),
        l = n(5),
        u = (0, a.removeAttribute)("tabindex"),
        c = ((0, s.forEach)(u), (0, a.setAttribute)("tabindex", "0")),
        d = (0, a.setAttribute)("tabindex", "-1"),
        h = (0, a.hasAttribute)("tabindex"),
        p = function () {
            function e(t) {
                i(this, e), o(this, (0, l.Eventful)()), this.plugins = t || [], this.elements = [], this.negativeTabIndexAllowed = !1, this.on("nextElement", this.nextElement, this), this.on("previousElement", this.previousElement, this), this.initPlugins()
            }
            return r(e, [{
                key: "addElement",
                value: function (e) {
                    this.elements.push(e), this.firesEvent("addElement", e), 1 === this.elements.length && this.setTabbable(e)
                }
            }, {
                key: "removeElement",
                value: function (e) {
                    this.elements = (0, s.without)([e], this.elements), h(e) && (this.setUntabbable(e), this.elements[0] && this.setTabbable(this.elements[0])), this.firesEvent("removeElement", e)
                }
            }, {
                key: "firesEvent",
                value: function (e, t) {
                    var n = this.elements.indexOf(t);
                    return this.fire(e, {
                        element: t,
                        index: n,
                        elements: this.elements,
                        oldElement: this.tabbableElement
                    })
                }
            }, {
                key: "nextElement",
                value: function (e) {
                    var t = e.index,
                        n = t === this.elements.length - 1,
                        i = this.elements[n ? 0 : t + 1];
                    this.setTabbable(i), i.focus()
                }
            }, {
                key: "setTabbable",
                value: function (e) {
                    (0, s.forEach)(this.setUntabbable.bind(this), this.elements), c(e), this.tabbableElement = e
                }
            }, {
                key: "setUntabbable",
                value: function (e) {
                    this.negativeTabIndexAllowed ? d(e) : u(e)
                }
            }, {
                key: "previousElement",
                value: function (e) {
                    var t = e.index,
                        n = 0 === t,
                        i = this.elements[n ? this.elements.length - 1 : t - 1];
                    this.setTabbable(i), i.focus()
                }
            }, {
                key: "useNegativeTabIndex",
                value: function () {
                    this.negativeTabIndexAllowed = !0, this.elements.forEach(function (e) {
                        e.hasAttribute("tabindex") || d(e)
                    })
                }
            }, {
                key: "initPlugins",
                value: function () {
                    this.plugins.forEach(function (e) {
                        void 0 !== e.init && e.init(this)
                    }, this)
                }
            }]), e
        }();
    t.default = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.Eventful = function () {
        return {
            listeners: {},
            on: function (e, t, n) {
                var i = {
                    listener: t,
                    scope: n
                };
                return this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(i), this
            },
            fire: function (e, t) {
                return (this.listeners[e] || []).every(function (e) {
                    return !1 !== e.listener.call(e.scope || this, t)
                })
            },
            propagate: function (e, t) {
                var n = this;
                e.forEach(function (e) {
                    return t.on(e, function (t) {
                        return n.fire(e, t)
                    })
                })
            }
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = n(1),
        a = n(0),
        s = (0, r.setAttribute)("aria-grabbed"),
        l = (0, r.attributeEquals)("aria-grabbed", "true"),
        u = (0, a.filter)((0, r.hasAttribute)("aria-grabbed")),
        c = (0, a.compose)((0, a.forEach)((0, r.setAttribute)("aria-grabbed", "false")), u),
        d = (0, a.compose)((0, a.some)(l), u),
        h = function () {
            function e() {
                i(this, e)
            }
            return o(e, [{
                key: "init",
                value: function (e) {
                    this.controls = e, this.controls.on("select", this.select, this)
                }
            }, {
                key: "addElement",
                value: function (e) {
                    s("false", e), this.controls.addElement(e)
                }
            }, {
                key: "setAllGrabbedToFalse",
                value: function () {
                    c(this.controls.elements)
                }
            }, {
                key: "hasAnyGrabbed",
                value: function () {
                    return d(this.controls.elements)
                }
            }, {
                key: "select",
                value: function (e) {
                    var t = e.element,
                        n = l(t);
                    this.setAllGrabbedToFalse(), n || s("true", t)
                }
            }]), e
        }();
    t.default = h
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = n(1),
        a = n(0),
        s = (0, r.setAttribute)("aria-dropeffect", "none"),
        l = (0, r.setAttribute)("aria-dropeffect", "move"),
        u = (0, a.filter)((0, r.hasAttribute)("aria-dropeffect")),
        c = (0, a.compose)((0, a.forEach)(l), u),
        d = (0, a.compose)((0, a.forEach)(s), u),
        h = function () {
            function e() {
                i(this, e)
            }
            return o(e, [{
                key: "init",
                value: function (e) {
                    this.controls = e
                }
            }, {
                key: "setAllToMove",
                value: function () {
                    c(this.controls.elements)
                }
            }, {
                key: "setAllToNone",
                value: function () {
                    d(this.controls.elements)
                }
            }]), e
        }();
    t.default = h, h.DropEffect = {
        COPY: "copy",
        MOVE: "move",
        EXECUTE: "execute",
        POPUP: "popup",
        NONE: "none"
    }
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = function () {
            function e() {
                i(this, e), this.selectability = !0
            }
            return o(e, [{
                key: "init",
                value: function (e) {
                    this.boundHandleKeyDown = this.handleKeyDown.bind(this), this.controls = e, this.controls.on("addElement", this.listenForKeyDown, this), this.controls.on("removeElement", this.removeKeyDownListener, this)
                }
            }, {
                key: "listenForKeyDown",
                value: function (e) {
                    e.element.addEventListener("keydown", this.boundHandleKeyDown)
                }
            }, {
                key: "removeKeyDownListener",
                value: function (e) {
                    e.element.removeEventListener("keydown", this.boundHandleKeyDown)
                }
            }, {
                key: "handleKeyDown",
                value: function (e) {
                    switch (e.which) {
                        case 13:
                        case 32:
                            this.select(e.target), e.preventDefault();
                            break;
                        case 37:
                        case 38:
                            this.hasChromevoxModifiers(e) || (this.previousElement(e.target), e.preventDefault());
                            break;
                        case 39:
                        case 40:
                            this.hasChromevoxModifiers(e) || (this.nextElement(e.target), e.preventDefault())
                    }
                }
            }, {
                key: "hasChromevoxModifiers",
                value: function (e) {
                    return e.shiftKey || e.ctrlKey
                }
            }, {
                key: "previousElement",
                value: function (e) {
                    this.controls.firesEvent("previousElement", e)
                }
            }, {
                key: "nextElement",
                value: function (e) {
                    this.controls.firesEvent("nextElement", e)
                }
            }, {
                key: "select",
                value: function (e) {
                    this.selectability && !1 !== this.controls.firesEvent("before-select", e) && (this.controls.firesEvent("select", e), this.controls.firesEvent("after-select", e))
                }
            }, {
                key: "disableSelectability",
                value: function () {
                    this.selectability = !1
                }
            }, {
                key: "enableSelectability",
                value: function () {
                    this.selectability = !0
                }
            }]), e
        }();
    t.default = r
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = n(2),
        a = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r),
        s = H5P.jQuery,
        l = function () {
            function e(t, n, o) {
                i(this, e);
                var r = this;
                H5P.EventDispatcher.call(r), r.id = n, r.showLabel = t.showLabel, r.label = t.label, r.x = t.x, r.y = t.y, r.width = t.width, r.height = t.height, r.backgroundOpacity = t.backgroundOpacity, r.tip = t.tipsAndFeedback.tip || "", r.single = t.single, r.autoAlignable = t.autoAlign, r.alignables = [], r.l10n = o
            }
            return o(e, [{
                key: "appendTo",
                value: function (e, t) {
                    var n = this,
                        i = '<div class="h5p-inner"></div>',
                        o = "";
                    n.showLabel && (i = '<div class="h5p-label">' + n.label + '<span class="h5p-hidden-read"></span></div>' + i, o = " h5p-has-label"), i = '<span class="h5p-hidden-read">' + n.l10n.prefix.replace("{num}", n.id + 1) + "</span>" + i, n.$dropZone = s("<div/>", {
                        class: "h5p-dropzone" + o,
                        tabindex: "-1",
                        title: n.showLabel ? s("<div/>", {
                            html: n.label
                        }).text() : null,
                        role: "button",
                        "aria-disabled": !0,
                        css: {
                            left: n.x + "%",
                            top: n.y + "%",
                            width: n.width + "em",
                            height: n.height + "em"
                        },
                        html: i
                    }).appendTo(e).children(".h5p-inner").droppable({
                        activeClass: "h5p-active",
                        tolerance: "intersect",
                        accept: function (e) {
                            var i = a.default.elementToDraggable(t, e);
                            return !!i && n.accepts(i.draggable, t)
                        },
                        drop: function (e, t) {
                            var i = s(this);
                            a.default.setOpacity(i.removeClass("h5p-over"), "background", n.backgroundOpacity), t.draggable.data("addToZone", n.id), -1 === n.getIndexOf(t.draggable) && n.alignables.push(t.draggable), n.autoAlignable.enabled && n.autoAlign()
                        },
                        over: function () {
                            a.default.setOpacity(s(this).addClass("h5p-over"), "background", n.backgroundOpacity)
                        },
                        out: function () {
                            a.default.setOpacity(s(this).removeClass("h5p-over"), "background", n.backgroundOpacity)
                        }
                    }).end().focus(function () {
                        r instanceof H5P.jQuery && r.attr("tabindex", "0")
                    }).blur(function () {
                        r instanceof H5P.jQuery && r.attr("tabindex", "-1")
                    });
                    var r = H5P.JoubelUI.createTip(n.tip, {
                        tipLabel: n.l10n.tipLabel,
                        tabcontrol: !0
                    });
                    r instanceof H5P.jQuery && s("<span/>", {
                        class: "h5p-dq-tipwrap",
                        "aria-label": n.l10n.tipAvailable,
                        append: r,
                        appendTo: n.$dropZone
                    }), t.forEach(function (e) {
                        var t = e.element.$;
                        e.isInDropZone(n.id) && -1 === n.getIndexOf(t) && n.alignables.push(t)
                    }), n.autoAlignable.enabled && n.autoAlign(), setTimeout(function () {
                        n.updateBackgroundOpacity()
                    }, 0)
                }
            }, {
                key: "updateBackgroundOpacity",
                value: function () {
                    a.default.setOpacity(this.$dropZone.children(".h5p-label"), "background", this.backgroundOpacity), a.default.setOpacity(this.$dropZone.children(".h5p-inner"), "background", this.backgroundOpacity)
                }
            }, {
                key: "accepts",
                value: function (e, t) {
                    var n = this;
                    if (!e.hasDropZone(n.id)) return !1;
                    if (n.single)
                        for (var i = 0; i < t.length; i++)
                            if (t[i] && t[i].isInDropZone(n.id)) return !1;
                    return !0
                }
            }, {
                key: "getIndexOf",
                value: function (e) {
                    for (var t = this, n = 0; n < t.alignables.length; n++)
                        if (t.alignables[n][0] === e[0]) return n;
                    return -1
                }
            }, {
                key: "removeAlignable",
                value: function (e) {
                    var t = this,
                        n = t.getIndexOf(e); - 1 !== n && (t.alignables.splice(n, 1), void 0 === t.autoAlignTimer && t.autoAlignable.enabled && (t.autoAlignTimer = setTimeout(function () {
                        delete t.autoAlignTimer, t.autoAlign()
                    }, 1)))
                }
            }, {
                key: "autoAlign",
                value: function () {
                    for (var e, t, n = this, i = n.$dropZone.parent()[0].getBoundingClientRect(), o = {
                            x: n.autoAlignable.spacing / n.autoAlignable.size.width * 100,
                            y: n.autoAlignable.spacing / n.autoAlignable.size.height * 100
                        }, r = {
                            x: n.x + o.x,
                            y: n.y + o.y
                        }, a = n.$dropZone[0].getBoundingClientRect(), s = {
                            x: a.width - 2 * o.x,
                            y: a.height - 2 * o.y
                        }, l = {
                            x: s.x,
                            y: s.y
                        }, u = 0, c = function () {
                            e.css({
                                left: r.x + "%",
                                top: r.y + "%"
                            }), n.trigger("elementaligned", e);
                            var o = t.width + n.autoAlignable.spacing;
                            l.x -= o, r.x += o / i.width * 100;
                            var a = t.height + n.autoAlignable.spacing;
                            a > u && (u = a)
                        }, d = 0; d < n.alignables.length; d++)
                        if (e = n.alignables[d], t = e[0].getBoundingClientRect(), l.x >= t.width) c();
                        else {
                            if (l.x = s.x, r.x = n.x + o.x, u && (l.y -= u, r.y += u / i.height * 100, u = 0), l.y <= 0) return;
                            c()
                        }
                }
            }, {
                key: "highlight",
                value: function () {
                    this.$dropZone.attr("aria-disabled", "false").children(".h5p-inner").addClass("h5p-active")
                }
            }, {
                key: "dehighlight",
                value: function () {
                    this.$dropZone.attr("aria-disabled", "true").children(".h5p-inner").removeClass("h5p-active")
                }
            }]), e
        }();
    t.default = l
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(2),
        l = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s),
        u = H5P.jQuery,
        c = function (e) {
            function t(e, n, r, a) {
                i(this, t);
                var s = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    l = s;
                if (l.$ = u(l), l.id = n, l.elements = [], l.x = e.x, l.y = e.y, l.width = e.width, l.height = e.height, l.backgroundOpacity = e.backgroundOpacity, l.dropZones = e.dropZones, l.type = e.type, l.multiple = e.multiple, l.l10n = a, r) {
                    l.multiple && l.elements.push({});
                    for (var c = 0; c < r.length; c++) l.elements.push({
                        dropZone: r[c].dz,
                        position: {
                            left: r[c].x + "%",
                            top: r[c].y + "%"
                        }
                    })
                }
                return s
            }
            return r(t, e), a(t, [{
                key: "appendTo",
                value: function (e, t) {
                    var n = this;
                    if (n.elements.length)
                        for (var i = 0; i < n.elements.length; i++) n.attachElement(i, e, t);
                    else n.attachElement(null, e, t)
                }
            }, {
                key: "attachElement",
                value: function (e, t, n) {
                    var i, o = this;
                    null === e ? (i = {}, o.elements.push(i), e = o.elements.length - 1) : i = o.elements[e], u.extend(i, {
                        clone: function () {
                            o.attachElement(null, t, n)
                        },
                        reset: function () {
                            void 0 !== i.dropZone && (o.trigger("leavingDropZone", i), delete i.dropZone), o.multiple && (i.$.remove(), delete o.elements[e], o.trigger("elementremove", i.$[0])), delete i.position
                        }
                    }), i.$ = u("<div/>", {
                        class: "h5p-draggable",
                        tabindex: "-1",
                        role: "button",
                        css: {
                            left: o.x + "%",
                            top: o.y + "%",
                            width: o.width + "em",
                            height: o.height + "em"
                        },
                        appendTo: t,
                        title: o.type.params.title
                    }).on("click", function () {
                        o.trigger("focus", this)
                    }).draggable({
                        revert: function (e) {
                            t.removeClass("h5p-dragging");
                            var n = u(this);
                            return n.data("uiDraggable").originalPosition = {
                                top: o.y + "%",
                                left: o.x + "%"
                            }, o.updatePlacement(i), n[0].setAttribute("aria-grabbed", "false"), o.trigger("dragend"), !e
                        },
                        start: function () {
                            var e = u(this),
                                n = o.mustCopyElement(i);
                            n && i.clone(), e.removeClass("h5p-wrong").detach().appendTo(t), t.addClass("h5p-dragging"), l.default.setElementOpacity(e, o.backgroundOpacity), this.setAttribute("aria-grabbed", "true"), o.trigger("focus", this), o.trigger("dragstart", {
                                element: this,
                                effect: n ? "copy" : "move"
                            })
                        },
                        stop: function () {
                            var n = u(this);
                            i.position = l.default.positionToPercentage(t, n), n.css(i.position);
                            var r = n.data("addToZone");
                            void 0 !== r ? (n.removeData("addToZone"), o.addToDropZone(e, i, r)) : i.reset()
                        }
                    }).css("position", ""), o.element = i, i.position && (i.$.css(i.position), o.updatePlacement(i)), l.default.addHover(i.$, o.backgroundOpacity), H5P.newRunnable(o.type, n, i.$), u('<span class="h5p-hidden-read">' + o.l10n.prefix.replace("{num}", o.id + 1) + "</span>").prependTo(i.$), u('<span class="h5p-hidden-read"></span>').appendTo(i.$), setTimeout(function () {
                        l.default.setElementOpacity(i.$, o.backgroundOpacity)
                    }, 0), o.trigger("elementadd", i.$[0])
                }
            }, {
                key: "setFeedback",
                value: function (e, t) {
                    this.elements.forEach(function (n) {
                        n.dropZone === t && (void 0 === n.$feedback && (n.$feedback = u("<span>", {
                            class: "h5p-hidden-read",
                            appendTo: n.$
                        })), n.$feedback.html(e))
                    })
                }
            }, {
                key: "mustCopyElement",
                value: function (e) {
                    return this.multiple && void 0 === e.dropZone
                }
            }, {
                key: "hasDropZone",
                value: function (e) {
                    for (var t = this, n = 0; n < t.dropZones.length; n++)
                        if (parseInt(t.dropZones[n]) === e) return !0;
                    return !1
                }
            }, {
                key: "addToDropZone",
                value: function (e, t, n) {
                    var i = this;
                    if (i.multiple)
                        for (var o = 0; o < i.elements.length; o++)
                            if (o !== e && void 0 !== i.elements[o] && i.elements[o].dropZone === n) return void 0 !== i.elements[e].dropZone && i.elements[e].dropZone !== n && i.trigger("leavingDropZone", t), t.$.remove(), delete i.elements[e], void i.trigger("elementremove", this.element.$[0]);
                    void 0 !== t.dropZone && t.dropZone !== n && i.trigger("leavingDropZone", t), t.dropZone = n, i.updatePlacement(t), i.trigger("interacted")
                }
            }, {
                key: "updatePlacement",
                value: function (e) {
                    e.$suffix && e.$suffix.remove(), void 0 !== e.dropZone ? (e.$.addClass("h5p-dropped"), l.default.setElementOpacity(e.$, self.backgroundOpacity), e.$suffix = u('<span class="h5p-hidden-read">' + this.l10n.suffix.replace("{num}", e.dropZone + 1) + ". </span>").appendTo(e.$)) : (e.$.removeClass("h5p-dropped").removeClass("h5p-wrong").removeClass("h5p-correct").css({
                        border: "",
                        background: ""
                    }), l.default.setElementOpacity(e.$, this.backgroundOpacity))
                }
            }, {
                key: "resetPosition",
                value: function () {
                    var e = this;
                    this.elements.forEach(function (t) {
                        if (t.$feedback && (t.$feedback.remove(), delete t.$feedback), void 0 !== t.dropZone) {
                            var n = t.$;
                            n.animate({
                                left: e.x + "%",
                                top: e.y + "%"
                            }, function () {
                                e.multiple && (void 0 !== n.dropZone && e.trigger("leavingDropZone", n), n.remove(), e.elements.indexOf(t) >= 0 && delete e.elements[e.elements.indexOf(t)], e.trigger("elementremove", n[0]))
                            }), e.updatePlacement(t)
                        }
                    }), void 0 !== e.element.dropZone && (e.trigger("leavingDropZone", e.element), delete e.element.dropZone), e.updatePlacement(e.element)
                }
            }, {
                key: "findElement",
                value: function (e) {
                    for (var t = this, n = 0; n < t.elements.length; n++)
                        if (void 0 !== t.elements[n] && t.elements[n].$.is(e)) return {
                            element: t.elements[n],
                            index: n
                        }
                }
            }, {
                key: "isInDropZone",
                value: function (e) {
                    for (var t = this, n = 0; n < t.elements.length; n++)
                        if (void 0 !== t.elements[n] && t.elements[n].dropZone === e) return !0;
                    return !1
                }
            }, {
                key: "disable",
                value: function () {
                    for (var e = this, t = 0; t < e.elements.length; t++) {
                        var n = e.elements[t];
                        n && (n.$.draggable("disable"), e.trigger("elementremove", n.$[0]))
                    }
                }
            }, {
                key: "enable",
                value: function () {
                    for (var e = this, t = 0; t < e.elements.length; t++) {
                        var n = e.elements[t];
                        n && (n.$.draggable("enable"), e.trigger("elementadd", n.$[0]))
                    }
                }
            }, {
                key: "results",
                value: function (e, t, n) {
                    var i, o, r, a, s = this,
                        l = 0;
                    if (s.rawPoints = 0, void 0 === t) {
                        for (i = 0; i < s.elements.length; i++) void 0 !== (r = s.elements[i]) && void 0 !== r.dropZone && (!0 !== e && s.markElement(r, "wrong", n), l--);
                        return l
                    }
                    for (i = 0; i < s.elements.length; i++)
                        if (void 0 !== (r = s.elements[i]) && void 0 !== r.dropZone) {
                            for (a = !1, o = 0; o < t.length; o++)
                                if (r.dropZone === t[o]) {
                                    !0 !== e && s.markElement(r, "correct", n), a = !0, s.rawPoints++, l++;
                                    break
                                } a || (!0 !== e && s.markElement(r, "wrong", n), l--)
                        } return l
                }
            }, {
                key: "markElement",
                value: function (e, t, n) {
                    var i = u("<span/>", {
                        class: "h5p-hidden-read",
                        html: this.l10n[t + "Answer"] + ". "
                    });
                    n && (i = i.add(n.getElement("correct" === t))), e.$suffix = e.$suffix.add(i), e.$.addClass("h5p-" + t).append(i), l.default.setElementOpacity(e.$, this.backgroundOpacity)
                }
            }]), t
        }(H5P.EventDispatcher);
    t.default = c
}]);