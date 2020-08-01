function css_browser_selector(t) {
    var e = t.toLowerCase(), i = function (t) {
        return e.indexOf(t) > -1
    }, n = "gecko", a = "webkit", o = "safari", s = "opera", r = "mobile", l = document.documentElement, u = [!/opera|webtv/i.test(e) && /msie\s(\d)/.test(e) ? "ie ie" + RegExp.$1 : i("firefox/2") ? n + " ff2" : i("firefox/3.5") ? n + " ff3 ff3_5" : i("firefox/3.6") ? n + " ff3 ff3_6" : i("firefox/3") ? n + " ff3" : i("gecko/") ? n : i("opera") ? s + (/version\/(\d+)/.test(e) ? " " + s + RegExp.$1 : /opera(\s|\/)(\d+)/.test(e) ? " " + s + RegExp.$2 : "") : i("konqueror") ? "konqueror" : i("blackberry") ? r + " blackberry" : i("android") ? r + " android" : i("chrome") ? a + " chrome" : i("iron") ? a + " iron" : i("applewebkit/") ? a + " " + o + (/version\/(\d+)/.test(e) ? " " + o + RegExp.$1 : "") : i("mozilla/") ? n : "", i("j2me") ? r + " j2me" : i("iphone") ? r + " iphone" : i("ipod") ? r + " ipod" : i("ipad") ? r + " ipad" : i("mac") ? "mac" : i("darwin") ? "mac" : i("webtv") ? "webtv" : i("win") ? "win" + (i("windows nt 6.0") ? " vista" : "") : i("freebsd") ? "freebsd" : i("x11") || i("linux") ? "linux" : "", "js"];
    return c = u.join(" "), l.className += " " + c, c
}
function checkDay(t, e, i) {
    var n = !1;
    return t >= 1 && ((4 == e || 6 == e || 9 == e || 11 == e) && t <= 30 && (n = !0), (1 == e || 3 == e || 5 == e || 7 == e || 8 == e || 10 == e || 12 == e) && t <= 31 && (n = !0), 2 == e && (t <= 28 ? n = !0 : 29 == t && (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) && (n = !0))), n
}
function hasClass(t, e) {
    return (" " + t.className + " ").indexOf(" " + e + " ") > -1
}
function phoneformat(t) {
    var e = "";
    for (phonenumber = t.val(), place = 0; place <= t.val().length; place++)e += phonenumber.charAt(place).replace(/\D*/, "");
    return 10 == e.length ? (t.val("(" + e.substring(0, 3) + ")" + e.substring(3, 6) + "-" + e.substring(6, e.length)), alert(phonenumber), !0) : 0 == e.length ? (t.val(""), !1) : (t.select(), !1)
}
function hasClass(t, e) {
    return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
}
function addClass(t, e) {
    hasClass(t, e) || (t.className += " " + e)
}
function removeClass(t, e) {
    if (hasClass(t, e)) {
        var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
        t.className = t.className.replace(i, " ")
    }
}
function get_error_label(t, e) {
    return "radio" == jQuery(e).attr("type") ? "" : 0 == jQuery(t).siblings("label").length ? "" : jQuery(t).siblings("label").text() + ": "
}
function gformBindFormatPricingFields() {
    jQuery(".ginput_amount, .ginput_donation_amount").bind("change", function () {
        gformFormatPricingField(this)
    }), jQuery(".ginput_amount, .ginput_donation_amount").each(function () {
        gformFormatPricingField(this)
    })
}
function Currency(t) {
    this.currency = t, this.toNumber = function (t) {
        return this.isNumeric(t) ? parseFloat(t) : gformCleanNumber(t, this.currency.symbol_right, this.currency.symbol_left, this.currency.decimal_separator)
    }, this.toMoney = function (t, e) {
        if (e = e || !1, e || (t = gformCleanNumber(t, this.currency.symbol_right, this.currency.symbol_left, this.currency.decimal_separator)), t === !1)return "";
        t += "", negative = "", "-" == t[0] && (t = parseFloat(t.substr(1)), negative = "-"), money = this.numberFormat(t, this.currency.decimals, this.currency.decimal_separator, this.currency.thousand_separator), "0.00" == money && (negative = "");
        var i = this.currency.symbol_left ? this.currency.symbol_left + this.currency.symbol_padding : "", n = this.currency.symbol_right ? this.currency.symbol_padding + this.currency.symbol_right : "";
        return money = negative + this.htmlDecode(i) + money + this.htmlDecode(n), money
    }, this.numberFormat = function (t, e, i, n, a) {
        var a = "undefined" == typeof a;
        t = (t + "").replace(",", "").replace(" ", "");
        var o = isFinite(+t) ? +t : 0, s = isFinite(+e) ? Math.abs(e) : 0, r = "undefined" == typeof n ? "," : n, l = "undefined" == typeof i ? "." : i, c = "", u = function (t, e) {
            var i = Math.pow(10, e);
            return "" + Math.round(t * i) / i
        };
        return "0" == e ? (o += 1e-10, c = ("" + Math.round(o)).split(".")) : -1 == e ? c = ("" + o).split(".") : (o += 1e-10, c = u(o, s).split(".")), c[0].length > 3 && (c[0] = c[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, r)), a && (c[1] || "").length < s && (c[1] = c[1] || "", c[1] += new Array(s - c[1].length + 1).join("0")), c.join(l)
    }, this.isNumeric = function (t) {
        return gformIsNumber(t)
    }, this.htmlDecode = function (t) {
        var e, i, n = t, a = n.match(/&#[0-9]{1,5};/g);
        if (null != a)for (var o = 0; o < a.length; o++)i = a[o], e = i.substring(2, i.length - 1), n = e >= -32768 && 65535 >= e ? n.replace(i, String.fromCharCode(e)) : n.replace(i, "");
        return n
    }
}
function gformCleanNumber(t, e, i, n) {
    var a = "", o = "", s = "", r = !1;
    t += " ", t = t.replace(/&.*?;/g, ""), t = t.replace(e, ""), t = t.replace(i, "");
    for (var l = 0; l < t.length; l++)s = t.substr(l, 1), parseInt(s) >= 0 && parseInt(s) <= 9 || s == n ? a += s : "-" == s && (r = !0);
    for (var l = 0; l < a.length; l++)s = a.substr(l, 1), s >= "0" && "9" >= s ? o += s : s == n && (o += ".");
    return r && (o = "-" + o), !!gformIsNumber(o) && parseFloat(o)
}
function gformGetDecimalSeparator(t) {
    var e;
    switch (t) {
        case"currency":
            var i = new Currency(gf_global.gf_currency_config);
            e = i.currency.decimal_separator;
            break;
        case"decimal_comma":
            e = ",";
            break;
        default:
            e = "."
    }
    return e
}
function gformIsNumber(t) {
    return !isNaN(parseFloat(t)) && isFinite(t)
}
function gformIsNumeric(t, e) {
    switch (e) {
        case"decimal_dot":
            var i = new RegExp("^(-?[0-9]{1,3}(?:,?[0-9]{3})*(?:.[0-9]+)?)$");
            return i.test(t);
        case"decimal_comma":
            var i = new RegExp("^(-?[0-9]{1,3}(?:.?[0-9]{3})*(?:,[0-9]+)?)$");
            return i.test(t)
    }
    return !1
}
function gformDeleteUploadedFile(t, e, i) {
    var n = jQuery("#field_" + t + "_" + e), a = jQuery(i).parent().index();
    n.find(".ginput_preview").eq(a).remove(), n.find('input[type="file"]').removeClass("gform_hidden"), n.find(".ginput_post_image_file").show(), n.find('input[type="text"]').val("");
    var o = jQuery("#gform_uploaded_files_" + t).val();
    if (o) {
        var s = jQuery.secureEvalJSON(o);
        if (s) {
            var r = "input_" + e, l = n.find("#gform_multifile_upload_" + t + "_" + e);
            if (l.length > 0) {
                s[r].splice(a, 1);
                var c = l.data("settings"), u = c.gf_vars.max_files;
                jQuery("#" + c.gf_vars.message_id).html(""), s[r].length < u && gfMultiFileUploader.toggleDisabled(c, !1)
            } else s[r] = null;
            jQuery("#gform_uploaded_files_" + t).val(jQuery.toJSON(s))
        }
    }
}
function gformIsHidden(t) {
    return "none" == t.parents(".gfield").not(".gfield_hidden_product").css("display")
}
function gformCalculateTotalPrice(t) {
    if (_gformPriceFields[t]) {
        var e = 0;
        _anyProductSelected = !1;
        for (var i = 0; i < _gformPriceFields[t].length; i++)e += gformCalculateProductPrice(t, _gformPriceFields[t][i]);
        if (_anyProductSelected) {
            var n = gformGetShippingPrice(t);
            e += n
        }
        window.gform_product_total && (e = window.gform_product_total(t, e)), e = gform.applyFilters("gform_product_total", e, t);
        var a = jQuery(".ginput_total_" + t);
        if (a.length > 0) {
            var o = a.next().val(), s = gformFormatMoney(e, !0);
            o != e && a.next().val(e).change(), s != a.first().text() && a.html(s)
        }
    }
}
function gformGetShippingPrice(t) {
    var e = jQuery(".gfield_shipping_" + t + ' input[type="hidden"], .gfield_shipping_' + t + " select, .gfield_shipping_" + t + " input:checked"), i = 0;
    return 1 != e.length || gformIsHidden(e) || (i = e.attr("type") && "hidden" == e.attr("type").toLowerCase() ? e.val() : gformGetPrice(e.val())), gformToNumber(i)
}
function gformGetFieldId(t) {
    var e = jQuery(t).attr("id"), i = e.split("_");
    if (i.length <= 0)return 0;
    var n = i[i.length - 1];
    return n
}
function gformCalculateProductPrice(t, e) {
    var i = "_" + t + "_" + e;
    jQuery(".gfield_option" + i + ", .gfield_shipping_" + t).find("select").each(function () {
        var e = jQuery(this), i = gformGetPrice(e.val()), n = e.attr("id").split("_")[2];
        e.children("option").each(function () {
            var e = jQuery(this), a = gformGetOptionLabel(e, e.val(), i, t, n);
            e.html(a)
        }), e.trigger("chosen:updated")
    }), jQuery(".gfield_option" + i).find(".gfield_checkbox").find("input:checkbox").each(function () {
        var e = jQuery(this), i = e.attr("id"), n = i.split("_")[2], a = i.replace("choice_", "#label_"), o = jQuery(a), s = gformGetOptionLabel(o, e.val(), 0, t, n);
        o.html(s)
    }), jQuery(".gfield_option" + i + ", .gfield_shipping_" + t).find(".gfield_radio").each(function () {
        var e = 0, i = jQuery(this), n = i.attr("id"), a = n.split("_")[2], o = i.find("input:radio:checked").val();
        o && (e = gformGetPrice(o)), i.find("input:radio").each(function () {
            var i = jQuery(this), n = i.attr("id").replace("choice_", "#label_"), o = jQuery(n);
            if (o) {
                var s = gformGetOptionLabel(o, i.val(), e, t, a);
                o.html(s)
            }
        })
    });
    var n = gformGetBasePrice(t, e), a = gformGetProductQuantity(t, e);
    return a > 0 && (jQuery(".gfield_option" + i).find("input:checked, select").each(function () {
        gformIsHidden(jQuery(this)) || (n += gformGetPrice(jQuery(this).val()))
    }), _anyProductSelected = !0), n *= a, n = Math.round(100 * n) / 100
}
function gformGetProductQuantity(t, e) {
    if (!gformIsProductSelected(t, e))return 0;
    var i, n, a = jQuery("#ginput_quantity_" + t + "_" + e);
    if (a.length > 0)i = a.val(); else if (a = jQuery(".gfield_quantity_" + t + "_" + e + " :input"), i = 1, a.length > 0) {
        i = a.val();
        var o = a.attr("id"), s = gf_get_input_id_by_html_id(o);
        n = gf_get_field_number_format(s, t, "value")
    }
    n || (n = "currency");
    var r = gformGetDecimalSeparator(n);
    return i = gformCleanNumber(i, "", "", r), i || (i = 0), i
}
function gformIsProductSelected(t, e) {
    var i = "_" + t + "_" + e, n = jQuery("#ginput_base_price" + i + ", .gfield_donation" + i + ' input[type="text"], .gfield_product' + i + " .ginput_amount");
    return !(!n.val() || gformIsHidden(n)) || (n = jQuery(".gfield_product" + i + " select, .gfield_product" + i + " input:checked, .gfield_donation" + i + " select, .gfield_donation" + i + " input:checked"), !(!n.val() || gformIsHidden(n)))
}
function gformGetBasePrice(t, e) {
    var i = "_" + t + "_" + e, n = 0, a = jQuery("#ginput_base_price" + i + ", .gfield_donation" + i + ' input[type="text"], .gfield_product' + i + " .ginput_amount");
    if (a.length > 0)n = a.val(), gformIsHidden(a) && (n = 0); else {
        a = jQuery(".gfield_product" + i + " select, .gfield_product" + i + " input:checked, .gfield_donation" + i + " select, .gfield_donation" + i + " input:checked");
        var o = a.val();
        o && (o = o.split("|"), n = o.length > 1 ? o[1] : 0), gformIsHidden(a) && (n = 0)
    }
    var s = new Currency(gf_global.gf_currency_config);
    return n = s.toNumber(n), n === !1 ? 0 : n
}
function gformFormatMoney(t, e) {
    if (!gf_global.gf_currency_config)return t;
    var i = new Currency(gf_global.gf_currency_config);
    return i.toMoney(t, e)
}
function gformFormatPricingField(t) {
    if (gf_global.gf_currency_config) {
        var e = new Currency(gf_global.gf_currency_config), i = e.toMoney(jQuery(t).val());
        jQuery(t).val(i)
    }
}
function gformToNumber(t) {
    var e = new Currency(gf_global.gf_currency_config);
    return e.toNumber(t)
}
function gformGetPriceDifference(t, e) {
    var i = parseFloat(e) - parseFloat(t);
    return price = gformFormatMoney(i, !0), i > 0 && (price = "+" + price), price
}
function gformGetOptionLabel(t, e, i, n, a) {
    t = jQuery(t);
    var o = gformGetPrice(e), s = t.attr("price"), r = t.html().replace(/<span(.*)<\/span>/i, "").replace(s, ""), l = gformGetPriceDifference(i, o);
    l = 0 == gformToNumber(l) ? "" : " " + l, t.attr("price", l);
    var c = "option" == t[0].tagName.toLowerCase() ? " " + l : "<span class='ginput_price'>" + l + "</span>", u = r + c;
    return window.gform_format_option_label && (u = gform_format_option_label(u, r, c, i, o, n, a)), u
}
function gformGetProductIds(t, e) {
    for (var i = jQuery(e).hasClass(t) ? jQuery(e).attr("class").split(" ") : jQuery(e).parents("." + t).attr("class").split(" "), n = 0; n < i.length; n++)if (i[n].substr(0, t.length) == t && i[n] != t)return {
        formId: i[n].split("_")[2],
        productFieldId: i[n].split("_")[3]
    };
    return {formId: 0, fieldId: 0}
}
function gformGetPrice(t) {
    var e = t.split("|"), i = new Currency(gf_global.gf_currency_config);
    return e.length > 1 && i.toNumber(e[1]) !== !1 ? i.toNumber(e[1]) : 0
}
function gformRegisterPriceField(t) {
    _gformPriceFields[t.formId] || (_gformPriceFields[t.formId] = new Array);
    for (var e = 0; e < _gformPriceFields[t.formId].length; e++)if (_gformPriceFields[t.formId][e] == t.productFieldId)return;
    _gformPriceFields[t.formId].push(t.productFieldId)
}
function gformInitPriceFields() {
    jQuery(".gfield_price").each(function () {
        var t = gformGetProductIds("gfield_price", this);
        gformRegisterPriceField(t), jQuery(this).on("change", 'input[type="text"], input[type="number"], select', function () {
            var t = gformGetProductIds("gfield_price", this);
            0 == t.formId && (t = gformGetProductIds("gfield_shipping", this)), jQuery(document).trigger("gform_price_change", [t, this]), gformCalculateTotalPrice(t.formId)
        }), jQuery(this).on("click", 'input[type="radio"], input[type="checkbox"]', function () {
            var t = gformGetProductIds("gfield_price", this);
            0 == t.formId && (t = gformGetProductIds("gfield_shipping", this)), jQuery(document).trigger("gform_price_change", [t, this]), gformCalculateTotalPrice(t.formId)
        })
    });
    for (formId in _gformPriceFields)_gformPriceFields.hasOwnProperty(formId) && gformCalculateTotalPrice(formId)
}
function gformShowPasswordStrength(t) {
    var e = jQuery("#" + t).val(), i = jQuery("#" + t + "_2").val(), n = gformPasswordStrength(e, i), a = window.gf_text["password_" + n];
    jQuery("#" + t + "_strength").val(n), jQuery("#" + t + "_strength_indicator").removeClass("blank mismatch short good bad strong").addClass(n).html(a)
}
function gformPasswordStrength(t, e) {
    var i, n, a = 0;
    return t.length <= 0 ? "blank" : t != e && e.length > 0 ? "mismatch" : t.length < 4 ? "short" : (t.match(/[0-9]/) && (a += 10), t.match(/[a-z]/) && (a += 26), t.match(/[A-Z]/) && (a += 26), t.match(/[^a-zA-Z0-9]/) && (a += 31), i = Math.log(Math.pow(a, t.length)), n = i / Math.LN2, 40 > n ? "bad" : 56 > n ? "good" : "strong")
}
function gformAddListItem(t, e) {
    var i = jQuery(t);
    if (!i.hasClass("gfield_icon_disabled")) {
        var n = i.parents(".gfield_list_group"), a = n.clone(), o = n.parents(".gfield_list_container"), s = a.find(":input:last").attr("tabindex");
        a.find("input, select").attr("tabindex", s).not(":checkbox, :radio").val(""), a.find(":checkbox, :radio").prop("checked", !1), a = gform.applyFilters("gform_list_item_pre_add", a, n), n.after(a), gformToggleIcons(o, e), gformAdjustClasses(o)
    }
}
function gformDeleteListItem(t, e) {
    var i = jQuery(t), n = i.parents(".gfield_list_group"), a = n.parents(".gfield_list_container");
    n.remove(), gformToggleIcons(a, e), gformAdjustClasses(a)
}
function gformAdjustClasses(t) {
    var e = t.find(".gfield_list_group");
    e.each(function (t) {
        var e = jQuery(this), i = (t + 1) % 2 == 0 ? "gfield_list_row_even" : "gfield_list_row_odd";
        e.removeClass("gfield_list_row_odd gfield_list_row_even").addClass(i)
    })
}
function gformToggleIcons(t, e) {
    var i = t.find(".gfield_list_group").length, n = t.find(".add_list_item");
    t.find(".delete_list_item").css("visibility", 1 == i ? "hidden" : "visible"), e > 0 && i >= e ? (n.data("title", t.find(".add_list_item").attr("title")), n.addClass("gfield_icon_disabled").attr("title", "")) : e > 0 && (n.removeClass("gfield_icon_disabled"), n.data("title") && n.attr("title", n.data("title")))
}
function gformMatchCard(t) {
    var e = gformFindCardType(jQuery("#" + t).val()), i = jQuery("#" + t).parents(".gfield").find(".gform_card_icon_container");
    e ? (jQuery(i).find(".gform_card_icon").removeClass("gform_card_icon_selected").addClass("gform_card_icon_inactive"), jQuery(i).find(".gform_card_icon_" + e).removeClass("gform_card_icon_inactive").addClass("gform_card_icon_selected")) : jQuery(i).find(".gform_card_icon").removeClass("gform_card_icon_selected gform_card_icon_inactive")
}
function gformFindCardType(t) {
    if (t.length < 4)return !1;
    var e = window.gf_cc_rules, n = new Array;
    for (type in e)if (e.hasOwnProperty(type))for (i in e[type])if (e[type].hasOwnProperty(i) && 0 === e[type][i].indexOf(t.substring(0, e[type][i].length))) {
        n[n.length] = type;
        break
    }
    return 1 == n.length && n[0].toLowerCase()
}
function gformToggleCreditCard() {
    jQuery("#gform_payment_method_creditcard").is(":checked") ? jQuery(".gform_card_fields_container").slideDown() : jQuery(".gform_card_fields_container").slideUp()
}
function gformInitChosenFields(t, e) {
    return jQuery(t).each(function () {
        var t = jQuery(this);
        if ("rtl" == jQuery("html").attr("dir") && t.addClass("chosen-rtl chzn-rtl"), t.is(":visible") && 0 == t.siblings(".chosen-container").length) {
            var i = gform.applyFilters("gform_chosen_options", {no_results_text: e}, t);
            t.chosen(i)
        }
    })
}
function gformInitCurrencyFormatFields(t) {
    jQuery(t).each(function () {
        var t = jQuery(this);
        t.val(gformFormatMoney(jQuery(this).val()))
    }).change(function (t) {
        jQuery(this).val(gformFormatMoney(jQuery(this).val()))
    })
}
function gformFormatNumber(t, e, i, n) {
    if ("undefined" == typeof i)if (window.gf_global) {
        var a = new Currency(gf_global.gf_currency_config);
        i = a.currency.decimal_separator
    } else i = ".";
    if ("undefined" == typeof n)if (window.gf_global) {
        var a = new Currency(gf_global.gf_currency_config);
        n = a.currency.thousand_separator
    } else n = ",";
    var a = new Currency;
    return a.numberFormat(t, e, i, n, !1)
}
function gformToNumber(t) {
    var e = new Currency(gf_global.gf_currency_config);
    return e.toNumber(t)
}
function getMatchGroups(t, e) {
    for (var i = new Array; e.test(t);) {
        var n = i.length;
        i[n] = e.exec(t), t = t.replace("" + i[n][0], "")
    }
    return i
}
function gf_get_field_number_format(t, e, i) {
    var n = rgars(window, "gf_global/number_formats/{0}/{1}".format(e, t)), a = !1;
    return "" === n ? a : a = "undefined" == typeof i ? n.price !== !1 ? n.price : n.value : n[i]
}
function renderRecaptcha() {
    jQuery(".ginput_recaptcha").each(function () {
        var t = jQuery(this), e = {sitekey: t.data("sitekey"), theme: t.data("theme")};
        t.is(":empty") && (t.data("stoken") && (e.stoken = t.data("stoken")), grecaptcha.render(this.id, e), gform.doAction("gform_post_recaptcha_render", t))
    })
}
function gformValidateFileSize(t, e) {
    if (jQuery(t).closest("div").siblings(".validation_message").length > 0)var i = jQuery(t).closest("div").siblings(".validation_message"); else var i = jQuery(t).siblings(".validation_message");
    if (window.FileReader && window.File && window.FileList && window.Blob) {
        var n = t.files[0];
        if (n.size > e) {
            i.html(n.name + " - " + gform_gravityforms.strings.file_exceeds_limit);
            var a = jQuery(t);
            a.replaceWith(a.val("").clone(!0))
        } else i.html("")
    }
}
function gformInitSpinner(t, e) {
    "undefined" != typeof e && e || (e = gform.applyFilters("gform_spinner_url", gf_global.spinnerUrl, t)), jQuery("#gform_" + t).submit(function () {
        if (0 == jQuery("#gform_ajax_spinner_" + t).length) {
            var i = gform.applyFilters("gform_spinner_target_elem", jQuery("#gform_submit_button_" + t + ", #gform_wrapper_" + t + " .gform_next_button, #gform_send_resume_link_button_" + t), t);
            i.after('<img id="gform_ajax_spinner_' + t + '"  class="gform_ajax_spinner" src="' + e + '" alt="" />')
        }
    })
}
function gf_raw_input_change(t, e) {
    clearTimeout(__gf_keyup_timeout);
    var i = jQuery(e), n = i.attr("id"), a = gf_get_input_id_by_html_id(n), o = gf_get_form_id_by_html_id(n);
    if (a) {
        var s = i.is(":checkbox") || i.is(":radio") || i.is("select"), r = !s || i.is("textarea");
        ("keyup" != t.type || r) && ("change" != t.type || s || r) && ("keyup" == t.type ? __gf_keyup_timeout = setTimeout(function () {
            gf_input_change(this, o, a)
        }, 300) : gf_input_change(this, o, a))
    }
}
function gf_get_input_id_by_html_id(t) {
    var e = gf_get_ids_by_html_id(t), i = e[2];
    return e[3] && (i += "." + e[3]), i
}
function gf_get_form_id_by_html_id(t) {
    var e = gf_get_ids_by_html_id(t), i = e[1];
    return i
}
function gf_get_ids_by_html_id(t) {
    var e = !!t && t.split("_");
    return e
}
function gf_input_change(t, e, i) {
    gform.doAction("gform_input_change", t, e, i)
}
function gformExtractFieldId(t) {
    var e = parseInt(t.toString().split(".")[0]);
    return e ? e : t
}
function gformExtractInputIndex(t) {
    var e = parseInt(t.toString().split(".")[1]);
    return !!e && e
}
function rgars(t, e) {
    for (var i = e.split("/"), n = t, a = 0; a < i.length; a++)n = rgar(n, i[a]);
    return n
}
function rgar(t, e) {
    return "undefined" != typeof t[e] ? t[e] : ""
}
function gf_apply_rules(t, e, i) {
    var n = 0;
    jQuery(document).trigger("gform_pre_conditional_logic", [t, e, i]);
    for (var a = 0; a < e.length; a++)gf_apply_field_rule(t, e[a], i, function () {
        n++, n == e.length && (jQuery(document).trigger("gform_post_conditional_logic", [t, e, i]), window.gformCalculateTotalPrice && window.gformCalculateTotalPrice(t))
    })
}
function gf_check_field_rule(t, e, i, n) {
    if (!window.gf_form_conditional_logic || !window.gf_form_conditional_logic[t] || !window.gf_form_conditional_logic[t].logic[e])return "show";
    var a = window.gf_form_conditional_logic[t].logic[e], o = gf_get_field_action(t, a.section);
    return "hide" != o && (o = gf_get_field_action(t, a.field)), o
}
function gf_apply_field_rule(t, e, i, n) {
    var a = gf_check_field_rule(t, e, i, n);
    gf_do_field_action(t, a, e, i, n);
    var o = window.gf_form_conditional_logic[t].logic[e];
    o.nextButton && (a = gf_get_field_action(t, o.nextButton), gf_do_next_button_action(t, a, e, i))
}
function gf_get_field_action(t, e) {
    if (!e)return "show";
    for (var i = 0, n = 0; n < e.rules.length; n++) {
        var a = e.rules[n];
        gf_is_match(t, a) && i++
    }
    var o;
    return o = "all" == e.logicType && i == e.rules.length || "any" == e.logicType && i > 0 ? e.actionType : "show" == e.actionType ? "hide" : "show"
}
function gf_is_match(t, e) {
    var i, n = jQuery, a = e.fieldId, o = gformExtractFieldId(a), s = gformExtractInputIndex(a), r = s !== !1;
    i = n(r ? "#input_{0}_{1}_{2}".format(t, o, s) : 'input[id="input_{0}_{1}"], input[id^="input_{0}_{1}_"], input[id^="choice_{0}_{1}_"], select#input_{0}_{1}, textarea#input_{0}_{1}'.format(t, e.fieldId));
    var l = -1 !== n.inArray(i.attr("type"), ["checkbox", "radio"]), c = l ? gf_is_match_checkable(i, e, t, o) : gf_is_match_default(i.eq(0), e, t, o);
    return gform.applyFilters("gform_is_value_match", c, t, e)
}
function gf_is_match_checkable(t, e, i, n) {
    var a = !1;
    return t.each(function () {
        var t = jQuery(this), o = gf_get_value(t.val()), s = -1 !== jQuery.inArray(e.operator, ["<", ">"]), r = -1 !== jQuery.inArray(e.operator, ["contains", "starts_with", "ends_with"]);
        if (o == e.value || s || r)return t.is(":checked") ? "gf_other_choice" == o && (o = $("#input_{0}_{1}_other".format(i, n)).val()) : o = "", gf_matches_operation(o, e.value, e.operator) ? (a = !0, !1) : void 0
    }), a
}
function gf_is_match_default(t, e, i, n) {
    for (var a = t.val(), o = a instanceof Array ? a : [a], s = 0, r = 0; r < o.length; r++) {
        var l = !o[r] || o[r].indexOf("|") >= 0, c = gf_get_value(o[r]), u = gf_get_field_number_format(e.fieldId, i, "value");
        u && !l && (c = gf_format_number(c, u));
        var d = e.value;
        gf_matches_operation(c, d, e.operator) && s++
    }
    var f = "isnot" == e.operator ? s == o.length : s > 0;
    return f
}
function gf_format_number(t, e) {
    return decimalSeparator = ".", "currency" == e ? decimalSeparator = gformGetDecimalSeparator("currency") : "decimal_comma" == e ? decimalSeparator = "," : "decimal_dot" == e && (decimalSeparator = "."), t = gformCleanNumber(t, "", "", decimalSeparator), t || (t = 0), number = t.toString(), number
}
function gf_try_convert_float(t) {
    var e = "decimal_dot";
    if (gformIsNumeric(t, e)) {
        var i = "decimal_comma" == e ? "," : ".";
        return gformCleanNumber(t, "", "", i)
    }
    return t
}
function gf_matches_operation(t, e, i) {
    switch (t = t ? t.toLowerCase() : "", e = e ? e.toLowerCase() : "", i) {
        case"is":
            return t == e;
        case"isnot":
            return t != e;
        case">":
            return t = gf_try_convert_float(t), e = gf_try_convert_float(e), !(!gformIsNumber(t) || !gformIsNumber(e)) && t > e;
        case"<":
            return t = gf_try_convert_float(t), e = gf_try_convert_float(e), !(!gformIsNumber(t) || !gformIsNumber(e)) && e > t;
        case"contains":
            return t.indexOf(e) >= 0;
        case"starts_with":
            return 0 == t.indexOf(e);
        case"ends_with":
            var n = t.length - e.length;
            if (0 > n)return !1;
            var a = t.substring(n);
            return e == a
    }
    return !1
}
function gf_get_value(t) {
    return t ? (t = t.split("|"), t[0]) : ""
}
function gf_do_field_action(t, e, i, n, a) {
    for (var o = window.gf_form_conditional_logic[t], s = o.dependents[i], r = 0; r < s.length; r++) {
        var l = 0 == i ? "#gform_submit_button_" + t : "#field_" + t + "_" + s[r], c = o.defaults[s[r]];
        do_callback = r + 1 == s.length ? a : null, gf_do_action(e, l, o.animation, c, n, do_callback, t), gform.doAction("gform_post_conditional_logic_field_action", t, e, l, c, n)
    }
}
function gf_do_next_button_action(t, e, i, n) {
    var a = window.gf_form_conditional_logic[t], o = "#gform_next_button_" + t + "_" + i;
    gf_do_action(e, o, a.animation, null, n, null, t)
}
function gf_do_action(t, e, i, n, a, o, s) {
    var r = jQuery(e);
    if ("show" == t)if (r.find("select").each(function () {
            $select = jQuery(this), $select.attr("tabindex", $select.data("tabindex"))
        }), i && !a)r.length > 0 ? r.slideDown(o) : o && o(); else {
        var l = r.data("gf_display");
        "" != l && "none" != l || (l = "list-item"), r.css("display", l), o && o()
    } else {
        var c = r.children().first();
        if (c.length > 0) {
            var u = gform.applyFilters("gform_reset_pre_conditional_logic_field_action", !0, s, e, n, a);
            u && !gformIsHidden(c) && gf_reset_to_default(e, n)
        }
        r.find("select").each(function () {
            $select = jQuery(this), $select.data("tabindex", $select.attr("tabindex")).removeAttr("tabindex")
        }), r.data("gf_display") || r.data("gf_display", r.css("display")), i && !a ? r.length > 0 && r.is(":visible") ? r.slideUp(o) : o && o() : (r.hide(), o && o())
    }
}
function gf_reset_to_default(t, e) {
    var i = jQuery(t).find(".gfield_date_month input, .gfield_date_day input, .gfield_date_year input, .gfield_date_dropdown_month select, .gfield_date_dropdown_day select, .gfield_date_dropdown_year select");
    if (i.length > 0)return void i.each(function () {
        var t = jQuery(this);
        if (e) {
            var i = "d";
            t.parents().hasClass("gfield_date_month") || t.parents().hasClass("gfield_date_dropdown_month") ? i = "m" : (t.parents().hasClass("gfield_date_year") || t.parents().hasClass("gfield_date_dropdown_year")) && (i = "y"), val = e[i]
        } else val = "";
        "SELECT" == t.prop("tagName") && "" != val && (val = parseInt(val)), t.val() != val ? t.val(val).trigger("change") : t.val(val)
    });
    var n = jQuery(t).find('select, input[type="text"]:not([id*="_shim"]), input[type="number"], textarea'), a = 0;
    n.each(function () {
        var t = "", i = jQuery(this), n = i.prev("input").attr("value");
        if ("gf_other_choice" == n)t = i.attr("value"); else if (jQuery.isArray(e))t = e[a]; else if (jQuery.isPlainObject(e)) {
            if (t = e[i.attr("name")], !t) {
                var o = i.attr("id").split("_").slice(2).join(".");
                t = e[o]
            }
        } else e && (t = e);
        i.is("select:not([multiple])") && !t && (t = i.find("option").not(":disabled").eq(0).val()), i.val() != t ? (i.val(t).trigger("change"), i.is("select") && i.next().hasClass("chosen-container") && i.trigger("chosen:updated")) : i.val(t), a++
    });
    var o = jQuery(t).find('input[type="radio"], input[type="checkbox"]:not(".copy_values_activated")');
    o.each(function () {
        var t = !!jQuery(this).is(":checked"), i = !!e && jQuery.inArray(jQuery(this).attr("id"), e) > -1;
        t != i && ("checkbox" == jQuery(this).attr("type") ? jQuery(this).trigger("click") : (jQuery(this).prop("checked", i), jQuery(this).trigger("click").prop("checked", i)))
    })
}
!function (t, e) {
    "undefined" != typeof module ? module.exports = e() : "function" == typeof define && "object" == typeof define.amd ? define(e) : this[t] = e()
}("domready", function () {
    var t, e = [], i = document, n = i.documentElement.doScroll, a = "DOMContentLoaded", o = (n ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);
    return o || i.addEventListener(a, t = function () {
        for (i.removeEventListener(a, t), o = 1; t = e.shift();)t()
    }), function (t) {
        o ? setTimeout(t, 0) : e.push(t)
    }
}), css_browser_selector(navigator.userAgent), !function (t) {
    "use strict";
    t.matchMedia = t.matchMedia || function (t) {
            var e, i = t.documentElement, n = i.firstElementChild || i.firstChild, a = t.createElement("body"), o = t.createElement("div");
            return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", a.style.background = "none", a.appendChild(o), function (t) {
                return o.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(a, n), e = 42 === o.offsetWidth, i.removeChild(a), {
                    matches: e,
                    media: t
                }
            }
        }(t.document)
}(this), function (t) {
    "use strict";
    function e() {
        _(!0)
    }

    var i = {};
    t.respond = i, i.update = function () {
    };
    var n = [], a = function () {
        var e = !1;
        try {
            e = new t.XMLHttpRequest
        } catch (i) {
            e = new t.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function () {
            return e
        }
    }(), o = function (t, e) {
        var i = a();
        i && (i.open("GET", t, !0), i.onreadystatechange = function () {
            4 !== i.readyState || 200 !== i.status && 304 !== i.status || e(i.responseText)
        }, 4 !== i.readyState && i.send(null))
    }, s = function (t) {
        return t.replace(i.regex.minmaxwh, "").match(i.regex.other)
    };
    if (i.ajax = o, i.queue = n, i.unsupportedmq = s, i.regex = {
            media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
            keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
            comments: /\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,
            urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
            findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
            only: /(only\s+)?([a-zA-Z]+)\s?/,
            minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
            maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
            minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
            other: /\([^\)]*\)/g
        }, i.mediaQueriesSupported = t.matchMedia && null !== t.matchMedia("only all") && t.matchMedia("only all").matches, !i.mediaQueriesSupported) {
        var r, l, c, u = t.document, d = u.documentElement, f = [], p = [], h = [], m = {}, g = 30, v = u.getElementsByTagName("head")[0] || d, y = u.getElementsByTagName("base")[0], b = v.getElementsByTagName("link"), w = function () {
            var t, e = u.createElement("div"), i = u.body, n = d.style.fontSize, a = i && i.style.fontSize, o = !1;
            return e.style.cssText = "position:absolute;font-size:1em;width:1em", i || (i = o = u.createElement("body"), i.style.background = "none"), d.style.fontSize = "100%", i.style.fontSize = "100%", i.appendChild(e), o && d.insertBefore(i, d.firstChild), t = e.offsetWidth, o ? d.removeChild(i) : i.removeChild(e), d.style.fontSize = n, a && (i.style.fontSize = a), t = c = parseFloat(t)
        }, _ = function (e) {
            var i = "clientWidth", n = d[i], a = "CSS1Compat" === u.compatMode && n || u.body[i] || n, o = {}, s = b[b.length - 1], m = (new Date).getTime();
            if (e && r && g > m - r)return t.clearTimeout(l), void(l = t.setTimeout(_, g));
            r = m;
            for (var y in f)if (f.hasOwnProperty(y)) {
                var x = f[y], C = x.minw, S = x.maxw, k = null === C, I = null === S, T = "em";
                C && (C = parseFloat(C) * (C.indexOf(T) > -1 ? c || w() : 1)), S && (S = parseFloat(S) * (S.indexOf(T) > -1 ? c || w() : 1)), x.hasquery && (k && I || !(k || a >= C) || !(I || S >= a)) || (o[x.media] || (o[x.media] = []), o[x.media].push(p[x.rules]))
            }
            for (var $ in h)h.hasOwnProperty($) && h[$] && h[$].parentNode === v && v.removeChild(h[$]);
            h.length = 0;
            for (var P in o)if (o.hasOwnProperty(P)) {
                var E = u.createElement("style"), M = o[P].join("\n");
                E.type = "text/css", E.media = P, v.insertBefore(E, s.nextSibling), E.styleSheet ? E.styleSheet.cssText = M : E.appendChild(u.createTextNode(M)), h.push(E)
            }
        }, x = function (t, e, n) {
            var a = t.replace(i.regex.comments, "").replace(i.regex.keyframes, "").match(i.regex.media), o = a && a.length || 0;
            e = e.substring(0, e.lastIndexOf("/"));
            var r = function (t) {
                return t.replace(i.regex.urls, "$1" + e + "$2$3")
            }, l = !o && n;
            e.length && (e += "/"), l && (o = 1);
            for (var c = 0; o > c; c++) {
                var u, d, h, m;
                l ? (u = n, p.push(r(t))) : (u = a[c].match(i.regex.findStyles) && RegExp.$1, p.push(RegExp.$2 && r(RegExp.$2))), h = u.split(","), m = h.length;
                for (var g = 0; m > g; g++)d = h[g], s(d) || f.push({
                    media: d.split("(")[0].match(i.regex.only) && RegExp.$2 || "all",
                    rules: p.length - 1,
                    hasquery: d.indexOf("(") > -1,
                    minw: d.match(i.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: d.match(i.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                })
            }
            _()
        }, C = function () {
            if (n.length) {
                var e = n.shift();
                o(e.href, function (i) {
                    x(i, e.href, e.media), m[e.href] = !0, t.setTimeout(function () {
                        C()
                    }, 0)
                })
            }
        }, S = function () {
            for (var e = 0; e < b.length; e++) {
                var i = b[e], a = i.href, o = i.media, s = i.rel && "stylesheet" === i.rel.toLowerCase();
                a && s && !m[a] && (i.styleSheet && i.styleSheet.rawCssText ? (x(i.styleSheet.rawCssText, a, o), m[a] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(a) && !y || a.replace(RegExp.$1, "").split("/")[0] === t.location.host) && ("//" === a.substring(0, 2) && (a = t.location.protocol + a), n.push({
                    href: a,
                    media: o
                })))
            }
            C()
        };
        S(), i.update = S, i.getEmValue = w, t.addEventListener ? t.addEventListener("resize", e, !1) : t.attachEvent && t.attachEvent("onresize", e)
    }
}(this), function () {
    var t, e, i, n, a, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = [].indexOf || function (t) {
            for (var e = 0, i = this.length; i > e; e++)if (e in this && this[e] === t)return e;
            return -1
        };
    e = function () {
        function t() {
        }

        return t.prototype.extend = function (t, e) {
            var i, n;
            for (i in e)n = e[i], null == t[i] && (t[i] = n);
            return t
        }, t.prototype.isMobile = function (t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function (t, e, i, n) {
            var a;
            return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (a = document.createEvent("CustomEvent"), a.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (a = document.createEventObject(), a.eventType = t) : a.eventName = t, a
        }, t.prototype.emitEvent = function (t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function (t, e, i) {
            return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
        }, t.prototype.removeEvent = function (t, e, i) {
            return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
        }, t.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), i = this.WeakMap || this.MozWeakMap || (i = function () {
            function t() {
                this.keys = [], this.values = []
            }

            return t.prototype.get = function (t) {
                var e, i, n, a, o;
                for (o = this.keys, e = n = 0, a = o.length; a > n; e = ++n)if (i = o[e], i === t)return this.values[e]
            }, t.prototype.set = function (t, e) {
                var i, n, a, o, s;
                for (s = this.keys, i = a = 0, o = s.length; o > a; i = ++a)if (n = s[i], n === t)return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }

            return t.notSupported = !0, t.prototype.observe = function () {
            }, t
        }()), n = this.getComputedStyle || function (t) {
            return this.getPropertyValue = function (e) {
                var i;
                return "float" === e && (e = "styleFloat"), a.test(e) && e.replace(a, function (t, e) {
                    return e.toUpperCase()
                }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
            }, this
        }, a = /(\-([a-z]){1})/g, this.WOW = function () {
        function a(t) {
            null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)),
                this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return a.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, a.prototype.init = function () {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, a.prototype.start = function () {
            var e, i, n, a;
            if (this.stopped = !1, this.boxes = function () {
                    var t, i, n, a;
                    for (n = this.element.querySelectorAll("." + this.config.boxClass), a = [], t = 0, i = n.length; i > t; t++)e = n[t], a.push(e);
                    return a
                }.call(this), this.all = function () {
                    var t, i, n, a;
                    for (n = this.boxes, a = [], t = 0, i = n.length; i > t; t++)e = n[t], a.push(e);
                    return a
                }.call(this), this.boxes.length)if (this.disabled())this.resetStyle(); else for (a = this.boxes, i = 0, n = a.length; n > i; i++)e = a[i], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function (t) {
                return function (e) {
                    var i, n, a, o, s;
                    for (s = [], i = 0, n = e.length; n > i; i++)o = e[i], s.push(function () {
                        var t, e, i, n;
                        for (i = o.addedNodes || [], n = [], t = 0, e = i.length; e > t; t++)a = i[t], n.push(this.doSync(a));
                        return n
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, a.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, a.prototype.sync = function () {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, a.prototype.doSync = function (t) {
            var e, i, n, a, o;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, a = t.querySelectorAll("." + this.config.boxClass), o = [], i = 0, n = a.length; n > i; i++)e = a[i], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        }, a.prototype.show = function (t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, a.prototype.applyStyle = function (t, e) {
            var i, n, a;
            return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), a = t.getAttribute("data-wow-iteration"), this.animate(function (o) {
                return function () {
                    return o.customStyle(t, e, n, i, a)
                }
            }(this))
        }, a.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (t) {
                return window.requestAnimationFrame(t)
            } : function (t) {
                return t()
            }
        }(), a.prototype.resetStyle = function () {
            var t, e, i, n, a;
            for (n = this.boxes, a = [], e = 0, i = n.length; i > e; e++)t = n[e], a.push(t.style.visibility = "visible");
            return a
        }, a.prototype.resetAnimation = function (t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, a.prototype.customStyle = function (t, e, i, n, a) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {animationDuration: i}), n && this.vendorSet(t.style, {animationDelay: n}), a && this.vendorSet(t.style, {animationIterationCount: a}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
        }, a.prototype.vendors = ["moz", "webkit"], a.prototype.vendorSet = function (t, e) {
            var i, n, a, o;
            n = [];
            for (i in e)a = e[i], t["" + i] = a, n.push(function () {
                var e, n, s, r;
                for (s = this.vendors, r = [], e = 0, n = s.length; n > e; e++)o = s[e], r.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = a);
                return r
            }.call(this));
            return n
        }, a.prototype.vendorCSS = function (t, e) {
            var i, a, o, s, r, l;
            for (r = n(t), s = r.getPropertyCSSValue(e), o = this.vendors, i = 0, a = o.length; a > i; i++)l = o[i], s = s || r.getPropertyCSSValue("-" + l + "-" + e);
            return s
        }, a.prototype.animationName = function (t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (i) {
                e = n(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, a.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, a.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t)
        }, a.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, a.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var e, i, n, a;
                for (n = this.boxes, a = [], e = 0, i = n.length; i > e; e++)t = n[e], t && (this.isVisible(t) ? this.show(t) : a.push(t));
                return a
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, a.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop;)t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;)e += t.offsetTop;
            return e
        }, a.prototype.isVisible = function (t) {
            var e, i, n, a, o;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, a = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, a >= n && e >= o
        }, a.prototype.util = function () {
            return null != this._util ? this._util : this._util = new e
        }, a.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, a
    }()
}.call(this), window.Modernizr = window.Modernizr || function (t, e, i) {
        function n(t) {
            p.cssText = t
        }

        function a(t, e) {
            return typeof t === e
        }

        var o, s, r, l = "2.8.3", c = {}, u = e.documentElement, d = "modernizr", f = e.createElement(d), p = f.style, h = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), m = {svg: "http://www.w3.org/2000/svg"}, g = {}, v = [], y = v.slice, b = {}.hasOwnProperty;
        r = a(b, "undefined") || a(b.call, "undefined") ? function (t, e) {
            return e in t && a(t.constructor.prototype[e], "undefined")
        } : function (t, e) {
            return b.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var e = this;
            if ("function" != typeof e)throw new TypeError;
            var i = y.call(arguments, 1), n = function () {
                if (this instanceof n) {
                    var a = function () {
                    };
                    a.prototype = e.prototype;
                    var o = new a, s = e.apply(o, i.concat(y.call(arguments)));
                    return Object(s) === s ? s : o
                }
                return e.apply(t, i.concat(y.call(arguments)))
            };
            return n
        }), g.inlinesvg = function () {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == m.svg
        };
        for (var w in g)r(g, w) && (s = w.toLowerCase(), c[s] = g[w](), v.push((c[s] ? "" : "no-") + s));
        return c.addTest = function (t, e) {
            if ("object" == typeof t)for (var n in t)r(t, n) && c.addTest(n, t[n]); else {
                if (t = t.toLowerCase(), c[t] !== i)return c;
                e = "function" == typeof e ? e() : e, "undefined" != typeof enableClasses && enableClasses && (u.className += " " + (e ? "" : "no-") + t), c[t] = e
            }
            return c
        }, n(""), f = o = null, c._version = l, c._prefixes = h, c
    }(this, this.document), Modernizr.addTest("cssfilters", function () {
    var t = document.createElement("div");
    return t.style.cssText = Modernizr._prefixes.join("filter:blur(2px); "), !!t.style.length && (void 0 === document.documentMode || document.documentMode > 9)
}), Modernizr.addTest("svgfilters", function () {
    var t = !1;
    try {
        t = void 0 !== typeof SVGFEColorMatrixElement && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
    } catch (e) {
    }
    return t
}), function (t, e, i, n) {
    function a(e, i) {
        var n, a;
        i = i || {}, n = i.classes || {}, a = n.fade || s.classes.fade, i.fade = i.fade || e.className.indexOf(a) > -1, this.element = e, this.elementId = r++, this.settings = t.extend({}, s, i), this._defaults = s, this._name = o, this.init()
    }

    var o = "gray", s = {fade: !1, classes: {fade: "grayscale-fade"}}, r = 0;
    t.extend(a.prototype, {
        init: function () {
            var e;
            !Modernizr.cssfilters && Modernizr.inlinesvg && Modernizr.svgfilters && (e = t(this.element), (this.cssFilterDeprecated(e) || this.settings.fade) && this.switchImage(e))
        }, cssFilterDeprecated: function (t) {
            return "none" === t.css("filter")
        }, elementType: function (t) {
            return "IMG" === t.prop("tagName") ? "Img" : "Bg"
        }, pxToNumber: function (t) {
            return parseInt(t.replace("px", ""))
        }, getComputedStyle: function (t) {
            var i = {}, n = {};
            i = e.getComputedStyle(t, null);
            for (var a = 0, o = i.length; o > a; a++) {
                var s = i[a], r = i.getPropertyValue(s);
                n[s] = r
            }
            return n
        }, extractUrl: function (t) {
            var e;
            return startRegex = /^url\(["']?/, endRegex = /["']?\)$/, e = t.replace(startRegex, "").replace(endRegex, "")
        }, positionToNegativeMargin: function (t) {
            var e, i, n;
            return e = t.match(/^(-?\d+\S+)/)[0], i = t.match(/\s(-?\d+\S+)$/)[0], n = "margin:" + i + " 0 0 " + e
        }, getBgSize: function (e, i) {
            var n, a, o, s, r, l, c;
            if (n = new Image, n.src = e, "auto" !== i && "cover" !== i && "contain" !== i && "inherit" !== i) {
                var u = t(this.element);
                a = n.width / n.height, s = parseInt((i.match(/^(\d+)px/) || [0, 0])[1]), l = parseInt((i.match(/\s(\d+)px$/) || [0, 0])[1]), o = u.height() * a, r = u.width() / a, s = s || o, l = l || r
            }
            return c = s || l ? {width: s, height: l} : {width: n.width, height: n.height}
        }, getImgParams: function (t) {
            var e = {};
            e.styles = this.getComputedStyle(t[0]);
            var i = {
                top: this.pxToNumber(e.styles["padding-top"]),
                right: this.pxToNumber(e.styles["padding-right"]),
                bottom: this.pxToNumber(e.styles["padding-bottom"]),
                left: this.pxToNumber(e.styles["padding-left"])
            }, n = {
                top: this.pxToNumber(e.styles["border-top-width"]),
                right: this.pxToNumber(e.styles["border-right-width"]),
                bottom: this.pxToNumber(e.styles["border-bottom-width"]),
                left: this.pxToNumber(e.styles["border-left-width"])
            };
            return e.image = {
                width: this.pxToNumber(e.styles.width),
                height: this.pxToNumber(e.styles.height)
            }, e.svg = {
                url: t[0].src,
                padding: i,
                borderWidth: n,
                width: e.image.width + i.left + i.right + n.left + n.right,
                height: e.image.height + i.top + i.bottom + n.top + n.bottom,
                offset: ""
            }, e
        }, getBgParams: function (e) {
            var i, n = {};
            return i = this.extractUrl(e.css("background-image")), bgSize = this.getBgSize(i, e.css("background-size")), offset = this.positionToNegativeMargin(e.css("background-position")), n.styles = this.getComputedStyle(e[0]), n.svg = t.extend({url: i}, bgSize, {offset: offset}), n.image = {
                width: n.svg.width,
                height: n.svg.height
            }, n
        }, setStyles: function (t, e, i, n) {
            return e.display = "inline-block", e.overflow = e["overflow-x"] = e["overflow-y"] = "hidden", e["background-image"] = 'url("' + i.url + '")', e["background-size"] = n.width + "px " + n.height + "px", "Img" === t && (e["background-repeat"] = "no-repeat", e["background-position"] = i.padding.left + "px " + i.padding.top + "px", e.width = i.width, e.height = i.height), delete e.filter, e
        }, addSVGFilterOnce: function () {
            $body = t("body"), $body.data("plugin_" + o + "_has_filter") || $body.data("plugin_" + o + "_has_filter", "true").append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute"><defs><filter id="gray"><feColorMatrix type="saturate" values="0"/></filter></defs></svg>')
        }, switchImage: function (e) {
            var i, n, a, o, s, r;
            i = this.elementType(e), n = this["get" + i + "Params"](e), a = this.settings.fade ? this.settings.classes.fade : "", o = e[0].alt ? ' aria-labelledby="gray-title-' + this.elementId + '"' : "", s = e[0].alt ? '<title id="gray-title-' + this.elementId + '">' + e[0].alt + "</title>" : "", r = t('<div class="grayscale grayscale-replaced ' + a + '"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + n.svg.width + " " + n.svg.height + '" width="' + n.svg.width + '" height="' + n.svg.height + '" style="' + n.svg.offset + '" role="img"' + o + ">" + s + '<image filter="url(&quot;#gray&quot;)" x="0" y="0" width="' + n.image.width + '" height="' + n.image.height + '" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + n.svg.url + '" /></svg></div>'), n.styles = this.setStyles(i, n.styles, n.svg, n.image), r.css(n.styles), this.addSVGFilterOnce(), e.replaceWith(r)
        }
    }), t.fn[o] = function (e) {
        return this.each(function () {
            t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new a(this, e))
        }), this
    }, t(e).on("load", function () {
        t(".grayscale:not(.grayscale-replaced)")[o]()
    })
}(jQuery, window, document), "function" != typeof Object.create && (Object.create = function (t) {
    function e() {
    }

    return e.prototype = t, new e
}), function (t, e, i) {
    var n = {
        init: function (e, i) {
            this.$elem = t(i), this.options = t.extend({}, t.fn.owlCarousel.options, this.$elem.data(), e), this.userOptions = e, this.loadContent()
        }, loadContent: function () {
            function e(t) {
                var e, i = "";
                if ("function" == typeof n.options.jsonSuccess)n.options.jsonSuccess.apply(this, [t]); else {
                    for (e in t.owl)t.owl.hasOwnProperty(e) && (i += t.owl[e].item);
                    n.$elem.html(i)
                }
                n.logIn()
            }

            var i, n = this;
            "function" == typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]), "string" == typeof n.options.jsonPath ? (i = n.options.jsonPath, t.getJSON(i, e)) : n.logIn()
        }, logIn: function () {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({opacity: 0}), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
        }, setVars: function () {
            return 0 !== this.$elem.children().length && (this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), void this.onStartup())
        }, onStartup: function () {
            this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        }, eachMoveUpdate: function () {
            !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        }, updateVars: function () {
            "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        }, reload: function () {
            var t = this;
            e.setTimeout(function () {
                t.updateVars()
            }, 0)
        }, watchVisibility: function () {
            var t = this;
            return !1 === t.$elem.is(":visible") && (t.$elem.css({opacity: 0}), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function () {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({opacity: 1}, 200), e.clearInterval(t.checkVisible))
                }, 500)))
        }, wrapItems: function () {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
        }, baseClass: function () {
            var t = this.$elem.hasClass(this.options.baseClass), e = this.$elem.hasClass(this.options.theme);
            t || this.$elem.addClass(this.options.baseClass), e || this.$elem.addClass(this.options.theme)
        }, updateItems: function () {
            var e, i;
            if (!1 === this.options.responsive)return !1;
            if (!0 === this.options.singleItem)return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            if (e = t(this.options.responsiveBaseWidth).width(), e > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)for (this.options.itemsCustom.sort(function (t, e) {
                return t[0] - e[0]
            }), i = 0; i < this.options.itemsCustom.length; i += 1)this.options.itemsCustom[i][0] <= e && (this.options.items = this.options.itemsCustom[i][1]); else e <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), e <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), e <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), e <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), e <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        }, response: function () {
            var i, n, a = this;
            return !0 === a.options.responsive && (n = t(e).width(), a.resizer = function () {
                    t(e).width() !== n && (!1 !== a.options.autoPlay && e.clearInterval(a.autoPlayInterval), e.clearTimeout(i), i = e.setTimeout(function () {
                        n = t(e).width(), a.updateVars()
                    }, a.options.responsiveRefreshRate))
                }, void t(e).resize(a.resizer))
        }, updatePosition: function () {
            this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
        }, appendItemsSizes: function () {
            var e = this, i = 0, n = e.itemsAmount - e.options.items;
            e.$owlItems.each(function (a) {
                var o = t(this);
                o.css({width: e.itemWidth}).data("owl-item", Number(a)), 0 !== a % e.options.items && a !== n || a > n || (i += 1), o.data("owl-roundPages", i)
            })
        }, appendWrapperSizes: function () {
            this.$owlWrapper.css({width: this.$owlItems.length * this.itemWidth * 2, left: 0}), this.appendItemsSizes()
        }, calculateAll: function () {
            this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
        }, calculateWidth: function () {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        }, max: function () {
            var t = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            return this.options.items > this.itemsAmount ? this.maximumPixels = t = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = t), t
        }, min: function () {
            return 0
        }, loops: function () {
            var e, i, n = 0, a = 0;
            for (this.positionsInArray = [0], this.pagesInArray = [], e = 0; e < this.itemsAmount; e += 1)a += this.itemWidth, this.positionsInArray.push(-a), !0 === this.options.scrollPerPage && (i = t(this.$owlItems[e]), i = i.data("owl-roundPages"), i !== n && (this.pagesInArray[n] = this.positionsInArray[e], n = i))
        }, buildControls: function () {
            !0 !== this.options.navigation && !0 !== this.options.pagination || (this.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
        }, buildButtons: function () {
            var e = this, i = t('<div class="owl-buttons"/>');
            e.owlControls.append(i), e.buttonPrev = t("<div/>", {
                "class": "owl-prev",
                html: e.options.navigationText[0] || ""
            }), e.buttonNext = t("<div/>", {
                "class": "owl-next",
                html: e.options.navigationText[1] || ""
            }), i.append(e.buttonPrev).append(e.buttonNext), i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (t) {
                t.preventDefault()
            }), i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (i) {
                i.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
            })
        }, buildPagination: function () {
            var e = this;
            e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (i) {
                i.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
            })
        }, updatePagination: function () {
            var e, i, n, a, o, s;
            if (!1 === this.options.pagination)return !1;
            for (this.paginationWrapper.html(""), e = 0, i = this.itemsAmount - this.itemsAmount % this.options.items, a = 0; a < this.itemsAmount; a += 1)0 === a % this.options.items && (e += 1, i === a && (n = this.itemsAmount - this.options.items), o = t("<div/>", {"class": "owl-page"}), s = t("<span></span>", {
                text: !0 === this.options.paginationNumbers ? e : "",
                "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
            }), o.append(s), o.data("owl-page", i === a ? n : a), o.data("owl-roundPages", e), this.paginationWrapper.append(o));
            this.checkPagination()
        }, checkPagination: function () {
            var e = this;
            return !1 !== e.options.pagination && void e.paginationWrapper.find(".owl-page").each(function () {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
        }, checkNavigation: function () {
            return !1 !== this.options.navigation && void(!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled"))))
        }, updateControls: function () {
            this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        }, destroyControls: function () {
            this.owlControls && this.owlControls.remove()
        }, next: function (t) {
            if (this.isTransition)return !1;
            if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                if (!0 !== this.options.rewindNav)return this.currentItem = this.maximumItem, !1;
                this.currentItem = 0, t = "rewind"
            }
            this.goTo(this.currentItem, t)
        }, prev: function (t) {
            if (this.isTransition)return !1;
            if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
                if (!0 !== this.options.rewindNav)return this.currentItem = 0, !1;
                this.currentItem = this.maximumItem, t = "rewind"
            }
            this.goTo(this.currentItem, t)
        }, goTo: function (t, i, n) {
            var a = this;
            return !a.isTransition && ("function" == typeof a.options.beforeMove && a.options.beforeMove.apply(this, [a.$elem]), t >= a.maximumItem ? t = a.maximumItem : 0 >= t && (t = 0), a.currentItem = a.owl.currentItem = t, !1 !== a.options.transitionStyle && "drag" !== n && 1 === a.options.items && !0 === a.browser.support3d ? (a.swapSpeed(0), !0 === a.browser.support3d ? a.transition3d(a.positionsInArray[t]) : a.css2slide(a.positionsInArray[t], 1), a.afterGo(), a.singleItemTransition(), !1) : (t = a.positionsInArray[t], !0 === a.browser.support3d ? (a.isCss3Finish = !1, !0 === i ? (a.swapSpeed("paginationSpeed"), e.setTimeout(function () {
                    a.isCss3Finish = !0
                }, a.options.paginationSpeed)) : "rewind" === i ? (a.swapSpeed(a.options.rewindSpeed), e.setTimeout(function () {
                    a.isCss3Finish = !0
                }, a.options.rewindSpeed)) : (a.swapSpeed("slideSpeed"), e.setTimeout(function () {
                    a.isCss3Finish = !0
                }, a.options.slideSpeed)), a.transition3d(t)) : !0 === i ? a.css2slide(t, a.options.paginationSpeed) : "rewind" === i ? a.css2slide(t, a.options.rewindSpeed) : a.css2slide(t, a.options.slideSpeed), void a.afterGo()))
        }, jumpTo: function (t) {
            "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), t >= this.maximumItem || -1 === t ? t = this.maximumItem : 0 >= t && (t = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[t]) : this.css2slide(this.positionsInArray[t], 1), this.currentItem = this.owl.currentItem = t, this.afterGo()
        }, afterGo: function () {
            this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        }, stop: function () {
            this.apStatus = "stop", e.clearInterval(this.autoPlayInterval)
        }, checkAp: function () {
            "stop" !== this.apStatus && this.play()
        }, play: function () {
            var t = this;
            return t.apStatus = "play", !1 !== t.options.autoPlay && (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function () {
                t.next(!0)
            }, t.options.autoPlay)))
        }, swapSpeed: function (t) {
            "slideSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof t && this.$owlWrapper.css(this.addCssSpeed(t))
        }, addCssSpeed: function (t) {
            return {
                "-webkit-transition": "all " + t + "ms ease",
                "-moz-transition": "all " + t + "ms ease",
                "-o-transition": "all " + t + "ms ease",
                transition: "all " + t + "ms ease"
            }
        }, removeTransition: function () {
            return {"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: ""}
        }, doTranslate: function (t) {
            return {
                "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                transform: "translate3d(" + t + "px, 0px,0px)"
            }
        }, transition3d: function (t) {
            this.$owlWrapper.css(this.doTranslate(t))
        }, css2move: function (t) {
            this.$owlWrapper.css({left: t})
        }, css2slide: function (t, e) {
            var i = this;
            i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({left: t}, {
                duration: e || i.options.slideSpeed,
                complete: function () {
                    i.isCssFinish = !0
                }
            })
        }, checkBrowser: function () {
            var t = i.createElement("div");
            t.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", t = t.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                support3d: null !== t && 1 === t.length,
                isTouch: "ontouchstart" in e || e.navigator.msMaxTouchPoints
            }
        }, moveEvents: function () {
            !1 === this.options.mouseDrag && !1 === this.options.touchDrag || (this.gestures(), this.disabledEvents())
        }, eventTypes: function () {
            var t = ["s", "e", "x"];
            this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = t[0], this.ev_types.move = t[1], this.ev_types.end = t[2]
        }, disabledEvents: function () {
            this.$elem.on("dragstart.owl", function (t) {
                t.preventDefault()
            }), this.$elem.on("mousedown.disableTextSelect", function (e) {
                return t(e.target).is("input, textarea, select, option")
            })
        }, gestures: function () {
            function n(t) {
                if (void 0 !== t.touches)return {x: t.touches[0].pageX, y: t.touches[0].pageY};
                if (void 0 === t.touches) {
                    if (void 0 !== t.pageX)return {x: t.pageX, y: t.pageY};
                    if (void 0 === t.pageX)return {x: t.clientX, y: t.clientY}
                }
            }

            function a(e) {
                "on" === e ? (t(i).on(r.ev_types.move, o), t(i).on(r.ev_types.end, s)) : "off" === e && (t(i).off(r.ev_types.move), t(i).off(r.ev_types.end))
            }

            function o(a) {
                a = a.originalEvent || a || e.event, r.newPosX = n(a).x - l.offsetX, r.newPosY = n(a).y - l.offsetY, r.newRelativeX = r.newPosX - l.relativePos, "function" == typeof r.options.startDragging && !0 !== l.dragging && 0 !== r.newRelativeX && (l.dragging = !0, r.options.startDragging.apply(r, [r.$elem])), (8 < r.newRelativeX || -8 > r.newRelativeX) && !0 === r.browser.isTouch && (void 0 !== a.preventDefault ? a.preventDefault() : a.returnValue = !1, l.sliding = !0), (10 < r.newPosY || -10 > r.newPosY) && !1 === l.sliding && t(i).off("touchmove.owl"), r.newPosX = Math.max(Math.min(r.newPosX, r.newRelativeX / 5), r.maximumPixels + r.newRelativeX / 5), !0 === r.browser.support3d ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
            }

            function s(i) {
                i = i.originalEvent || i || e.event;
                var n;
                i.target = i.target || i.srcElement, l.dragging = !1, !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing"), r.dragDirection = 0 > r.newRelativeX ? r.owl.dragDirection = "left" : r.owl.dragDirection = "right", 0 !== r.newRelativeX && (n = r.getNewPosition(), r.goTo(n, !1, "drag"), l.targetElement === i.target && !0 !== r.browser.isTouch && (t(i.target).on("click.disable", function (e) {
                    e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                }), i = t._data(i.target, "events").click, n = i.pop(), i.splice(0, 0, n))), a("off")
            }

            var r = this, l = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            r.isCssFinish = !0, r.$elem.on(r.ev_types.start, ".owl-wrapper", function (i) {
                i = i.originalEvent || i || e.event;
                var o;
                if (3 === i.which)return !1;
                if (!(r.itemsAmount <= r.options.items)) {
                    if (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish || !1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish)return !1;
                    !1 !== r.options.autoPlay && e.clearInterval(r.autoPlayInterval), !0 === r.browser.isTouch || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing"), r.newPosX = 0, r.newRelativeX = 0, t(this).css(r.removeTransition()), o = t(this).position(), l.relativePos = o.left, l.offsetX = n(i).x - o.left, l.offsetY = n(i).y - o.top, a("on"), l.sliding = !1, l.targetElement = i.target || i.srcElement
                }
            })
        }, getNewPosition: function () {
            var t = this.closestItem();
            return t > this.maximumItem ? t = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = t = 0), t
        }, closestItem: function () {
            var e = this, i = !0 === e.options.scrollPerPage ? e.pagesInArray : e.positionsInArray, n = e.newPosX, a = null;
            return t.each(i, function (o, s) {
                n - e.itemWidth / 20 > i[o + 1] && n - e.itemWidth / 20 < s && "left" === e.moveDirection() ? (a = s, e.currentItem = !0 === e.options.scrollPerPage ? t.inArray(a, e.positionsInArray) : o) : n + e.itemWidth / 20 < s && n + e.itemWidth / 20 > (i[o + 1] || i[o] - e.itemWidth) && "right" === e.moveDirection() && (!0 === e.options.scrollPerPage ? (a = i[o + 1] || i[i.length - 1], e.currentItem = t.inArray(a, e.positionsInArray)) : (a = i[o + 1], e.currentItem = o + 1))
            }), e.currentItem
        }, moveDirection: function () {
            var t;
            return 0 > this.newRelativeX ? (t = "right", this.playDirection = "next") : (t = "left", this.playDirection = "prev"), t
        }, customEvents: function () {
            var t = this;
            t.$elem.on("owl.next", function () {
                t.next()
            }), t.$elem.on("owl.prev", function () {
                t.prev()
            }), t.$elem.on("owl.play", function (e, i) {
                t.options.autoPlay = i, t.play(), t.hoverStatus = "play"
            }), t.$elem.on("owl.stop", function () {
                t.stop(), t.hoverStatus = "stop"
            }), t.$elem.on("owl.goTo", function (e, i) {
                t.goTo(i)
            }), t.$elem.on("owl.jumpTo", function (e, i) {
                t.jumpTo(i)
            })
        }, stopOnHover: function () {
            var t = this;
            !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function () {
                t.stop()
            }), t.$elem.on("mouseout", function () {
                "stop" !== t.hoverStatus && t.play()
            }))
        }, lazyLoad: function () {
            var e, i, n, a, o;
            if (!1 === this.options.lazyLoad)return !1;
            for (e = 0; e < this.itemsAmount; e += 1)i = t(this.$owlItems[e]), "loaded" !== i.data("owl-loaded") && (n = i.data("owl-item"), a = i.find(".lazyOwl"), "string" != typeof a.data("src") ? i.data("owl-loaded", "loaded") : (void 0 === i.data("owl-loaded") && (a.hide(), i.addClass("loading").data("owl-loaded", "checked")), (o = !0 !== this.options.lazyFollow || n >= this.currentItem) && n < this.currentItem + this.options.items && a.length && this.lazyPreload(i, a)))
        }, lazyPreload: function (t, i) {
            function n() {
                t.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === s.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
            }

            function a() {
                r += 1, s.completeImg(i.get(0)) || !0 === o ? n() : 100 >= r ? e.setTimeout(a, 100) : n()
            }

            var o, s = this, r = 0;
            "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), o = !0) : i[0].src = i.data("src"), a()
        }, autoHeight: function () {
            function i() {
                var i = t(o.$owlItems[o.currentItem]).height();
                o.wrapperOuter.css("height", i + "px"), o.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function () {
                    o.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function n() {
                a += 1, o.completeImg(s.get(0)) ? i() : 100 >= a ? e.setTimeout(n, 100) : o.wrapperOuter.css("height", "")
            }

            var a, o = this, s = t(o.$owlItems[o.currentItem]).find("img");
            void 0 !== s.get(0) ? (a = 0, n()) : i()
        }, completeImg: function (t) {
            return !(!t.complete || "undefined" != typeof t.naturalWidth && 0 === t.naturalWidth)
        }, onVisibleItems: function () {
            var e;
            for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], e = this.currentItem; e < this.currentItem + this.options.items; e += 1)this.visibleItems.push(e), !0 === this.options.addClassActive && t(this.$owlItems[e]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        }, transitionTypes: function (t) {
            this.outClass = "owl-" + t + "-out", this.inClass = "owl-" + t + "-in"
        }, singleItemTransition: function () {
            var t = this, e = t.outClass, i = t.inClass, n = t.$owlItems.eq(t.currentItem), a = t.$owlItems.eq(t.prevItem), o = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem], s = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
            t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": s + "px",
                "-moz-perspective-origin": s + "px",
                "perspective-origin": s + "px"
            }), a.css({
                position: "relative",
                left: o + "px"
            }).addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                t.endPrev = !0, a.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(a, e)
            }), n.addClass(i).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                t.endCurrent = !0, n.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(n, i)
            })
        }, clearTransStyle: function (t, e) {
            t.css({
                position: "",
                left: ""
            }).removeClass(e), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        }, owlStatus: function () {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        }, clearEvents: function () {
            this.$elem.off(".owl owl mousedown.disableTextSelect"), t(i).off(".owl owl"), t(e).off("resize", this.resizer)
        }, unWrap: function () {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        }, destroy: function () {
            this.stop(), e.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
        }, reinit: function (e) {
            e = t.extend({}, this.userOptions, e), this.unWrap(), this.init(e, this.$elem)
        }, addItem: function (t, e) {
            var i;
            return !!t && (0 === this.$elem.children().length ? (this.$elem.append(t), this.setVars(), !1) : (this.unWrap(), i = void 0 === e || -1 === e ? -1 : e, i >= this.$userItems.length || -1 === i ? this.$userItems.eq(-1).after(t) : this.$userItems.eq(i).before(t), void this.setVars()))
        }, removeItem: function (t) {
            return 0 !== this.$elem.children().length && (t = void 0 === t || -1 === t ? -1 : t, this.unWrap(), this.$userItems.eq(t).remove(), void this.setVars())
        }
    };
    t.fn.owlCarousel = function (e) {
        return this.each(function () {
            if (!0 === t(this).data("owl-init"))return !1;
            t(this).data("owl-init", !0);
            var i = Object.create(n);
            i.init(e, this), t.data(this, "owlCarousel", i)
        })
    }, t.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: e,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document), function (t) {
    function e(t, e) {
        return this.settings = this.getSettings(t, e), this.$element = e, this
    }

    t.fn.LiteTooltip = function (i, n) {
        return this.each(function () {
            var n = t.extend({}, t.fn.LiteTooltip.defaultSettings, i || {}), a = t(this), o = new e(n, a);
            "" != o.settings.title && (a.is("input") || a.css({cursor: "pointer"}), "hoverable" == o.settings.trigger ? (this.toggle = !1, a.bind("mouseenter", {
                settings: o.settings,
                element: a,
                $plugin: o,
                $toggle: this.toggle
            }, o.mouseOverHandler), a.bind("mouseleave", {
                settings: o.settings,
                element: a,
                $plugin: o,
                $toggle: this.toggle
            }, o.mouseOutHandler)) : "hover" == o.settings.trigger ? (a.bind("mouseenter", {
                settings: o.settings,
                element: a,
                $plugin: o
            }, o.mouseOverHandler), a.bind("mouseleave", {
                settings: o.settings,
                element: a,
                $plugin: o
            }, o.mouseOutHandler)) : "focus" == o.settings.trigger ? (a.bind("focus", {
                settings: o.settings,
                element: a,
                $plugin: o
            }, o.mouseOverHandler), a.bind("blur", {
                settings: o.settings,
                element: a,
                $plugin: o
            }, o.mouseOutHandler)) : "click" == o.settings.trigger && (this.toggle = !1, a.bind("click", {
                settings: o.settings,
                element: a,
                $plugin: o,
                $toggle: this.toggle
            }, o.mouseOverHandler), o.settings.issticky || a.bind("mouseleave", {
                settings: o.settings,
                element: a,
                $plugin: o,
                $toggle: this.toggle
            }, o.mouseOutHandler)))
        })
    }, e.prototype = {
        getSettings: function (e, i) {
            var n = null == i.data("issticky") || "true" == i.data("issticky"), a = t.extend({}, e, {
                location: i.data("location"),
                title: i.data("title"),
                backcolor: i.data("backcolor"),
                textalign: i.data("textalign"),
                trigger: i.data("trigger"),
                textcolor: i.data("textcolor"),
                opacity: i.data("opacity"),
                templatename: i.data("templatename"),
                width: i.data("width"),
                margin: i.data("margin"),
                padding: i.data("padding"),
                delay: i.data("delay"),
                issticky: n,
                container: i.data("container"),
                shadow: i.data("shadow")
            });
            return a
        }, mouseOverHandler: function (e) {
            if ("function" == typeof e.data.settings.onUpdate && (e.data.settings.title = e.data.settings.onUpdate.call(this)), e.data.element.is("input") && "" != e.data.element.val())return !1;
            if ("click" == e.data.settings.trigger) {
                if (e.data.$toggle)return e.data.$toggle = !1, this.toggle = !1, !1;
                e.data.$toggle = !0, this.toggle = !0, e.data.element.unbind("click"), e.data.element.bind("click", {
                    settings: e.data.settings,
                    element: e.data.element,
                    $plugin: e.data.$plugin,
                    $toggle: e.data.$toggle
                }, e.data.$plugin.mouseOutHandler)
            }
            var i = e.data.element, n = e.data.settings, a = parseInt(n.margin.toString().replace("px", "")), o = parseInt(n.padding.toString().replace("px", "")), s = parseInt(n.width.toString().replace("px", "")), r = "body" == n.container ? n.location : "none", l = n.backcolor, c = n.textcolor, u = n.textalign, d = n.templatename, f = n.delay, p = t(n.template);
            p.css({opacity: n.opacity}), p.css("visibility", "visible"), p.find(".tooltip-content").css({
                background: l,
                "text-align": u
            }).html(n.title + n.clearfix), p.find(".tooltip-content").css({
                color: c,
                padding: o + "px"
            }), 1 == n.shadow && p.find(".tooltip-content").css({"box-shadow": "1px 1px 3px 0px #888888"});
            var h = r, m = r.split("-")[0], g = h, v = m;
            p.removeClass(r).addClass(h), p.find(".tooltip-arrow").removeClass(r).addClass(h).css("border-" + m + "-color", l);
            var y = n.container;
            if ("body" != n.container ? (p.addClass("incontainer"), y = "#" + n.container, t(y).children().each(function () {
                    t(this).remove()
                })) : (p.removeClass("incontainer"), y = "body"), t(y).append(p), "click" == e.data.settings.trigger) {
                var b = t('<div id="tooltip-clickoutside"></div>');
                b.css({
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: t(document).scrollTop() + "px",
                    left: "0px"
                }), t("body").append(b), b.bind("click", {
                    settings: e.data.settings,
                    element: e.data.element,
                    $plugin: e.data.$plugin,
                    $toggle: e.data.$toggle
                }, e.data.$plugin.mouseOutHandler), e.data.$toggle = !1, this.toggle = !1
            } else"hoverable" == e.data.settings.trigger && e.data.element.unbind("mouseenter");
            if ("body" == n.container) {
                p.offset({top: 0, left: 0});
                var w = p.outerWidth(), _ = p.outerHeight(), x = t(document).width(), C = scrollbarWidth(), S = t(document).width() - t(window).width();
                S > 0 && (x -= C), x > t(window).width() && (x = t(window).width() - C);
                var k = t(document).height();
                S > C && (k -= C), 0 != s ? (2 * s > x ? s = Math.floor(x / 2 - 30) : s -= 30, 1.5 * s > x / 2 && (s = Math.floor(x / 2 - 30))) : s = 680 > x ? Math.floor(x / 2 - 30) : 340, p.css({"max-width": s}), w = p.outerWidth(), _ = p.outerHeight();
                var I = i.context, T = I.offsetWidth, $ = I.offsetHeight, P = i.offset().top, E = i.offset().left;
                if ("area" == I.tagName.toLowerCase()) {
                    var M = I.parentElement.getAttribute("name"), A = I.getAttribute("shape").toLowerCase(), j = t("img[usemap='#" + M + "']").offset().top, N = t("img[usemap='#" + M + "']").offset().left, F = parseInt(I.getAttribute("coords").split(",")[0]), L = parseInt(I.getAttribute("coords").split(",")[1]), O = parseInt(I.getAttribute("coords").split(",")[2]), V = parseInt(I.getAttribute("coords").split(",")[3] || O), D = {
                        top: parseInt(j + L),
                        left: parseInt(N + F)
                    };
                    if ("circle" == A && (D = {
                            top: parseInt(j + L - O),
                            left: parseInt(N + F - O)
                        }, O *= 2, V *= 2), "rect" == A && (D = {
                            top: parseInt(j + L),
                            left: parseInt(N + F)
                        }, O -= F, V -= L), "poly" == A) {
                        for (var Q = new Array, W = I.getAttribute("coords").split(","), H = 0; H < W.length;)Q.push({
                            x: parseInt(W[H]),
                            y: parseInt(W[H + 1])
                        }), H += 2;
                        Q.sort(function (t, e) {
                            var i = t.x, n = e.x;
                            return i == n ? 0 : i < n ? 1 : -1
                        });
                        var z = Q[0].x;
                        Q.sort(function (t, e) {
                            var i = t.y, n = e.y;
                            return i == n ? 0 : i < n ? 1 : -1
                        });
                        var R = Q[0].y;
                        Q.sort(function (t, e) {
                            var i = t.x, n = e.x;
                            return i == n ? 0 : i > n ? 1 : -1
                        });
                        var q = Q[0].x;
                        Q.sort(function (t, e) {
                            var i = t.y, n = e.y;
                            return i == n ? 0 : i > n ? 1 : -1
                        });
                        var B = Q[0].y;
                        D = {top: parseInt(j + B), left: parseInt(N + q)}, O = z - q, V = R - B
                    }
                    E = D.left, P = D.top, T = O, $ = V
                }
                E = Math.round(E), P = Math.round(P), T = Math.round(T), $ = Math.round($), p.offset({top: 0, left: 0});
                var X;
                switch (r) {
                    case"top":
                        X = {top: P - _ - a, left: E - w / 2 + T / 2};
                        break;
                    case"top-left":
                        X = {top: P - _ - a, left: E};
                        break;
                    case"top-right":
                        X = {top: P - _ - a, left: E - w + T};
                        break;
                    case"right":
                        X = {top: P + $ / 2 - _ / 2, left: E + T + a};
                        break;
                    case"right-top":
                        X = {top: P + $ - _ + 8, left: E + T + a};
                        break;
                    case"right-bottom":
                        X = {top: P - 8, left: E + T + a};
                        break;
                    case"bottom":
                        X = {top: P + $ + a, left: E - w / 2 + T / 2};
                        break;
                    case"bottom-left":
                        X = {top: P + $ + a, left: E};
                        break;
                    case"bottom-right":
                        X = {top: P + $ + a, left: E - w + T};
                        break;
                    case"left":
                        X = {top: P + $ / 2 - _ / 2, left: E - w - a};
                        break;
                    case"left-top":
                        X = {top: P + $ - _ + 8, left: E - w - a};
                        break;
                    case"left-bottom":
                        X = {top: P - 8, left: E - w - a}
                }
                var G = {top: 0, left: 0};
                G.left = X.left, G.top = X.top;
                var U = (null != h.match("bottom") || "left" == h || "right" == h) && ("left" == h || "right" == h ? _ / 2 : _) > k - P - $;
                if ((X.left < 0 || X.top < 0 || X.left + w > x || U) && ("top" == m || "bottom" == m || "left" == m || "right" == m)) {
                    var Y = !1;
                    switch (m) {
                        case"top":
                            X.top = P - _ - a, X.left = E - w / 2 + T / 2, Y = !0;
                            break;
                        case"bottom":
                            X.top = P - _ - a, X.left = E - w / 2 + T / 2, Y = !0;
                            break;
                        case"left":
                            var Z = h.replace(m + "-", "");
                            "top" == Z ? (m = "top", h = "top-left", p.removeClass(g).addClass(h), p.find(".tooltip-arrow").removeClass(g).css("border-" + v + "-color", "").addClass(h).css("border-" + m + "-color", l), v = "top", g = "top-left", p.removeClass(r).addClass(h), p.find(".tooltip-arrow").removeClass(r).addClass(h).css("border-" + m + "-color", l), w = p.outerWidth(), _ = p.outerHeight(), X.top = P - _ - a, X.left = E - w / 2 + T / 2, G.left = E, G.top = P - _ - a, U = (null != h.match("bottom") || "left" == h || "right" == h) && ("left" == h || "right" == h ? _ / 2 : _) > k - P - $, X.left < 0 || X.top < 0 || X.left + w > x || U ? Y = !0 : (X.left = G.left, X.top = G.top)) : "bottom" == Z ? (m = "bottom", h = "bottom-left", p.removeClass(g).addClass(h), p.find(".tooltip-arrow").removeClass(g).css("border-" + v + "-color", "").addClass(h).css("border-" + m + "-color", l), v = "bottom", g = "bottom-left", p.removeClass(r).addClass(h), p.find(".tooltip-arrow").removeClass(r).addClass(h).css("border-" + m + "-color", l), w = p.outerWidth(), _ = p.outerHeight(), X.top = P + $ + a, X.left = E - w / 2 + T / 2, G.left = E, G.top = P + $ + a, U = (null != h.match("bottom") || "left" == h || "right" == h) && ("left" == h || "right" == h ? _ / 2 : _) > k - P - $, X.left < 0 || X.top < 0 || X.left + w > x || U ? Y = !0 : (X.left = G.left, X.top = G.top)) : (m = "top", h = "top", p.removeClass(g).addClass(h), p.find(".tooltip-arrow").removeClass(g).css("border-" + v + "-color", "").addClass(h).css("border-" + m + "-color", l), v = "top", g = "top", p.removeClass(r).addClass(h), p.find(".tooltip-arrow").removeClass(r).addClass(h).css("border-" + m + "-color", l), w = p.outerWidth(), _ = p.outerHeight(), X.top = P - _ - a, X.left = E - w / 2 + T / 2, G.left = X.left, G.top = X.top, U = (null != h.match("bottom") || "left" == h || "right" == h) && ("left" == h || "right" == h ? _ / 2 : _) > k - P - $, X.left < 0 || X.top < 0 || X.left + w > x || U ? Y = !0 : (X.left = G.left, X.top = G.top));
                            break;
                        case"right":
                            var Z = h.replace(m + "-", "");
                            "top" == Z ? (m = "top", h = "top-left", p.removeClass(g).addClass(h), p.find(".tooltip-arrow").removeClass(g).css("border-" + v + "-color", "").addClass(h).css("border-" + m + "-color", l), v = "top", g = "top-left", p.removeClass(r).addClass(h), p.find(".tooltip-arrow").removeClass(r).addClass(h).css("border-" + m + "-color", l), w = p.outerWidth(), _ = p.outerHeight(), X.top = P - _ - a, X.left = E - w / 2 + T / 2, G.left = E, G.top = P - _ - a, U = (null != h.match("bottom") || "left" == h || "right" == h) && ("left" == h || "right" == h ? _ / 2 : _) > k - P - $, X.left < 0 || X.top < 0 || X.left + w > x || U ? Y = !0 : (X.left = G.left, X.top = G.top)) : "bottom" == Z ? (m = "bottom", h = "bottom-left", p.removeClass(g).addClass(h), p.find(".tooltip-arrow").removeClass(g).css("border-" + v + "-color", "").addClass(h).css("border-" + m + "-color", l), v = "bottom", g = "bottom-left", p.removeClass(r).addClass(h), p.find(".tooltip-arrow").removeClass(r).addClass(h).css("border-" + m + "-color", l), w = p.outerWidth(), _ = p.outerHeight(), X.top = P - _ - a, X.left = E - w / 2 + T / 2, G.left = E, G.top = P + $ + a, U = (null != h.match("bottom") || "left" == h || "right" == h) && ("left" == h || "right" == h ? _ / 2 : _) > k - P - $, X.left < 0 || X.top < 0 || X.left + w > x || U ? Y = !0 : (X.left = G.left, X.top = G.top)) : (m = "top", h = "top", p.removeClass(g).addClass(h), p.find(".tooltip-arrow").removeClass(g).css("border-" + v + "-color", "").addClass(h).css("border-" + m + "-color", l), v = "top", g = "top", p.removeClass(r).addClass(h), p.find(".tooltip-arrow").removeClass(r).addClass(h).css("border-" + m + "-color", l), w = p.outerWidth(), _ = p.outerHeight(), X.top = P - _ - a, X.left = E - w / 2 + T / 2, G.left = X.left, G.top = X.top, U = (null != h.match("bottom") || "left" == h || "right" == h) && ("left" == h || "right" == h ? _ / 2 : _) > k - P - $, X.left < 0 || X.top < 0 || X.left + w > x || U ? Y = !0 : (X.left = G.left, X.top = G.top))
                    }
                    if (Y) {
                        var J = !1, K = !1;
                        X.top < 0 ? (m = "bottom", h = "bottom", X.top = P + $ + a, K = !0, X.left < 0 && (m = "bottom", h = "bottom-left", X.left = E, J = !0), X.left + w > x && (X.left = E - w + T, X.left < 0 ? (m = "bottom", h = "bottom", X.left = E - w / 2 + T / 2, J = !0) : (m = "bottom", h = "bottom-right", X.left = E - w + T, J = !0))) : (m = "top", h = "top", X.top = P - _ - a, K = !1, X.left < 0 && (m = "top", h = "top-left", X.left = E, J = !0), X.left + w > x && (X.left = E - w + T, X.left < 0 ? (m = "top", h = "top", X.left = E - w / 2 + T / 2, J = !0) : (m = "top", h = "top-right", X.left = E - w + T, J = !0))), J || (K ? (h = g.replace("top", "bottom"), m = v.replace("top", "bottom"), G.left < 0 ? "bottom" != m && "top" != m || (h = h.replace("right", "left"), X.left = E) : X.left = G.left) : (h = g.replace("bottom", "top"), m = v.replace("bottom", "top"), G.left < 0 ? "bottom" != m && "top" != m || (h = h.replace("right", "left"), X.left = E) : X.left = G.left))
                    }
                }
                if (p.removeClass(g).addClass(h), p.find(".tooltip-arrow").removeClass(g).css("border-" + v + "-color", "").addClass(h).css("border-" + m + "-color", l), "" != d)if (p.find(".tooltip-content > .template").hasClass("template")) {
                    p.find(".tooltip-content > .template").addClass(d);
                    var tt = p.find("." + d).css("background-color");
                    p.find(".tooltip-arrow").css("border-" + v + "-color", ""), p.find(".tooltip-arrow").css("border-" + m + "-color", tt), p.find(".tooltip-content").css({background: tt})
                } else if (p.find(".tooltip-content > .tooltip-menu").hasClass("tooltip-menu")) {
                    p.find(".tooltip-content > .tooltip-menu").addClass(d);
                    var tt = p.find("." + d).css("background-color");
                    p.find(".tooltip-arrow").css("border-" + v + "-color", ""), p.find(".tooltip-arrow").css("border-" + m + "-color", tt), p.find(".tooltip-content").css({background: tt})
                }
                p.find(".tooltip-content > .video-wrapper").css({width: p.width() - 2 * o + "px"}), p.offset(X)
            }
            switch (p.hide(), i.removeAttr("title"), i.removeAttr("alt"), "hoverable" != e.data.settings.trigger && "click" != e.data.settings.trigger || (f = 0), m) {
                case"top":
                    p.delay(f).css({top: "-=20", opacity: 0, display: "block"}).stop(!0, !0).animate({
                        top: "+=20",
                        opacity: n.opacity
                    }, 150);
                    break;
                case"bottom":
                    p.delay(f).css({top: "+=20", opacity: 0, display: "block"}).stop(!0, !0).animate({
                        top: "-=20",
                        opacity: n.opacity
                    }, 150);
                    break;
                case"left":
                    p.delay(f).css({left: "-=20", opacity: 0, display: "block"}).stop(!0, !0).animate({
                        left: "+=20",
                        opacity: n.opacity
                    }, 150);
                    break;
                case"right":
                    p.delay(f).css({left: "+=20", opacity: 0, display: "block"}).stop(!0, !0).animate({
                        left: "-=20",
                        opacity: n.opacity
                    }, 150);
                    break;
                default:
                    p.delay(f).css({opacity: 0, display: "block"}).stop(!0, !0).animate({opacity: n.opacity}, 150)
            }
            return e.data.$plugin.tooltip = p, e.data.$plugin.location = r, e.data.$plugin.tooltip_arrow_border = m, p = null, !1
        }, mouseOutHandler: function (e) {
            var i = e.data.$plugin.tooltip, n = (e.data.$plugin.location, !1);
            if ("hoverable" != e.data.settings.trigger ? "hover" == e.data.settings.trigger ? (t(i).delay(e.data.settings.delay), n = !0) : (n = !0, "click" == e.data.settings.trigger && (e.data.settings.issticky ? n = !0 : (e.data.settings.interval = setInterval(function () {
                    t(i).fadeOut(0, function () {
                        t(e.data.$plugin.tooltip).remove()
                    }), clearInterval(e.data.settings.interval), this.toggle = !1, e.data.$toggle = !1, e.data.element.unbind("click"), e.data.element.unbind("mouseleave"), e.data.element.bind("click", {
                        settings: e.data.settings,
                        element: e.data.element,
                        $plugin: e.data.$plugin,
                        $toggle: !1
                    }, e.data.$plugin.mouseOverHandler), e.data.element.bind("mouseleave", {
                        settings: e.data.settings,
                        element: e.data.element,
                        $plugin: e.data.$plugin,
                        $toggle: !1
                    }, e.data.$plugin.mouseOutHandler)
                }, 0 == e.data.settings.delay ? 2e3 : e.data.settings.delay), e.data.element.unbind("mouseleave"), t(i).find(".tooltip-content").bind("mouseenter", {
                    settings: e.data.settings,
                    element: e.data.element,
                    $plugin: e.data.$plugin,
                    $toggle: !0
                }, function () {
                    e.data.element.unbind("click"), e.data.element.unbind("mouseleave"), this.toggle = !0, e.data.$toggle = !0, clearInterval(e.data.settings.interval)
                }), t(i).find(".tooltip-content").bind("mouseleave", {
                    settings: e.data.settings,
                    element: e.data.element,
                    $plugin: e.data.$plugin,
                    $toggle: e.data.$toggle
                }, function () {
                    t(i).fadeOut(0, function () {
                        t(e.data.$plugin.tooltip).remove()
                    }), this.toggle = !1, e.data.$toggle = !1, e.data.element.unbind("click"), e.data.element.unbind("mouseleave"), e.data.element.bind("click", {
                        settings: e.data.settings,
                        element: e.data.element,
                        $plugin: e.data.$plugin,
                        $toggle: !1
                    }, e.data.$plugin.mouseOverHandler), e.data.element.bind("mouseleave", {
                        settings: e.data.settings,
                        element: e.data.element,
                        $plugin: e.data.$plugin,
                        $toggle: !1
                    }, e.data.$plugin.mouseOutHandler)
                }), n = !1))) : (e.data.settings.interval = setInterval(function () {
                    t(i).fadeOut(0, function () {
                        t(e.data.$plugin.tooltip).remove()
                    }), clearInterval(e.data.settings.interval), e.data.element.unbind("mouseleave"), e.data.element.unbind("mouseenter"), e.data.element.bind("mouseenter", {
                        settings: e.data.settings,
                        element: e.data.element,
                        $plugin: e.data.$plugin,
                        $toggle: !1
                    }, e.data.$plugin.mouseOverHandler), e.data.element.bind("mouseleave", {
                        settings: e.data.settings,
                        element: e.data.element,
                        $plugin: e.data.$plugin,
                        $toggle: !1
                    }, e.data.$plugin.mouseOutHandler)
                }, 0 == e.data.settings.delay ? 2e3 : e.data.settings.delay), e.data.element.unbind("mouseleave"), t(i).find(".tooltip-content").bind("mouseenter", {
                    settings: e.data.settings,
                    element: e.data.element,
                    $plugin: e.data.$plugin,
                    $toggle: !0
                }, function () {
                    e.data.element.unbind("mouseenter"), e.data.element.unbind("mouseleave"), this.toggle = !0, e.data.$toggle = !0, clearInterval(e.data.settings.interval)
                }), t(i).find(".tooltip-content").bind("mouseleave", {
                    settings: e.data.settings,
                    element: e.data.element,
                    $plugin: e.data.$plugin,
                    $toggle: !0
                }, function () {
                    t(i).fadeOut(0, function () {
                        t(e.data.$plugin.tooltip).remove()
                    }), this.toggle = !1, e.data.$toggle = !1, e.data.element.unbind("mouseleave"), e.data.element.unbind("mouseenter"), e.data.element.bind("mouseenter", {
                        settings: e.data.settings,
                        element: e.data.element,
                        $plugin: e.data.$plugin,
                        $toggle: !1
                    }, e.data.$plugin.mouseOverHandler), e.data.element.bind("mouseleave", {
                        settings: e.data.settings,
                        element: e.data.element,
                        $plugin: e.data.$plugin,
                        $toggle: !1
                    }, e.data.$plugin.mouseOutHandler)
                }), n = !1), n) {
                switch (e.data.$plugin.tooltip_arrow_border) {
                    case"top":
                        t(i).stop(!0, !0).animate({top: "-=20", opacity: 0}, 150, function () {
                            t(e.data.$plugin.tooltip).remove()
                        });
                        break;
                    case"bottom":
                        t(i).stop(!0, !0).animate({top: "+=20", opacity: 0}, 150, function () {
                            t(e.data.$plugin.tooltip).remove()
                        });
                        break;
                    case"left":
                        t(i).stop(!0, !0).animate({left: "-=20", opacity: 0}, 150, function () {
                            t(e.data.$plugin.tooltip).remove()
                        });
                        break;
                    case"right":
                        t(i).stop(!0, !0).animate({left: "+=20", opacity: 0}, 150, function () {
                            t(e.data.$plugin.tooltip).remove()
                        })
                }
                t(e.data.$plugin.tooltip).remove()
            }
            return "click" == e.data.settings.trigger && e.data.$toggle && (t("body").find("#tooltip-clickoutside").remove(), this.toggle = !1, e.data.$toggle = !1, e.data.element.unbind("click"), e.data.element.unbind("mouseleave"), e.data.element.bind("click", {
                settings: e.data.settings,
                element: e.data.element,
                $plugin: e.data.$plugin,
                $toggle: e.data.$toggle
            }, e.data.$plugin.mouseOverHandler), e.data.settings.issticky || e.data.element.bind("mouseleave", {
                settings: e.data.settings,
                element: e.data.element,
                $plugin: e.data.$plugin,
                $toggle: e.data.$toggle
            }, e.data.$plugin.mouseOutHandler)), !1
        }
    }, scrollbarWidth = function () {
        var e = t('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
        t("body").append(e);
        var i = t("div", e).innerWidth();
        e.css("overflow", "scroll");
        var n = t("div", e).innerWidth();
        return t(e).remove(), i - n
    }, t.fn.LiteTooltip.defaultSettings = {
        location: "top",
        title: "",
        opacity: .89,
        backcolor: "#000000",
        textcolor: "#ffffff",
        template: '<div class="litetooltip-wrapper"><div class="tooltip-arrow"></div><div class="tooltip-content"></div></div>',
        margin: 5,
        padding: 10,
        width: 0,
        textalign: "center",
        trigger: "hover",
        templatename: "",
        delay: 0,
        issticky: !0,
        clearfix: '<div class="clear"></div>',
        container: "body",
        shadow: 1
    }
}(jQuery), !function (t, e, i) {
    "use strict";
    function n(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return t.prop ? t.prop.apply(t, e) : t.attr.apply(t, e)
    }

    function a(t, e, i) {
        var n, a;
        for (n in i)i.hasOwnProperty(n) && (a = n.replace(/ |$/g, e.eventNamespace), t.bind(a, i[n]))
    }

    function o(t, e, i) {
        a(t, i, {
            focus: function () {
                e.addClass(i.focusClass)
            }, blur: function () {
                e.removeClass(i.focusClass), e.removeClass(i.activeClass)
            }, mouseenter: function () {
                e.addClass(i.hoverClass)
            }, mouseleave: function () {
                e.removeClass(i.hoverClass), e.removeClass(i.activeClass)
            }, "mousedown touchbegin": function () {
                t.is(":disabled") || e.addClass(i.activeClass)
            }, "mouseup touchend": function () {
                e.removeClass(i.activeClass)
            }
        })
    }

    function s(t, e) {
        t.removeClass(e.hoverClass + " " + e.focusClass + " " + e.activeClass)
    }

    function r(t, e, i) {
        i ? t.addClass(e) : t.removeClass(e)
    }

    function l(t, e, i) {
        var n = "checked", a = e.is(":" + n);
        e.prop ? e.prop(n, a) : a ? e.attr(n, n) : e.removeAttr(n), r(t, i.checkedClass, a)
    }

    function c(t, e, i) {
        r(t, i.disabledClass, e.is(":disabled"))
    }

    function u(t, e, i) {
        switch (i) {
            case"after":
                return t.after(e), t.next();
            case"before":
                return t.before(e), t.prev();
            case"wrap":
                return t.wrap(e), t.parent()
        }
        return null
    }

    function d(t, i, a) {
        var o, s, r;
        return a || (a = {}), a = e.extend({
            bind: {},
            divClass: null,
            divWrap: "wrap",
            spanClass: null,
            spanHtml: null,
            spanWrap: "wrap"
        }, a), o = e("<div />"), s = e("<span />"), i.autoHide && t.is(":hidden") && "none" === t.css("display") && o.hide(), a.divClass && o.addClass(a.divClass), i.wrapperClass && o.addClass(i.wrapperClass), a.spanClass && s.addClass(a.spanClass), r = n(t, "id"), i.useID && r && n(o, "id", i.idPrefix + "-" + r), a.spanHtml && s.html(a.spanHtml), o = u(t, o, a.divWrap), s = u(t, s, a.spanWrap), c(o, t, i), {
            div: o,
            span: s
        }
    }

    function f(t, i) {
        var n;
        return i.wrapperClass ? (n = e("<span />").addClass(i.wrapperClass), n = u(t, n, "wrap")) : null
    }

    function p() {
        var i, n, a, o;
        return o = "rgb(120,2,153)", n = e('<div style="width:0;height:0;color:' + o + '">'), e("body").append(n), a = n.get(0), i = t.getComputedStyle ? t.getComputedStyle(a, "").color : (a.currentStyle || a.style || {}).color, n.remove(), i.replace(/ /g, "") !== o
    }

    function h(t) {
        return t ? e("<span />").text(t).html() : ""
    }

    function m() {
        return navigator.cpuClass && !navigator.product
    }

    function g() {
        return void 0 !== t.XMLHttpRequest
    }

    function v(t) {
        var e;
        return !(!t[0].multiple && (e = n(t, "size"), !e || e <= 1))
    }

    function y() {
        return !1
    }

    function b(t, e) {
        var i = "none";
        a(t, e, {"selectstart dragstart mousedown": y}), t.css({
            MozUserSelect: i,
            msUserSelect: i,
            webkitUserSelect: i,
            userSelect: i
        })
    }

    function w(t, e, i) {
        var n = t.val();
        "" === n ? n = i.fileDefaultHtml : (n = n.split(/[\/\\]+/), n = n[n.length - 1]), e.text(n)
    }

    function _(t, e, i) {
        var n, a;
        for (n = [], t.each(function () {
            var t;
            for (t in e)Object.prototype.hasOwnProperty.call(e, t) && (n.push({
                el: this,
                name: t,
                old: this.style[t]
            }), this.style[t] = e[t])
        }), i(); n.length;)a = n.pop(), a.el.style[a.name] = a.old
    }

    function x(t, e) {
        var i;
        i = t.parents(), i.push(t[0]), i = i.not(":visible"), _(i, {
            visibility: "hidden",
            display: "block",
            position: "absolute"
        }, e)
    }

    function C(t, e) {
        return function () {
            t.unwrap().unwrap().unbind(e.eventNamespace)
        }
    }

    var S = !0, k = !1, I = [{
        match: function (t) {
            return t.is("a, button, :submit, :reset, input[type='button']")
        }, apply: function (e, i) {
            var r, l, u, f, p;
            return l = i.submitDefaultHtml, e.is(":reset") && (l = i.resetDefaultHtml), f = e.is("a, button") ? function () {
                return e.html() || l
            } : function () {
                return h(n(e, "value")) || l
            }, u = d(e, i, {
                divClass: i.buttonClass,
                spanHtml: f()
            }), r = u.div, o(e, r, i), p = !1, a(r, i, {
                "click touchend": function () {
                    var i, a, o, s;
                    p || e.is(":disabled") || (p = !0, e[0].dispatchEvent ? (i = document.createEvent("MouseEvents"), i.initEvent("click", !0, !0), a = e[0].dispatchEvent(i), e.is("a") && a && (o = n(e, "target"), s = n(e, "href"), o && "_self" !== o ? t.open(s, o) : document.location.href = s)) : e.click(), p = !1)
                }
            }), b(r, i), {
                remove: function () {
                    return r.after(e), r.remove(), e.unbind(i.eventNamespace), e
                }, update: function () {
                    s(r, i), c(r, e, i), e.detach(), u.span.html(f()).append(e)
                }
            }
        }
    }, {
        match: function (t) {
            return t.is(":checkbox")
        }, apply: function (t, e) {
            var i, n, r;
            return i = d(t, e, {divClass: e.checkboxClass}), n = i.div, r = i.span, o(t, n, e), a(t, e, {
                "click touchend": function () {
                    l(r, t, e)
                }
            }), l(r, t, e), {
                remove: C(t, e), update: function () {
                    s(n, e), r.removeClass(e.checkedClass), l(r, t, e), c(n, t, e)
                }
            }
        }
    }, {
        match: function (t) {
            return t.is(":file")
        }, apply: function (t, i) {
            function r() {
                w(t, p, i)
            }

            var l, f, p, h;
            return l = d(t, i, {
                divClass: i.fileClass,
                spanClass: i.fileButtonClass,
                spanHtml: i.fileButtonHtml,
                spanWrap: "after"
            }), f = l.div, h = l.span, p = e("<span />").html(i.fileDefaultHtml), p.addClass(i.filenameClass), p = u(t, p, "after"), n(t, "size") || n(t, "size", f.width() / 10), o(t, f, i), r(), m() ? a(t, i, {
                click: function () {
                    t.trigger("change"), setTimeout(r, 0)
                }
            }) : a(t, i, {change: r}), b(p, i), b(h, i), {
                remove: function () {
                    return p.remove(), h.remove(), t.unwrap().unbind(i.eventNamespace)
                }, update: function () {
                    s(f, i), w(t, p, i), c(f, t, i)
                }
            }
        }
    }, {
        match: function (t) {
            if (t.is("input")) {
                var e = (" " + n(t, "type") + " ").toLowerCase(), i = " color date datetime datetime-local email month number password search tel text time url week ";
                return i.indexOf(e) >= 0
            }
            return !1
        }, apply: function (t, e) {
            var i, a;
            return i = n(t, "type"), t.addClass(e.inputClass), a = f(t, e), o(t, t, e), e.inputAddTypeAsClass && t.addClass(i), {
                remove: function () {
                    t.removeClass(e.inputClass), e.inputAddTypeAsClass && t.removeClass(i), a && t.unwrap()
                }, update: y
            }
        }
    }, {
        match: function (t) {
            return t.is(":radio")
        }, apply: function (t, i) {
            var r, u, f;
            return r = d(t, i, {divClass: i.radioClass}), u = r.div, f = r.span, o(t, u, i), a(t, i, {
                "click touchend": function () {
                    e.uniform.update(e(':radio[name="' + n(t, "name") + '"]'))
                }
            }), l(f, t, i), {
                remove: C(t, i), update: function () {
                    s(u, i), l(f, t, i), c(u, t, i)
                }
            }
        }
    }, {
        match: function (t) {
            return !(!t.is("select") || v(t))
        }, apply: function (t, i) {
            var n, r, l, u;
            return i.selectAutoWidth && x(t, function () {
                u = t.width()
            }), n = d(t, i, {
                divClass: i.selectClass,
                spanHtml: (t.find(":selected:first") || t.find("option:first")).html(),
                spanWrap: "before"
            }), r = n.div, l = n.span, i.selectAutoWidth ? x(t, function () {
                _(e([l[0], r[0]]), {display: "block"}, function () {
                    var t;
                    t = l.outerWidth() - l.width(), r.width(u + t), l.width(u)
                })
            }) : r.addClass("fixedWidth"), o(t, r, i), a(t, i, {
                change: function () {
                    l.html(t.find(":selected").html()), r.removeClass(i.activeClass)
                }, "click touchend": function () {
                    var e = t.find(":selected").html();
                    l.html() !== e && t.trigger("change")
                }, keyup: function () {
                    l.html(t.find(":selected").html())
                }
            }), b(l, i), {
                remove: function () {
                    return l.remove(), t.unwrap().unbind(i.eventNamespace), t
                }, update: function () {
                    i.selectAutoWidth ? (e.uniform.restore(t), t.uniform(i)) : (s(r, i), t[0].selectedIndex = t[0].selectedIndex, l.html(t.find(":selected").html()), c(r, t, i))
                }
            }
        }
    }, {
        match: function (t) {
            return !(!t.is("select") || !v(t))
        }, apply: function (t, e) {
            var i;
            return t.addClass(e.selectMultiClass), i = f(t, e), o(t, t, e), {
                remove: function () {
                    t.removeClass(e.selectMultiClass), i && t.unwrap()
                }, update: y
            }
        }
    }, {
        match: function (t) {
            return t.is("textarea")
        }, apply: function (t, e) {
            var i;
            return t.addClass(e.textareaClass), i = f(t, e), o(t, t, e), {
                remove: function () {
                    t.removeClass(e.textareaClass), i && t.unwrap()
                }, update: y
            }
        }
    }];
    m() && !g() && (S = !1), e.uniform = {
        defaults: {
            activeClass: "active",
            autoHide: !0,
            buttonClass: "button",
            checkboxClass: "checker",
            checkedClass: "checked",
            disabledClass: "disabled",
            eventNamespace: ".uniform",
            fileButtonClass: "action",
            fileButtonHtml: "Choose File",
            fileClass: "uploader",
            fileDefaultHtml: "No file selected",
            filenameClass: "filename",
            focusClass: "focus",
            hoverClass: "hover",
            idPrefix: "uniform",
            inputAddTypeAsClass: !0,
            inputClass: "uniform-input",
            radioClass: "radio",
            resetDefaultHtml: "Reset",
            resetSelector: !1,
            selectAutoWidth: !0,
            selectClass: "selector",
            selectMultiClass: "uniform-multiselect",
            submitDefaultHtml: "Submit",
            textareaClass: "uniform",
            useID: !0,
            wrapperClass: null
        }, elements: []
    }, e.fn.uniform = function (i) {
        var n = this;
        return i = e.extend({}, e.uniform.defaults, i), k || (k = !0, p() && (S = !1)), S ? (i.resetSelector && e(i.resetSelector).mouseup(function () {
            t.setTimeout(function () {
                e.uniform.update(n)
            }, 10)
        }), this.each(function () {
            var t, n, a, o = e(this);
            if (o.data("uniformed"))return void e.uniform.update(o);
            for (t = 0; t < I.length; t += 1)if (n = I[t], n.match(o, i))return a = n.apply(o, i), o.data("uniformed", a), void e.uniform.elements.push(o.get(0))
        })) : this
    }, e.uniform.restore = e.fn.uniform.restore = function (t) {
        t === i && (t = e.uniform.elements), e(t).each(function () {
            var t, i, n = e(this);
            i = n.data("uniformed"), i && (i.remove(), t = e.inArray(this, e.uniform.elements), t >= 0 && e.uniform.elements.splice(t, 1), n.removeData("uniformed"))
        })
    }, e.uniform.update = e.fn.uniform.update = function (t) {
        t === i && (t = e.uniform.elements), e(t).each(function () {
            var t, i = e(this);
            t = i.data("uniformed"), t && t.update(i, t.options)
        })
    }
}(this, jQuery);
var $jscomp = {
    scope: {}, findInternal: function (t, e, i) {
        t instanceof String && (t = String(t));
        for (var n = t.length, a = 0; a < n; a++) {
            var o = t[a];
            if (e.call(i, o, a, t))return {i: a, v: o}
        }
        return {i: -1, v: void 0}
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, i) {
    if (i.get || i.set)throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[e] = i.value)
}, $jscomp.getGlobal = function (t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function (t, e, i, n) {
    if (e) {
        for (i = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
            var a = t[n];
            a in i || (i[a] = {}), i = i[a]
        }
        t = t[t.length - 1], n = i[t], e = e(n), e != n && null != e && $jscomp.defineProperty(i, t, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
}, $jscomp.polyfill("Array.prototype.find", function (t) {
    return t ? t : function (t, e) {
        return $jscomp.findInternal(this, t, e).v
    }
}, "es6-impl", "es3"), function (t, e, i) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e || i)
}(function (t) {
    var e = function (e, i, n) {
        var a = {
            invalid: [], getCaret: function () {
                try {
                    var t, i = 0, n = e.get(0), o = document.selection, s = n.selectionStart;
                    return o && -1 === navigator.appVersion.indexOf("MSIE 10") ? (t = o.createRange(), t.moveStart("character", -a.val().length), i = t.text.length) : (s || "0" === s) && (i = s), i
                } catch (r) {
                }
            }, setCaret: function (t) {
                try {
                    if (e.is(":focus")) {
                        var i, n = e.get(0);
                        n.setSelectionRange ? n.setSelectionRange(t, t) : (i = n.createTextRange(), i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select())
                    }
                } catch (a) {
                }
            }, events: function () {
                e.on("keydown.mask", function (t) {
                    e.data("mask-keycode", t.keyCode || t.which), e.data("mask-previus-value", e.val())
                }).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", a.behaviour).on("paste.mask drop.mask", function () {
                    setTimeout(function () {
                        e.keydown().keyup()
                    }, 100)
                }).on("change.mask", function () {
                    e.data("changed", !0)
                }).on("blur.mask", function () {
                    r === a.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1)
                }).on("blur.mask", function () {
                    r = a.val()
                }).on("focus.mask", function (e) {
                    !0 === n.selectOnFocus && t(e.target).select()
                }).on("focusout.mask", function () {
                    n.clearIfNotMatch && !o.test(a.val()) && a.val("")
                })
            }, getRegexMask: function () {
                for (var t, e, n, a, o = [], r = 0; r < i.length; r++)(t = s.translation[i.charAt(r)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = t.optional, (t = t.recursive) ? (o.push(i.charAt(r)), a = {
                    digit: i.charAt(r),
                    pattern: e
                }) : o.push(n || t ? e + "?" : e)) : o.push(i.charAt(r).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return o = o.join(""), a && (o = o.replace(new RegExp("(" + a.digit + "(.*" + a.digit + ")?)"), "($1)?").replace(new RegExp(a.digit, "g"), a.pattern)), new RegExp(o)
            }, destroyEvents: function () {
                e.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            }, val: function (t) {
                var i = e.is("input") ? "val" : "text";
                return 0 < arguments.length ? (e[i]() !== t && e[i](t), i = e) : i = e[i](), i
            }, calculateCaretPosition: function (t, i) {
                var n = i.length, a = e.data("mask-previus-value"), o = a.length;
                return 8 === e.data("mask-keycode") && a !== i ? t -= i.slice(0, t).length - a.slice(0, t).length : a !== i && (t = t >= o ? n : t + (i.slice(0, t).length - a.slice(0, t).length)), t
            }, behaviour: function (i) {
                i = i || window.event, a.invalid = [];
                var n = e.data("mask-keycode");
                if (-1 === t.inArray(n, s.byPassKeys)) {
                    var n = a.getMasked(), o = a.getCaret();
                    return setTimeout(function (t, e) {
                        a.setCaret(a.calculateCaretPosition(t, e))
                    }, 10, o, n), a.val(n), a.setCaret(o), a.callbacks(i)
                }
            }, getMasked: function (t, e) {
                var o, r, l = [], c = void 0 === e ? a.val() : e + "", u = 0, d = i.length, f = 0, p = c.length, h = 1, m = "push", g = -1;
                n.reverse ? (m = "unshift", h = -1, o = 0, u = d - 1, f = p - 1, r = function () {
                    return -1 < u && -1 < f
                }) : (o = d - 1, r = function () {
                    return u < d && f < p
                });
                for (var v; r();) {
                    var y = i.charAt(u), b = c.charAt(f), w = s.translation[y];
                    w ? (b.match(w.pattern) ? (l[m](b), w.recursive && (-1 === g ? g = u : u === o && (u = g - h), o === g && (u -= h)), u += h) : b === v ? v = void 0 : w.optional ? (u += h, f -= h) : w.fallback ? (l[m](w.fallback), u += h, f -= h) : a.invalid.push({
                        p: f,
                        v: b,
                        e: w.pattern
                    }), f += h) : (t || l[m](y), b === y ? f += h : v = y, u += h)
                }
                return c = i.charAt(o), d !== p + 1 || s.translation[c] || l.push(c), l.join("")
            }, callbacks: function (t) {
                var o = a.val(), s = o !== r, l = [o, t, e, n], c = function (t, e, i) {
                    "function" == typeof n[t] && e && n[t].apply(this, i)
                };
                c("onChange", !0 === s, l), c("onKeyPress", !0 === s, l), c("onComplete", o.length === i.length, l), c("onInvalid", 0 < a.invalid.length, [o, t, e, a.invalid, n])
            }
        };
        e = t(e);
        var o, s = this, r = a.val();
        i = "function" == typeof i ? i(a.val(), void 0, e, n) : i, s.mask = i, s.options = n, s.remove = function () {
            var t = a.getCaret();
            return a.destroyEvents(), a.val(s.getCleanVal()), a.setCaret(t), e
        }, s.getCleanVal = function () {
            return a.getMasked(!0)
        }, s.getMaskedVal = function (t) {
            return a.getMasked(!1, t)
        }, s.init = function (r) {
            if (r = r || !1, n = n || {}, s.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, s.byPassKeys = t.jMaskGlobals.byPassKeys, s.translation = t.extend({}, t.jMaskGlobals.translation, n.translation), s = t.extend(!0, {}, s, n), o = a.getRegexMask(), r)a.events(), a.val(a.getMasked()); else {
                n.placeholder && e.attr("placeholder", n.placeholder), e.data("mask") && e.attr("autocomplete", "off"), r = 0;
                for (var l = !0; r < i.length; r++) {
                    var c = s.translation[i.charAt(r)];
                    if (c && c.recursive) {
                        l = !1;
                        break
                    }
                }
                l && e.attr("maxlength", i.length), a.destroyEvents(), a.events(), r = a.getCaret(), a.val(a.getMasked()), a.setCaret(r)
            }
        }, s.init(!e.is("input"))
    };
    t.maskWatchers = {};
    var i = function () {
        var i = t(this), a = {}, o = i.attr("data-mask");
        if (i.attr("data-mask-reverse") && (a.reverse = !0), i.attr("data-mask-clearifnotmatch") && (a.clearIfNotMatch = !0), "true" === i.attr("data-mask-selectonfocus") && (a.selectOnFocus = !0), n(i, o, a))return i.data("mask", new e(this, o, a))
    }, n = function (e, i, n) {
        n = n || {};
        var a = t(e).data("mask"), o = JSON.stringify;
        e = t(e).val() || t(e).text();
        try {
            return "function" == typeof i && (i = i(e)), "object" != typeof a || o(a.options) !== o(n) || a.mask !== i
        } catch (s) {
        }
    }, a = function (t) {
        var e, i = document.createElement("div");
        return t = "on" + t, e = t in i, e || (i.setAttribute(t, "return;"), e = "function" == typeof i[t]), e
    };
    t.fn.mask = function (i, a) {
        a = a || {};
        var o = this.selector, s = t.jMaskGlobals, r = s.watchInterval, s = a.watchInputs || s.watchInputs, l = function () {
            if (n(this, i, a))return t(this).data("mask", new e(this, i, a))
        };
        return t(this).each(l), o && "" !== o && s && (clearInterval(t.maskWatchers[o]), t.maskWatchers[o] = setInterval(function () {
            t(document).find(o).each(l)
        }, r)), this
    }, t.fn.masked = function (t) {
        return this.data("mask").getMaskedVal(t)
    }, t.fn.unmask = function () {
        return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function () {
            var e = t(this).data("mask");
            e && e.remove().removeData("mask")
        })
    }, t.fn.cleanVal = function () {
        return this.data("mask").getCleanVal()
    }, t.applyDataMask = function (e) {
        e = e || t.jMaskGlobals.maskElements, (e instanceof t ? e : t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(i)
    }, a = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        useInput: !/Chrome\/28/.test(window.navigator.userAgent) && a("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {pattern: /\d/},
            9: {pattern: /\d/, optional: !0},
            "#": {pattern: /\d/, recursive: !0},
            A: {pattern: /[a-zA-Z0-9]/},
            S: {pattern: /[a-zA-Z]/}
        }
    }, t.jMaskGlobals = t.jMaskGlobals || {}, a = t.jMaskGlobals = t.extend(!0, {}, a, t.jMaskGlobals), a.dataMask && t.applyDataMask(), setInterval(function () {
        t.jMaskGlobals.watchDataMask && t.applyDataMask()
    }, a.watchInterval)
}, window.jQuery, window.Zepto), !function (t) {
    t.fn.recliner = function (e) {
        function i(i) {
            var a = t(i), o = a.attr(e.attrib);
            if (type = a.prop("tagName"), o) {
                if ("IMG" != type && "IFRAME" != type)return a.addClass("lazy-loading"), void a.load(o, function () {
                    n(a)
                });
                a.attr("src", o)
            }
            n(a)
        }

        function n(t) {
            t.removeClass("lazy-loading"), t.addClass("lazy-loaded"), t.trigger("lazyshow")
        }

        function a() {
            var i = c.filter(function () {
                var i = t(this);
                if ("none" != i.css("display")) {
                    var n = "undefined" != typeof window.innerHeight ? window.innerHeight : l.height(), a = l.scrollTop(), o = a + n, s = i.offset().top, r = s + i.height();
                    return r >= a - e.threshold && s <= o + e.threshold
                }
            });
            s = i.trigger("lazyload"), c = c.not(s)
        }

        function o(t) {
            t.one("lazyload", function () {
                i(this)
            }), a()
        }

        var s, r, l = t(window), c = this, u = this.selector, e = t.extend({
            attrib: "data-src",
            throttle: 300,
            threshold: 100,
            printable: !0,
            live: !0
        }, e);
        return l.on("scroll.lazy resize.lazy lookup.lazy", function () {
            r && clearTimeout(r), r = setTimeout(function () {
                l.trigger("lazyupdate")
            }, e.throttle)
        }), l.on("lazyupdate", function () {
            a()
        }), e.live && t(document).ajaxSuccess(function () {
            var e = t(u).not(".lazy-loaded").not(".lazy-loading");
            c = c.add(e), o(e)
        }), e.printable && window.matchMedia && window.matchMedia("print").addListener(function (e) {
            e.matches && t(u).trigger("lazyload")
        }), o(this), this
    }
}(window.jQuery);
var __slice = [].slice, __indexOf = [].indexOf || function (t) {
        for (var e = 0, i = this.length; e < i; e++)if (e in this && this[e] === t)return e;
        return -1
    };
!function (t, e) {
    var i;
    return i = function () {
        function e(e, i) {
            var n, a = this;
            this.input = e, this.defaultOptions = {
                animate: !0,
                snapMid: !1,
                classPrefix: null,
                classSuffix: null,
                theme: null,
                highlight: !1
            }, this.settings = t.extend({}, this.defaultOptions, i), this.settings.theme && (this.settings.classSuffix = "-" + this.settings.theme), this.input.hide(), this.slider = t("<div>").addClass("slider" + (this.settings.classSuffix || "")).css({
                position: "relative",
                userSelect: "none",
                boxSizing: "border-box"
            }).insertBefore(this.input), this.input.attr("id") && this.slider.attr("id", this.input.attr("id") + "-slider"), this.track = this.createDivElement("track").css({width: "100%"}), this.settings.highlight && (this.highlightTrack = this.createDivElement("highlight-track").css({width: "0"})), this.dragger = this.createDivElement("dragger"), this.slider.css({
                minHeight: this.dragger.outerHeight(),
                marginLeft: this.dragger.outerWidth() / 2,
                marginRight: this.dragger.outerWidth() / 2
            }), this.track.css({marginTop: this.track.outerHeight() / -2}), this.settings.highlight && this.highlightTrack.css({marginTop: this.track.outerHeight() / -2}), this.dragger.css({
                marginTop: this.dragger.outerHeight() / -2,
                marginLeft: this.dragger.outerWidth() / -2
            }), this.track.mousedown(function (t) {
                return a.trackEvent(t)
            }), this.settings.highlight && this.highlightTrack.mousedown(function (t) {
                return a.trackEvent(t)
            }), this.dragger.mousedown(function (t) {
                if (1 === t.which)return a.dragging = !0, a.dragger.addClass("dragging"), a.domDrag(t.pageX, t.pageY), !1
            }), t("body").mousemove(function (e) {
                if (a.dragging)return a.domDrag(e.pageX, e.pageY), t("body").css({cursor: "pointer"})
            }).mouseup(function (e) {
                if (a.dragging)return a.dragging = !1, a.dragger.removeClass("dragging"), t("body").css({cursor: "auto"})
            }), this.pagePos = 0, "" === this.input.val() ? (this.value = this.getRange().min, this.input.val(this.value)) : this.value = this.nearestValidValue(this.input.val()), this.setSliderPositionFromValue(this.value), n = this.valueToRatio(this.value), this.input.trigger("slider:ready", {
                value: this.value,
                ratio: n,
                position: n * this.slider.outerWidth(),
                el: this.slider
            })
        }

        return e.prototype.createDivElement = function (e) {
            var i;
            return i = t("<div>").addClass(e).css({
                position: "absolute",
                top: "50%",
                userSelect: "none",
                cursor: "pointer"
            }).appendTo(this.slider)
        }, e.prototype.setRatio = function (t) {
            var e;
            return t = Math.min(1, t), t = Math.max(0, t), e = this.ratioToValue(t), this.setSliderPositionFromValue(e), this.valueChanged(e, t, "setRatio")
        }, e.prototype.setValue = function (t) {
            var e;
            return t = this.nearestValidValue(t), e = this.valueToRatio(t), this.setSliderPositionFromValue(t), this.valueChanged(t, e, "setValue")
        }, e.prototype.trackEvent = function (t) {
            if (1 === t.which)return this.domDrag(t.pageX, t.pageY, !0), this.dragging = !0, !1
        }, e.prototype.domDrag = function (t, e, i) {
            var n, a, o;
            if (null == i && (i = !1), n = t - this.slider.offset().left, n = Math.min(this.slider.outerWidth(), n), n = Math.max(0, n), this.pagePos !== n)return this.pagePos = n, a = n / this.slider.outerWidth(), o = this.ratioToValue(a), this.valueChanged(o, a, "domDrag"), this.settings.snap ? this.setSliderPositionFromValue(o, i) : this.setSliderPosition(n, i)
        }, e.prototype.setSliderPosition = function (t, e) {
            if (null == e && (e = !1), e && this.settings.animate) {
                if (this.dragger.animate({left: t}, 200), this.settings.highlight)return this.highlightTrack.animate({width: t}, 200)
            } else if (this.dragger.css({left: t}), this.settings.highlight)return this.highlightTrack.css({width: t})
        }, e.prototype.setSliderPositionFromValue = function (t, e) {
            var i;
            return null == e && (e = !1), i = this.valueToRatio(t), this.setSliderPosition(i * this.slider.outerWidth(), e)
        }, e.prototype.getRange = function () {
            return this.settings.allowedValues ? {
                min: Math.min.apply(Math, this.settings.allowedValues),
                max: Math.max.apply(Math, this.settings.allowedValues)
            } : this.settings.range ? {
                min: parseFloat(this.settings.range[0]),
                max: parseFloat(this.settings.range[1])
            } : {min: 0, max: 1}
        }, e.prototype.nearestValidValue = function (e) {
            var i, n, a, o;
            return a = this.getRange(), e = Math.min(a.max, e), e = Math.max(a.min, e), this.settings.allowedValues ? (i = null, t.each(this.settings.allowedValues, function () {
                if (null === i || Math.abs(this - e) < Math.abs(i - e))return i = this
            }), i) : this.settings.step ? (n = (a.max - a.min) / this.settings.step, o = Math.floor((e - a.min) / this.settings.step), (e - a.min) % this.settings.step > this.settings.step / 2 && o < n && (o += 1), o * this.settings.step + a.min) : e
        }, e.prototype.valueToRatio = function (t) {
            var e, i, n, a, o, s, r, l;
            if (this.settings.equalSteps) {
                for (l = this.settings.allowedValues, a = s = 0, r = l.length; s < r; a = ++s)e = l[a], ("undefined" == typeof i || null === i || Math.abs(e - t) < Math.abs(i - t)) && (i = e, n = a);
                return this.settings.snapMid ? (n + .5) / this.settings.allowedValues.length : n / (this.settings.allowedValues.length - 1)
            }
            return o = this.getRange(), (t - o.min) / (o.max - o.min)
        }, e.prototype.ratioToValue = function (t) {
            var e, i, n, a, o;
            return this.settings.equalSteps ? (o = this.settings.allowedValues.length, a = Math.round(t * o - .5), e = Math.min(a, this.settings.allowedValues.length - 1), this.settings.allowedValues[e]) : (i = this.getRange(), n = t * (i.max - i.min) + i.min, this.nearestValidValue(n))
        }, e.prototype.valueChanged = function (e, i, n) {
            var a;
            if (e.toString() !== this.value.toString())return this.value = e, a = {
                value: e,
                ratio: i,
                position: i * this.slider.outerWidth(),
                trigger: n,
                el: this.slider
            }, this.input.val(e).trigger(t.Event("change", a)).trigger("slider:changed", a)
        }, e
    }(), t.extend(t.fn, {
        simpleSlider: function () {
            var e, n, a;
            return a = arguments[0], e = 2 <= arguments.length ? __slice.call(arguments, 1) : [], n = ["setRatio", "setValue"], t(this).each(function () {
                var o, s;
                return a && __indexOf.call(n, a) >= 0 ? (o = t(this).data("slider-object"), o[a].apply(o, e)) : (s = a, t(this).data("slider-object", new i(t(this), s)))
            })
        }
    }), t(function () {
        return t("[data-slider]").each(function () {
            var e, i, n, a;
            return e = t(this), n = {}, i = e.data("slider-values"), i && (n.allowedValues = function () {
                var t, e, n, o;
                for (n = i.split(","), o = [], t = 0, e = n.length; t < e; t++)a = n[t], o.push(parseFloat(a));
                return o
            }()), e.data("slider-range") && (n.range = e.data("slider-range").split(",")), e.data("slider-step") && (n.step = e.data("slider-step")), n.snap = e.data("slider-snap"), n.equalSteps = e.data("slider-equal-steps"), e.data("slider-theme") && (n.theme = e.data("slider-theme")), e.attr("data-slider-highlight") && (n.highlight = e.data("slider-highlight")), null != e.data("slider-animate") && (n.animate = e.data("slider-animate")), e.simpleSlider(n)
        })
    })
}(this.jQuery || this.Zepto, this), function (t) {
    t.fn.unveil = function (e, i) {
        function n() {
            var e = c.filter(function () {
                var e = t(this);
                if (!e.is(":hidden")) {
                    var i = o.scrollTop(), n = i + o.height(), a = e.offset().top, r = a + e.height();
                    return r >= i - s && a <= n + s
                }
            });
            a = e.trigger("unveil"), c = c.not(a)
        }

        var a, o = t(window), s = e || 0, r = window.devicePixelRatio > 1, l = r ? "data-src-retina" : "data-src", c = this;
        return this.one("unveil", function () {
            var t = this.getAttribute(l);
            t = t || this.getAttribute("data-src"), t && (this.setAttribute("src", t), "function" == typeof i && i.call(this))
        }), o.on("scroll.unveil resize.unveil lookup.unveil", n), n(), this
    }
}(window.jQuery || window.Zepto), !function (t) {
    "use strict";
    var e = function (e, i) {
        this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, i), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    e.prototype = {
        constructor: e, init: function () {
            var t = this;
            t.timeout = setTimeout(function () {
                for (var e = 0; e < t.strings.length; ++e)t.sequence[e] = e;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        }, build: function () {
            var e = this;
            if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                e.strings = [], this.stringsElement.hide();
                var i = this.stringsElement.find("p");
                t.each(i, function (i, n) {
                    e.strings.push(t(n).html())
                })
            }
            this.init()
        }, typewrite: function (t, e) {
            if (this.stop !== !0) {
                var i = Math.round(70 * Math.random()) + this.typeSpeed, n = this;
                n.timeout = setTimeout(function () {
                    var i = 0, a = t.substr(e);
                    if ("^" === a.charAt(0)) {
                        var o = 1;
                        /^\^\d+/.test(a) && (a = /\d+/.exec(a)[0], o += a.length, i = parseInt(a)), t = t.substring(0, e) + t.substring(e + o)
                    }
                    if ("html" === n.contentType) {
                        var s = t.substr(e).charAt(0);
                        if ("<" === s || "&" === s) {
                            var r = "", l = "";
                            for (l = "<" === s ? ">" : ";"; t.substr(e).charAt(0) !== l;)r += t.substr(e).charAt(0), e++;
                            e++, r += l
                        }
                    }
                    n.timeout = setTimeout(function () {
                        if (e === t.length) {
                            if (n.options.onStringTyped(n.arrayPos), n.arrayPos === n.strings.length - 1 && (n.options.callback(), n.curLoop++, n.loop === !1 || n.curLoop === n.loopCount))return;
                            n.timeout = setTimeout(function () {
                                n.backspace(t, e)
                            }, n.backDelay)
                        } else {
                            0 === e && n.options.preStringTyped(n.arrayPos);
                            var i = t.substr(0, e + 1);
                            n.attr ? n.el.attr(n.attr, i) : n.isInput ? n.el.val(i) : "html" === n.contentType ? n.el.html(i) : n.el.text(i), e++, n.typewrite(t, e)
                        }
                    }, i)
                }, i)
            }
        }, backspace: function (t, e) {
            if (this.stop !== !0) {
                var i = Math.round(70 * Math.random()) + this.backSpeed, n = this;
                n.timeout = setTimeout(function () {
                    if ("html" === n.contentType && ">" === t.substr(e).charAt(0)) {
                        for (var i = ""; "<" !== t.substr(e).charAt(0);)i -= t.substr(e).charAt(0), e--;
                        e--, i += "<"
                    }
                    var a = t.substr(0, e);
                    n.attr ? n.el.attr(n.attr, a) : n.isInput ? n.el.val(a) : "html" === n.contentType ? n.el.html(a) : n.el.text(a), e > n.stopNum ? (e--, n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.shuffle && (n.sequence = n.shuffleArray(n.sequence)), n.init()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], e))
                }, i)
            }
        }, shuffleArray: function (t) {
            var e, i, n = t.length;
            if (n)for (; --n;)i = Math.floor(Math.random() * (n + 1)), e = t[i], t[i] = t[n], t[n] = e;
            return t
        }, reset: function () {
            var t = this;
            clearInterval(t.timeout);
            var e = this.el.attr("id");
            this.el.after('<span id="' + e + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback()
        }
    }, t.fn.typed = function (i) {
        return this.each(function () {
            var n = t(this), a = n.data("typed"), o = "object" == typeof i && i;
            a || n.data("typed", a = new e(this, o)), "string" == typeof i && a[i]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function () {
        },
        preStringTyped: function () {
        },
        onStringTyped: function () {
        },
        resetCallback: function () {
        }
    }
}(window.jQuery), function (t, e, i) {
    "$:nomunge";
    function n(t) {
        return t = t || location.href, "#" + t.replace(/^[^#]*#?(.*)$/, "$1")
    }

    var a, o = "hashchange", s = document, r = t.event.special, l = s.documentMode, c = "on" + o in e && (l === i || l > 7);
    t.fn[o] = function (t) {
        return t ? this.bind(o, t) : this.trigger(o)
    }, t.fn[o].delay = 50, r[o] = t.extend(r[o], {
        setup: function () {
            return !c && void t(a.start)
        }, teardown: function () {
            return !c && void t(a.stop)
        }
    }), a = function () {
        function a() {
            var i = n(), r = d(l);
            i !== l ? (u(l = i, r), t(e).trigger(o)) : r !== l && (location.href = location.href.replace(/#.*/, "") + r), s = setTimeout(a, t.fn[o].delay)
        }

        var s, r = {}, l = n(), c = function (t) {
            return t
        }, u = c, d = c;
        return r.start = function () {
            s || a()
        }, r.stop = function () {
            s && clearTimeout(s), s = i
        }, r
    }()
}(jQuery, this);
var jqobjPrime = null, show_error_combined = !0, LiveValidation = function (t, e) {
    this.initialize(t, e)
};
LiveValidation.VERSION = "1.4 standalone", LiveValidation.TEXTAREA = 1, LiveValidation.TEXT = 2, LiveValidation.PASSWORD = 3, LiveValidation.CHECKBOX = 4, LiveValidation.SELECT = 5, LiveValidation.FILE = 6, LiveValidation.CHECKBOX_GF = 9, LiveValidation.RADIO = 7, LiveValidation.massValidate = function (t) {
    for (var e = !0, i = 0, n = t.length; i < n; ++i) {
        var a = t[i].validate();
        e && (e = a)
    }
    return e
}, LiveValidation.prototype = {
    validClass: "LV_valid",
    invalidClass: "LV_invalid",
    messageClass: "LV_validation_message",
    validFieldClass: "LV_valid_field",
    invalidFieldClass: "LV_invalid_field",
    initialize: function (t, e) {
        var i = this;
        if (!t)throw new Error("LiveValidation::initialize - No element reference or element id has been provided!");
        if (this.element = t.nodeName ? t : document.getElementById(t), !this.element)throw new Error("LiveValidation::initialize - No element with reference or id of '" + t + "' exists!");
        this.validations = [], this.elementType = this.getElementType(), this.form = this.element.form;
        var n = e || {};
        if (n.jqObj && !jqobjPrime && (jqobjPrime = n.jqObj), this.fieldType = n.fieldType, "undefined" == typeof this.form) {
            var a = jqobjPrime(this.element).parents("form");
            this.form = a[0]
        }
        this.element.onfocus = function (t) {
            var e = document.getElementsByClassName("LV_validation_message");
            if (e.length > 0)for (var i = 0; i < e.length; i++) {
                var n = e[i].className;
                e[i].className = n + " hide_validation"
            }
            jqobjPrime(this).hasClass("hasDatepicker") || t.target.className.replace(/\bhide_validation\b/, "")
        }, this.validMessage = n.validMessage || " ";
        var o = n.insertAfterWhatNode || this.element;
        if (this.insertAfterWhatNode = o.nodeType ? o : document.getElementById(o), this.onlyOnBlur = n.onlyOnBlur || !1, this.wait = n.wait || 0, this.onlyOnSubmit = n.onlyOnSubmit || !1, this.beforeValidation = n.beforeValidation || function () {
                }, this.beforeValid = n.beforeValid || function () {
                }, this.onValid = n.onValid || function () {
                    this.insertMessage(this.createMessageSpan()), this.addFieldClass()
                }, this.afterValid = n.afterValid || function () {
                }, this.beforeInvalid = n.beforeInvalid || function () {
                }, this.onInvalid = n.onInvalid || function () {
                    this.insertMessage(this.createMessageSpan()), this.addFieldClass()
                }, this.afterInvalid = n.afterInvalid || function () {
                }, this.afterValidation = n.afterValidation || function () {
                }, this.form && (this.formObj = LiveValidationForm.getInstance(this.form), this.formObj.addField(this)), this.oldOnFocus = this.element.onfocus || function () {
                }, this.oldOnBlur = this.element.onblur || function () {
                }, "checkbox" == this.fieldType) {
            this.oldOnClick_check = {};
            for (var s = this.element, r = (s.childNodes.length, 0); r < s.childNodes.length; r++)this.oldOnClick_check[s.childNodes[r].querySelector("input").id] = s.childNodes[r].querySelector("input").onclick || function () {
                }
        } else this.oldOnClick_check = [], this.oldOnClick = this.element.onclick || function () {
            };
        if (this.oldOnChange = this.element.onchange || function () {
                }, this.oldOnKeyup = this.element.onkeyup || function () {
                }, this.element.onfocus = function (t) {
                return i.doOnFocus(t), jqobjPrime(document).trigger("lv_field_on_focus", t), i.oldOnFocus.call(this, t)
            }, !this.onlyOnSubmit)switch (this.elementType) {
            case LiveValidation.CHECKBOX_GF:
                for (var s = this.element, r = (s.childNodes.length, 0); r < s.childNodes.length; r++)s.childNodes[r].querySelector("input").onclick = function (t, e) {
                    return i.validate(), i.oldOnClick_check[this.id].call(this, t)
                }, s.childNodes[r].querySelector("input").onblur = function (t) {
                    return i.doOnBlur(t)
                }, s.childNodes[r].querySelector("input").onfocus = function (t) {
                    return i.doOnFocus(t), jqobjPrime(document).trigger("lv_field_on_focus", t), i.oldOnFocus.call(this, t)
                };
                break;
            case LiveValidation.CHECKBOX:
            case LiveValidation.RADIO:
            case LiveValidation.SELECT:
                this.element.onblur = function (t) {
                    if (hasSubFields.indexOf(i.fieldType) == -1)return i.doOnBlur(t);
                    var e = jqobjPrime(i.element).parents("li.gfield");
                    e.find("input , select").each(function (t, e) {
                        var i = jQuery(this).attr("id"), n = i.split("_"), a = "input_" + n[1] + "_";
                        i.split(a).pop();
                        "undefined" != typeof all_validations[n[1]][n[2] + "_" + n[3]] && all_validations[n[1]][n[2] + "_" + n[3]].validate()
                    })
                };
                break;
            case LiveValidation.FILE:
                this.element.onchange = function (t) {
                    return i.validate(), i.oldOnChange.call(this, t)
                };
                break;
            default:
                this.element.onblur = function (t) {
                    if (hasSubFields.indexOf(i.fieldType) == -1)return i.doOnBlur(t);
                    var e = jqobjPrime(i.element).parents("li.gfield");
                    e.find("input , select").each(function (t, e) {
                        var i = jQuery(this).attr("id"), n = i.split("_"), a = "input_" + n[1] + "_";
                        i.split(a).pop();
                        "undefined" != typeof all_validations[n[1]][n[2] + "_" + n[3]] && all_validations[n[1]][n[2] + "_" + n[3]].validate()
                    })
                }
        }
    },
    destroy: function () {
        if (this.formObj && (this.formObj.removeField(this), this.formObj.destroy()), this.element.onfocus = this.oldOnFocus, !this.onlyOnSubmit)switch (this.elementType) {
            case LiveValidation.CHECKBOX:
                this.element.onclick = this.oldOnClick;
            case LiveValidation.SELECT:
            case LiveValidation.FILE:
                this.element.onchange = this.oldOnChange;
                break;
            default:
                this.onlyOnBlur || (this.element.onkeyup = this.oldOnKeyup), this.element.onblur = this.oldOnBlur
        }
        this.validations = [], this.removeMessageAndFieldClass()
    },
    add: function (t, e) {
        return this.validations.push({type: t, params: e || {}}), this
    },
    remove: function (t, e) {
        for (var i = [], n = 0, a = this.validations.length; n < a; n++) {
            var o = this.validations[n];
            o.type != t && o.params != e && i.push(o)
        }
        return this.validations = i, this
    },
    deferValidation: function (t) {
        this.wait >= 300 && this.removeMessageAndFieldClass();
        var e = this;
        this.timeout && clearTimeout(e.timeout), this.timeout = setTimeout(function () {
            e.validate()
        }, e.wait)
    },
    doOnBlur: function (t) {
        this.focused = !1, this.validate(t)
    },
    doOnFocus: function (t) {
        this.focused = !0, this.removeMessageAndFieldClass()
    },
    getElementType: function () {
        var t = this.element.nodeName.toUpperCase(), e = this.element.type.toUpperCase();
        switch (!0) {
            case"TEXTAREA" == t:
                return LiveValidation.TEXTAREA;
            case"INPUT" == t && "TEXT" == e:
                return LiveValidation.TEXT;
            case"INPUT" == t && "EMAIL" == e:
                return LiveValidation.TEXT;
            case"INPUT" == t && "URL" == e:
                return LiveValidation.TEXT;
            case"INPUT" == t && "TEL" == e:
                return LiveValidation.TEXT;
            case"INPUT" == t && "PASSWORD" == e:
                return LiveValidation.PASSWORD;
            case"INPUT" == t && "CHECKBOX" == e:
                return LiveValidation.CHECKBOX;
            case"INPUT" == t && "RADIO" == e:
                return LiveValidation.RADIO;
            case"INPUT" == t && "FILE" == e:
                return LiveValidation.FILE;
            case"SELECT" == t:
                return LiveValidation.SELECT;
            case"UL" == t:
                return LiveValidation.CHECKBOX_GF;
            case"INPUT" == t:
                throw new Error("LiveValidation::getElementType - Cannot use LiveValidation on an " + e.toLowerCase() + " input!");
            default:
                throw new Error("LiveValidation::getElementType - Element must be an input, select, or textarea - " + t.toLowerCase() + " was given!")
        }
    },
    doValidations: function () {
        this.validationFailed = !1;
        for (var t = 0, e = this.validations.length; t < e; ++t)if (this.validationFailed = !this.validateElement(this.validations[t].type, this.validations[t].params), this.validationFailed)return !1;
        return this.message = this.validMessage, !0
    },
    validateElement: function (t, e) {
        switch (t) {
            case Validate.Presence:
            case Validate.Confirmation:
            case Validate.Acceptance:
                this.displayMessageWhenEmpty = !0;
                break;
            case Validate.Custom:
                e.displayMessageWhenEmpty && (this.displayMessageWhenEmpty = !0)
        }
        if (this.elementType == LiveValidation.RADIO)i = this.element.checked; else {
            if (this.element.selectedIndex == -1 && this.elementType == LiveValidation.SELECT)var i = ""; else var i = this.elementType == LiveValidation.SELECT ? this.element.options[this.element.selectedIndex].value : this.element.value;
            if (t == Validate.Acceptance || t == Validate.AcceptanceCheckbox) {
                if (this.elementType != LiveValidation.CHECKBOX)throw new Error("LiveValidation::validateElement - Element to validate acceptance must be a checkbox!");
                i = this.element.checked
            }
        }
        var n = !0;
        try {
            t(i, e)
        } catch (a) {
            if (!(a instanceof Validate.Error))throw a;
            ("" !== i || "" === i && this.displayMessageWhenEmpty) && (this.validationFailed = !0, this.message = a.message.split("\n")[0], n = !1)
        } finally {
            return n
        }
    },
    validate: function () {
        if (this.checkIfDisable(this.element))return !0;
        this.beforeValidation();
        var t = this.doValidations();
        return t ? (this.beforeValid(), this.onValid(), this.afterValid(this.element), !0) : (this.beforeInvalid(), this.onInvalid(), this.afterInvalid(this.element), !1)
    },
    enable: function () {
        return this.element.removeAttribute("data-disabled"), this
    },
    disable: function () {
        return this.element.setAttribute("data-disabled", "yes"), this.removeMessageAndFieldClass(), this
    },
    checkIfDisable: function (t) {
        return !!t.hasAttribute("data-disabled")
    },
    createMessageSpan: function () {
        var t = document.createElement("span"), e = document.createTextNode(this.message);
        return t.appendChild(e), t
    },
    insertMessage: function (t) {
        if (this.removeMessage(), (this.validationFailed || this.validMessage) && (this.displayMessageWhenEmpty && (this.elementType == LiveValidation.CHECKBOX || "" == this.element.value) || "" != this.element.value)) {
            var e = this.validationFailed ? this.invalidClass : this.validClass;
            t.className += " " + this.messageClass + " " + e;
            var i = this.insertAfterWhatNode.parentNode;
            this.insertAfterWhatNode.nextSibling ? i.insertBefore(t, this.insertAfterWhatNode.nextSibling) : i.appendChild(t)
        }
    },
    addFieldClass: function () {
        this.removeFieldClass(), this.validationFailed ? this.element.className.indexOf(this.invalidFieldClass) == -1 && (this.element.className += " " + this.invalidFieldClass) : (this.displayMessageWhenEmpty || "" != this.element.value) && this.element.className.indexOf(this.validFieldClass) == -1 && (this.element.className += " " + this.validFieldClass)
    },
    removeMessage: function () {
        for (var t, e = this.insertAfterWhatNode; e.nextSibling;) {
            if (1 === e.nextSibling.nodeType) {
                t = e.nextSibling;
                break
            }
            e = e.nextSibling
        }
        t && t.className.indexOf(this.messageClass) != -1 && this.insertAfterWhatNode.parentNode.removeChild(t)
    },
    removeFieldClass: function () {
        var t = this.element.className;
        t.indexOf(this.invalidFieldClass) != -1 && (this.element.className = t.split(this.invalidFieldClass).join("")), t.indexOf(this.validFieldClass) != -1 && (this.element.className = t.split(this.validFieldClass).join(" "))
    },
    removeMessageAndFieldClass: function () {
        this.removeMessage(), this.removeFieldClass()
    }
};
var LiveValidationForm = function (t) {
    this.initialize(t)
};
LiveValidationForm.instances = {}, LiveValidationForm.getInstance = function (t) {
    if (!t)throw new Error("LiveValidationForm::getInstance - No element reference or element id has been provided!");
    var e = t.nodeName ? t : document.getElementById(t), i = Math.random() * Math.random();
    return e.id || (e.id = "formId_" + i.toString().replace(/\./, "") + (new Date).valueOf()), LiveValidationForm.instances[e.id] || (LiveValidationForm.instances[e.id] = new LiveValidationForm(e)), LiveValidationForm.instances[e.id]
}, LiveValidationForm.prototype = {
    beforeValidation: function () {
    }, onValid: function () {
    }, onInvalid: function () {
    }, afterValidation: function () {
    }, initialize: function (t) {
        this.name = t.id, this.element = t, this.fields = [], this.oldOnSubmit = this.element.onsubmit || function () {
            };
        var e = this;
        this.element.setAttribute("onsubmit", "return false;");
        jQuery(this.element).find(":submit").attr("id");
        this.element.onsubmit = function (t) {
            var i = 0, n = t.currentTarget;
            if (hasClass(n, "back_bt_press"))return !0;
            var a = !1;
            e.beforeValidation(), e.valid = LiveValidation.massValidate(e.fields), e.valid ? e.onValid() : e.onInvalid(), e.afterValidation(), e.valid && (a = e.oldOnSubmit.call(this, t || window.event) !== !1);
            var o = document.querySelector(".gform_body"), s = document.querySelector(".errorMessages");
            if (s && o.removeChild(s), 1 == show_error_combined) {
                var r = document.getElementsByClassName("LV_invalid_field");
                if (r.length > 0) {
                    var l = e.name.split("_"), c = document.createElement("ul"), u = document.querySelector(".gform_body");
                    c.className = "errorMessages";
                    var d = new Array, f = new Array;
                    u.insertBefore(c, u.firstChild);
                    for (var p = 0; p < r.length; p++) {
                        var h = r[p].id;
                        if (d.indexOf(r[p].name) == -1) {
                            if (d.push(r[p].name), "checkbox" == r[p].type) {
                                var m = r[p].name, g = m.split(".")[0];
                                if (f.indexOf(g) != -1)continue;
                                f.push(g)
                            }
                            if ("UL" != r[p].tagName) {
                                var v = r[p].nextSibling, y = document.querySelector(".gfield_label[for='" + h + "']");
                                if (y || (y = document.getElementById(h + "_label")), y || (y = document.querySelector("label[for='" + h + "']")), "radio" == r[p].type) {
                                    var b = "field_" + l[1] + "_" + r[p].name.substr(6);
                                    y = document.querySelector("#" + b + " .gfield_label")
                                }
                                if ("checkbox" == r[p].type) {
                                    var m = r[p].name, g = m.split(".")[0], b = "field_" + l[1] + "_" + g.substr(6);
                                    y = document.querySelector("#" + b + " .gfield_label")
                                }
                                var w = y.parentNode;
                                0 == i && (i = jqobjPrime(w).offset().top);
                                var _ = document.createElement("li");
                                if (y && v) {
                                    var x = v.textContent || v.innerText, C = y.textContent || y.innerText;
                                    if ("" == C || "*" == C) {
                                        y = document.querySelector("#" + h + "_container label[for='" + h + "']");
                                        var C = y.textContent || y.innerText
                                    }
                                    _.innerHTML = "<span><a href='#' onclick='window.scrollTo(0, " + jqobjPrime(w).offset().top + "); return false;'>" + C + "</a></span> " + x + " "
                                }
                            }
                        }
                    }
                    jqobjPrime(".errorMessages");
                    jqobjPrime("body,html").animate({scrollTop: i}, 500)
                }
                document.getElementsByClassName("LV_validation_message")
            }
            var S = e.name.split("_");
            return window["gf_submitting_" + S[1]] = !1, a ? void 0 : ("yes" == lv_gf_is_ajax && jqobjPrime(".gform_ajax_spinner").remove(), a)
        }
    }, addField: function (t) {
        this.fields.push(t)
    }, removeField: function (t) {
        for (var e = [], i = 0, n = this.fields.length; i < n; i++)this.fields[i] !== t && e.push(this.fields[i]);
        this.fields = e
    }, destroy: function (t) {
        return !(0 != this.fields.length && !t) && (this.element.onsubmit = this.oldOnSubmit, LiveValidationForm.instances[this.name] = null, !0)
    }
};
var Validate = {
    Presence: function (t, e) {
        var e = e || {}, i = e.failureMessage || "Can't be empty!";
        return "undefined" != typeof e.mask && (e.mask == t ? Validate.fail(i) : setTimeout(function () {
            hasClass(all_validations[e.form_id][e.livevalidkey].element, "LV_invalid_field") || all_validations[e.form_id][e.livevalidkey].validate()
        }, 300)), "" !== t && null !== t && void 0 !== t && "First Name" != t && "Last Name" != t && "Middle Name" != t || Validate.fail(i), !0
    }, Numericality: function (t, e) {
        var i = t, t = Number(t), e = e || {}, n = e.minimum || 0 == e.minimum ? e.minimum : null, a = e.maximum || 0 == e.maximum ? e.maximum : null, o = e.is || 0 == e.is ? e.is : null, s = e.notANumberMessage || "Must be a number!", r = e.notAnIntegerMessage || "Must be an integer!", l = e.wrongNumberMessage || "Must be " + o + "!", c = e.tooLowMessage || "Must not be less than " + n + "!", u = e.tooHighMessage || "Must not be more than " + a + "!";
        switch (isFinite(t) || Validate.fail(s), e.onlyInteger && (/\.0+$|\.$/.test(String(i)) || t != parseInt(t)) && Validate.fail(r), !0) {
            case null !== o:
                t != Number(o) && Validate.fail(l);
                break;
            case null !== n && null !== a:
                Validate.Numericality(t, {tooLowMessage: c, minimum: n}), Validate.Numericality(t, {
                    tooHighMessage: u,
                    maximum: a
                });
                break;
            case null !== n:
                t < Number(n) && Validate.fail(c);
                break;
            case null !== a:
                t > Number(a) && Validate.fail(u)
        }
        return !0
    }, Format: function (t, e) {
        var t = String(t), e = e || {}, i = e.failureMessage || "Looks like an invalid pattern.", n = e.pattern || /./, a = e.negate || !1, o = n.test(t);
        return a || o || Validate.fail(i), a && o && Validate.fail(i), !0
    }, Email: function (t, e) {
        var e = e || {}, i = e.failureMessage || "Must be a valid email address!";
        return Validate.Format(t, {failureMessage: i, pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i}), !0
    }, Website: function (t, e) {
        var e = e || {}, i = e.failureMessage || "Must be a valid url!";
        return Validate.Format(t, {
            failureMessage: i,
            pattern: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        }), !0
    }, Name: function (t, e) {
        var e = e || {}, i = e.failureMessage || "only characters!";
        return Validate.Format(t, {failureMessage: i, pattern: /^[a-zA-Z]*$/}), !0
    }, Phone: function (t, e) {
        var e = e || {}, i = e.phoneFormate || "";
        if ("standard" == i) {
            var n = e.failureMessage || "Phone format:(###)###-####", a = (e.phonefield, "");
            for (place = 0; place <= t.length; place++)a += t.charAt(place).replace(/\D*/, "");
            return 10 == a.length || (0 == a.length ? (Validate.fail(n), !1) : (Validate.fail(n), !1))
        }
        var n = e.failureMessage || "only numbers!";
        return Validate.Format(t, {failureMessage: n, pattern: /^[0-9()-]*$/}), !0
    }, Length: function (t, e) {
        var t = String(t), e = e || {}, i = e.minimum || 0 == e.minimum ? e.minimum : null, n = e.maximum || 0 == e.maximum ? e.maximum : null, a = e.is || 0 == e.is ? e.is : null, o = e.wrongLengthMessage || "Must be " + a + " characters long!", s = e.tooShortMessage || "Must not be less than " + i + " characters long!", r = e.tooLongMessage || "Must not be more than " + n + " characters long!";
        switch (!0) {
            case null !== a:
                t.length != Number(a) && Validate.fail(o);
                break;
            case null !== i && null !== n:
                Validate.Length(t, {tooShortMessage: s, minimum: i}), Validate.Length(t, {
                    tooLongMessage: r,
                    maximum: n
                });
                break;
            case null !== i:
                t.length < Number(i) && Validate.fail(s);
                break;
            case null !== n:
                t.length > Number(n) && Validate.fail(r);
                break;
            default:
                throw new Error("Validate::Length - Length(s) to validate against must be provided!")
        }
        return !0
    }, Inclusion: function (t, e) {
        var e = e || {}, i = e.failureMessage || "Must be included in the list!", n = e.caseSensitive !== !1;
        if (e.allowNull && null == t)return !0;
        e.allowNull || null != t || Validate.fail(i);
        var a = e.within || [];
        if (!n) {
            for (var o = [], s = 0, r = a.length; s < r; ++s) {
                var l = a[s];
                "string" == typeof l && (l = l.toLowerCase()), o.push(l)
            }
            a = o, "string" == typeof t && (t = t.toLowerCase())
        }
        for (var c = !1, u = 0, r = a.length; u < r; ++u)a[u] == t && (c = !0), e.partialMatch && t.indexOf(a[u]) != -1 && (c = !0);
        return (!e.negate && !c || e.negate && c) && Validate.fail(i), !0
    }, Exclusion: function (t, e) {
        var e = e || {};
        return e.failureMessage = e.failureMessage || "Must not be included in the list!", e.negate = !0, Validate.Inclusion(t, e), !0
    }, Confirmation: function (t, e) {
        if (!e.match)throw new Error("Validate::Confirmation - Error validating confirmation: Id of element to match must be provided!");
        var e = e || {}, i = e.failureMessage || "Does not match!", n = e.match.nodeName ? e.match : document.getElementById(e.match);
        if (!n)throw new Error("Validate::Confirmation - There is no reference with name of, or element with id of '" + e.match + "'!");
        return t != n.value && Validate.fail(i), !0
    }, Acceptance: function (t, e) {
        var e = e || {}, i = e.failureMessage || "Must be accepted!";
        return t || Validate.fail(i), !0
    }, ConfirmEmail: function (t, e) {
        var e = e || {}, i = e.failureMessage || "Must be accepted!", n = document.getElementById(e.parentField).value;
        return t !== n && Validate.fail(i), !0
    }, AcceptanceCheckbox: function (t, e) {
        for (var e = e || {}, i = e.failureMessage || "Must be accepted!", n = "input_" + e.form_id + "_" + e.field_id, a = document.getElementById(n), o = (a.childNodes.length, 0); o < a.childNodes.length; o++)if (a.childNodes[o].querySelector("input").checked) {
            "undefined" == typeof a.classList ? removeClass(a, "LV_invalid_field") : a.classList.remove("LV_invalid_field");
            for (var s = 0; s < a.childNodes.length; s++)removeClass(a.childNodes[s].querySelector("input"), "LV_invalid_field");
            return !0
        }
        return t ? "undefined" == typeof a.classList ? removeClass(a, "LV_invalid_field") : a.classList.remove("LV_invalid_field") : ("undefined" == typeof a.classList ? addClass(a, "LV_invalid_field") : a.classList.add("LV_invalid_field"), Validate.fail(i)), !0
    }, AcceptanceRadio: function (t, e) {
        var e = e || {}, i = e.failureMessage || "Must be accepted!", n = "input_" + e.form_id + "_" + e.name_field.substr(6), a = document.getElementById(n);
        if (e.name_field)for (var o = document.getElementsByName(e.name_field), s = 0; s < o.length; s++)if (o[s].checked) {
            if ("undefined" == typeof a.classList ? removeClass(a, "LV_invalid_field") : a.classList.remove("LV_invalid_field"), "undefined" == typeof a.classList) {
                removeClass(a, "LV_invalid_field");
                for (var o = document.getElementsByName(e.name_field), s = 0; s < o.length; s++)removeClass(o[s], "LV_invalid_field")
            } else a.classList.remove("LV_invalid_field");
            for (var o = document.getElementsByName(e.name_field), s = 0; s < o.length; s++)removeClass(o[s], "LV_invalid_field");
            return !0
        }
        if (t) {
            if ("undefined" == typeof a.classList) {
                removeClass(a, "LV_invalid_field");
                for (var o = document.getElementsByName(e.name_field), s = 0; s < o.length; s++)removeClass(o[s], "LV_invalid_field")
            } else a.classList.remove("LV_invalid_field");
            for (var o = document.getElementsByName(e.name_field), s = 0; s < o.length; s++)removeClass(o[s], "LV_invalid_field")
        } else"undefined" == typeof a.classList ? addClass(a, "LV_invalid_field") : a.classList.add("LV_invalid_field"), Validate.fail(i);
        return !0
    }, Custom: function (t, e) {
        var e = e || {}, i = e.against || function () {
                return !0
            }, n = e.args || {}, a = e.failureMessage || "Not valid!";
        return i(t, n) || Validate.fail(a), !0
    }, GFCheckboxes: function (t, e) {
        for (var e = e || {}, i = e.failureMessage || "Must be accepted!", n = !1, a = document.getElementById(e.field_name), o = (a.childNodes.length, 0); o < a.childNodes.length; o++)if (a.childNodes[o].querySelector("input").checked)return n = !0, !0;
        n || Validate.fail(i)
    }, Date: function (t, e) {
        var e = e || {}, i = e.failureMessage || "Must be accepted!";
        t || Validate.fail(i);
        var n = new Date(t), a = new Date;
        if ("[object Date]" === Object.prototype.toString.call(n))if (isNaN(n.getTime()))Validate.fail(i); else {
            var o = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/, s = new Array;
            if (s = t.match(o)) {
                if (s[3] < a.getFullYear() - 100 && Validate.fail(i), checkDay(s[2], s[1], s[3]))return !0;
                Validate.fail(i)
            }
            Validate.fail(i)
        } else Validate.fail(i);
        return !0
    }, now: function (t, e, i) {
        if (!t)throw new Error("Validate::now - Validation function must be provided!");
        var n = !0;
        try {
            t(e, i || {})
        } catch (a) {
            if (!(a instanceof Validate.Error))throw a;
            n = !1
        } finally {
            return n
        }
    }, fail: function (t) {
        throw new Validate.Error(t)
    }, Error: function (t) {
        this.message = t, this.name = "ValidationError"
    }
};
!function (t) {
    "use strict";
    var e = !1;
    jQuery(document).bind("gform_post_render", function (t, i) {
        "undefined" != typeof all_validations && "undefined" != typeof window.lv_formIDs && window.lv_formIDs.length > 0 && setTimeout(function () {
            for (var t in all_validations[i]) {
                if (hasSubFields.indexOf(all_validations[i][t].fieldType) == -1 && jQuery("#field_" + i + "_" + t).length > 0 && !jQuery("#field_" + i + "_" + t).is(":visible") && jQuery("#gform_wrapper_" + i).is(":visible"))if ("radio" == all_validations[i][t].fieldType) {
                    for (var n = document.getElementsByName("input_" + t), a = 0; a < n.length; a++)n[a].setAttribute("data-disabled", "yes");
                    e = !0
                } else all_validations[i][t].disable(), e = !0;
                hasSubFields.indexOf(all_validations[i][t].fieldType) !== -1 && jQuery("#input_" + i + "_" + t).length > 0 && !jQuery("#input_" + i + "_" + t).is(":visible") && jQuery("#gform_wrapper_" + i).is(":visible") && (all_validations[i][t].disable(), e = !0)
            }
            var o = jQuery(".gform_previous_button:visible").attr("onclick");
            jQuery(".gform_previous_button").attr("onclick", " jQuery('#gform_" + i + "').addClass('back_bt_press'); " + o)
        }, 100)
    }), jQuery(document).bind("gform_post_conditional_logic", function (t, i, n, a) {
        if ("undefined" != typeof all_validations && "undefined" != typeof window.lv_formIDs && window.lv_formIDs.length > 0)for (var o in all_validations[i])if (jQuery("#field_" + i + "_" + o).length > 0 && !jQuery("#input_" + i + "_" + o).is(":visible") && jQuery("#gform_wrapper_" + i).is(":visible"))if ("radio" == all_validations[i][o].fieldType) {
            for (var s = document.getElementsByName("input_" + o), r = 0; r < s.length; r++)s[r].setAttribute("data-disabled", "yes");
            e = !0
        } else all_validations[i][o].disable(), e = !0; else if (hasSubFields.indexOf(all_validations[i][o].fieldType) !== -1 && jQuery("#input_" + i + "_" + o).length > 0 && !jQuery("#input_" + i + "_" + o).is(":visible"))all_validations[i][o].disable(), e = !0; else if ("radio" == all_validations[i][o].fieldType)for (var s = document.getElementsByName("input_" + o), r = 0; r < s.length; r++)s[r].removeAttribute("data-disabled"); else all_validations[i][o].enable()
    })
}(jQuery);
var hasSubFields = new Array("name", "date", "time", "address");
additional_data = {};
var additional_data = {
    afterValid: function (t) {
        var e = jQuery(t).parents("li");
        e.find(".LV_invalid_field").length > 0 || (e.length > 0 && (e.removeClass("gfield_error"), e.find(".validation_message").remove()), jQuery(document).trigger("lv_after_field_valid", t))
    }, afterInvalid: function (t) {
        var e = jQuery(t).parents("li.gfield");
        if (e.length > 0 && !jQuery(e[0]).hasClass("gfield_error")) {
            var i = "", n = jQuery(t).next(".LV_validation_message");
            n.text().trim().length > 0 && (n.addClass("showed"), i += '<div class="gfield_description validation_message message_id_' + jQuery(t).attr("id") + '">' + get_error_label(n, t) + n.text() + "</div>"), jQuery(e[0]).append(i)
        } else {
            var a = jQuery(t).attr("id"), o = a.split("_"), s = "input_" + o[1] + "_", r = a.split(s).pop();
            if ("undefined" != typeof all_validations[o[1]][r] && hasSubFields.indexOf(all_validations[o[1]][r].fieldType) > -1 && 0 == jQuery(e[0]).find(".message_id_" + jQuery(t).attr("id")).length) {
                var i = "", n = jQuery(t).next(".LV_validation_message");
                n.text().trim().length > 0 && (i += '<div class="gfield_description validation_message message_id_' + jQuery(t).attr("id") + '">' + get_error_label(n, t) + n.text() + "</div>"), jQuery(e[0]).append(i)
            }
        }
        e.addClass("gfield_error"), jQuery(document).trigger("lv_after_field_invalid", t)
    }
};
jQuery(document).on("lv_field_on_focus", function (t, e) {
    var i = e.srcElement || e.target, n = jQuery(i).parents("li.gfield");
    n.removeClass("gfield_error"), jQuery(n[0]).find(".validation_message").remove()
}), jQuery(document).on("focus", ".gform_wrapper .address_line_2", function (t) {
    var e = t.srcElement || t.target, i = jQuery(e).parents("li.gfield");
    i.removeClass("gfield_error"), jQuery(i[0]).find(".validation_message").remove()
}), !function ($) {
    "use strict";
    var escape = /["\\\x00-\x1f\x7f-\x9f]/g, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, hasOwn = Object.prototype.hasOwnProperty;
    $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function (t) {
        if (null === t)return "null";
        var e, i, n, a, o = $.type(t);
        if ("undefined" !== o) {
            if ("number" === o || "boolean" === o)return String(t);
            if ("string" === o)return $.quoteString(t);
            if ("function" == typeof t.toJSON)return $.toJSON(t.toJSON());
            if ("date" === o) {
                var s = t.getUTCMonth() + 1, r = t.getUTCDate(), l = t.getUTCFullYear(), c = t.getUTCHours(), u = t.getUTCMinutes(), d = t.getUTCSeconds(), f = t.getUTCMilliseconds();
                return 10 > s && (s = "0" + s), 10 > r && (r = "0" + r), 10 > c && (c = "0" + c), 10 > u && (u = "0" + u), 10 > d && (d = "0" + d), 100 > f && (f = "0" + f), 10 > f && (f = "0" + f), '"' + l + "-" + s + "-" + r + "T" + c + ":" + u + ":" + d + "." + f + 'Z"'
            }
            if (e = [], $.isArray(t)) {
                for (i = 0; i < t.length; i++)e.push($.toJSON(t[i]) || "null");
                return "[" + e.join(",") + "]"
            }
            if ("object" == typeof t) {
                for (i in t)if (hasOwn.call(t, i)) {
                    if (o = typeof i, "number" === o)n = '"' + i + '"'; else {
                        if ("string" !== o)continue;
                        n = $.quoteString(i)
                    }
                    o = typeof t[i], "function" !== o && "undefined" !== o && (a = $.toJSON(t[i]), e.push(n + ":" + a))
                }
                return "{" + e.join(",") + "}"
            }
        }
    }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (str) {
        return eval("(" + str + ")")
    }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function (str) {
        var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered))return eval("(" + str + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.")
    }, $.quoteString = function (t) {
        return t.match(escape) ? '"' + t.replace(escape, function (t) {
            var e = meta[t];
            return "string" == typeof e ? e : (e = t.charCodeAt(), "\\u00" + Math.floor(e / 16).toString(16) + (e % 16).toString(16))
        }) + '"' : '"' + t + '"'
    }
}(jQuery), "undefined" == typeof jQuery.fn.prop && (jQuery.fn.prop = jQuery.fn.attr), jQuery(document).ready(function () {
    jQuery(document).bind("gform_post_render", gformBindFormatPricingFields)
});
var _gformPriceFields = new Array, _anyProductSelected, GFCalc = function (formId, formulaFields) {
    this.patt = /{[^{]*?:(\d+(\.\d+)?)(:(.*?))?}/i, this.exprPatt = /^[0-9 -\/*\(\)]+$/i, this.isCalculating = {}, this.init = function (t, e) {
        var i = this;
        jQuery(document).bind("gform_post_conditional_logic", function () {
            for (var n = 0; n < e.length; n++) {
                var a = jQuery.extend({}, e[n]);
                i.runCalc(a, t)
            }
        });
        for (var n = 0; n < e.length; n++) {
            var a = jQuery.extend({}, e[n]);
            this.runCalc(a, t), this.bindCalcEvents(a, t)
        }
    }, this.runCalc = function (formulaField, formId) {
        var calcObj = this, field = jQuery("#field_" + formId + "_" + formulaField.field_id), formulaInput = jQuery("#input_" + formId + "_" + formulaField.field_id), previous_val = formulaInput.val(), formula = gform.applyFilters("gform_calculation_formula", formulaField.formula, formulaField, formId, calcObj), expr = calcObj.replaceFieldTags(formId, formula, formulaField).replace(/(\r\n|\n|\r)/gm, ""), result = "";
        if (calcObj.exprPatt.test(expr))try {
            result = eval(expr)
        } catch (e) {
        }
        isFinite(result) || (result = 0), window.gform_calculation_result && (result = window.gform_calculation_result(result, formulaField, formId, calcObj), window.console && console.log('"gform_calculation_result" function is deprecated since version 1.8! Use "gform_calculation_result" JS hook instead.')), result = gform.applyFilters("gform_calculation_result", result, formulaField, formId, calcObj);
        var formattedResult = gform.applyFilters("gform_calculation_format_result", !1, result, formulaField, formId, calcObj), numberFormat = gf_get_field_number_format(formulaField.field_id, formId);
        if (formattedResult !== !1)result = formattedResult; else if (field.hasClass("gfield_price") || "currency" == numberFormat)result = gformFormatMoney(result ? result : 0, !0); else {
            var decimalSeparator = ".", thousandSeparator = ",";
            "decimal_comma" == numberFormat && (decimalSeparator = ",", thousandSeparator = "."), result = gformFormatNumber(result, gformIsNumber(formulaField.rounding) ? formulaField.rounding : -1, decimalSeparator, thousandSeparator)
        }
        result != previous_val && (field.hasClass("gfield_price") ? (formulaInput.text(result), jQuery("#ginput_base_price_" + formId + "_" + formulaField.field_id).val(result).trigger("change"), gformCalculateTotalPrice(formId)) : formulaInput.val(result).trigger("change"))
    }, this.bindCalcEvents = function (t, e) {
        var i = this, n = t.field_id, a = getMatchGroups(t.formula, this.patt);
        i.isCalculating[n] = !1;
        for (var o in a)if (a.hasOwnProperty(o)) {
            var s = a[o][1], r = parseInt(s), l = jQuery("#field_" + e + "_" + r).find('input[name="input_' + s + '"], select[name="input_' + s + '"]');
            "checkbox" == l.prop("type") || "radio" == l.prop("type") ? jQuery(l).click(function () {
                i.bindCalcEvent(s, t, e, 0)
            }) : l.is("select") || "hidden" == l.prop("type") ? jQuery(l).change(function () {
                i.bindCalcEvent(s, t, e, 0)
            }) : jQuery(l).keydown(function () {
                i.bindCalcEvent(s, t, e)
            }).change(function () {
                i.bindCalcEvent(s, t, e, 0)
            }), gform.doAction("gform_post_calculation_events", a[o], t, e, i)
        }
    }, this.bindCalcEvent = function (t, e, i, n) {
        var a = this, o = e.field_id;
        n = void 0 == n ? 345 : n, a.isCalculating[o][t] && clearTimeout(a.isCalculating[o][t]), a.isCalculating[o][t] = window.setTimeout(function () {
            a.runCalc(e, i)
        }, n)
    }, this.replaceFieldTags = function (t, e, n) {
        var a = getMatchGroups(e, this.patt);
        for (i in a)if (a.hasOwnProperty(i)) {
            var o = a[i][1], s = parseInt(o), r = (a[i][3], 0), l = jQuery("#field_" + t + "_" + s).find('input[name="input_' + o + '"], select[name="input_' + o + '"]');
            (l.length > 1 || "checkbox" == l.prop("type")) && (l = l.filter(":checked"));
            var c = !window.gf_check_field_rule || "show" == gf_check_field_rule(t, s, !0, "");
            if (l.length > 0 && c) {
                var u = l.val();
                u = u.split("|"), r = u.length > 1 ? u[1] : l.val()
            }
            var d = gf_get_field_number_format(s, t);
            d || (d = gf_get_field_number_format(n.field_id, t));
            var f = gformGetDecimalSeparator(d);
            r = gform.applyFilters("gform_merge_tag_value_pre_calculation", r, a[i], c, n, t), r = gformCleanNumber(r, "", "", f), r || (r = 0), e = e.replace(a[i][0], r)
        }
        return e
    }, this.init(formId, formulaFields)
}, gform = {
    hooks: {action: {}, filter: {}}, addAction: function (t, e, i, n) {
        gform.addHook("action", t, e, i, n)
    }, addFilter: function (t, e, i, n) {
        gform.addHook("filter", t, e, i, n)
    }, doAction: function (t) {
        gform.doHook("action", t, arguments)
    }, applyFilters: function (t) {
        return gform.doHook("filter", t, arguments)
    }, removeAction: function (t, e) {
        gform.removeHook("action", t, e)
    }, removeFilter: function (t, e, i) {
        gform.removeHook("filter", t, e, i)
    }, addHook: function (t, e, i, n, a) {
        void 0 == gform.hooks[t][e] && (gform.hooks[t][e] = []);
        var o = gform.hooks[t][e];
        void 0 == a && (a = e + "_" + o.length), void 0 == n && (n = 10), gform.hooks[t][e].push({
            tag: a,
            callable: i,
            priority: n
        })
    }, doHook: function (t, e, i) {
        if (i = Array.prototype.slice.call(i, 1), void 0 != gform.hooks[t][e]) {
            var n, a = gform.hooks[t][e];
            a.sort(function (t, e) {
                return t.priority - e.priority
            });
            for (var o = 0; o < a.length; o++)n = a[o].callable, "function" != typeof n && (n = window[n]), "action" == t ? n.apply(null, i) : i[0] = n.apply(null, i)
        }
        return "filter" == t ? i[0] : void 0
    }, removeHook: function (t, e, i, n) {
        if (void 0 != gform.hooks[t][e])for (var a = gform.hooks[t][e], o = a.length - 1; o >= 0; o--)void 0 != n && n != a[o].tag || void 0 != i && i != a[o].priority || a.splice(o, 1)
    }
};
!function (t, e) {
    function i(i) {
        function s(t, i) {
            e("#" + t).prepend("<li>" + i + "</li>")
        }

        function r() {
            var t, i = "#gform_uploaded_files_" + g, n = e(i);
            return t = n.val(), t = "undefined" == typeof t || "" === t ? {} : e.parseJSON(t)
        }

        function l(t) {
            var e = r(), i = f(t);
            return "undefined" == typeof e[i] && (e[i] = []), e[i]
        }

        function c(t) {
            var e = l(t);
            return e.length
        }

        function u(t, e) {
            var i = l(t);
            i.unshift(e), d(t, i)
        }

        function d(t, i) {
            var n = r(), a = e("#gform_uploaded_files_" + g), o = f(t);
            n[o] = i, a.val(e.toJSON(n))
        }

        function f(t) {
            return "input_" + t
        }

        function p(t) {
            t.preventDefault()
        }

        var h = e(i).data("settings"), m = new plupload.Uploader(h);
        g = m.settings.multipart_params.form_id, t.uploaders[h.container] = m;
        var g, v;
        m.bind("Init", function (i, n) {
            i.features.dragdrop || e(".gform_drop_instructions").hide();
            var a = i.settings.multipart_params.field_id, o = parseInt(i.settings.gf_vars.max_files), s = c(a);
            o > 0 && s >= o && t.toggleDisabled(i.settings, !0)
        }), t.toggleDisabled = function (t, i) {
            var n = e("string" == typeof t.browse_button ? "#" + t.browse_button : t.browse_button);
            n.prop("disabled", i)
        }, m.init(), m.bind("FilesAdded", function (i, o) {
            var r, l = parseInt(i.settings.gf_vars.max_files), u = i.settings.multipart_params.field_id, d = c(u), f = i.settings.gf_vars.disallowed_extensions;
            if (l > 0 && d >= l)return void e.each(o, function (t, e) {
                i.removeFile(e)
            });
            e.each(o, function (t, n) {
                if (r = n.name.split(".").pop(), e.inArray(r, f) > -1)return s(i.settings.gf_vars.message_id, n.name + " - " + a.illegal_extension), void i.removeFile(n);
                if (n.status == plupload.FAILED || l > 0 && d >= l)return void i.removeFile(n);
                var o = "undefined" != typeof n.size ? plupload.formatSize(n.size) : a.in_progress, c = '<div id="' + n.id + '" class="ginput_preview">' + n.name + " (" + o + ') <b></b> <a href="javascript:void(0)" title="' + a.cancel_upload + "\" onclick='$this=jQuery(this); var uploader = gfMultiFileUploader.uploaders." + i.settings.container + ';uploader.stop();uploader.removeFile(uploader.getFile("' + n.id + '"));$this.after("' + a.cancelled + "\"); uploader.start();$this.remove();' onkeypress='$this=jQuery(this); var uploader = gfMultiFileUploader.uploaders." + i.settings.container + ';uploader.stop();uploader.removeFile(uploader.getFile("' + n.id + '"));$this.after("' + a.cancelled + "\"); uploader.start();$this.remove();'>" + a.cancel + "</a></div>";
                e("#" + i.settings.filelist).prepend(c), d++
            }), i.refresh();
            var p = "form#gform_" + g, h = "input:hidden[name='gform_unique_id']", m = p + " " + h, y = e(m);
            0 == y.length && (y = e(h)), v = y.val(), "" === v && (v = n(), y.val(v)), l > 0 && d >= l && (t.toggleDisabled(i.settings, !0), s(i.settings.gf_vars.message_id, a.max_reached)), i.settings.multipart_params.gform_unique_id = v, i.start()
        }), m.bind("UploadProgress", function (t, i) {
            var n = i.percent + "%";
            e("#" + i.id + " b").html(n)
        }), m.bind("Error", function (t, i) {
            if (i.code === plupload.FILE_EXTENSION_ERROR) {
                var n = "undefined" != typeof t.settings.filters.mime_types ? t.settings.filters.mime_types[0].extensions : t.settings.filters[0].extensions;
                s(t.settings.gf_vars.message_id, i.file.name + " - " + a.invalid_file_extension + " " + n)
            } else if (i.code === plupload.FILE_SIZE_ERROR)s(t.settings.gf_vars.message_id, i.file.name + " - " + a.file_exceeds_limit); else {
                var o = "<li>Error: " + i.code + ", Message: " + i.message + (i.file ? ", File: " + i.file.name : "") + "</li>";
                s(t.settings.gf_vars.message_id, o)
            }
            e("#" + i.file.id).html(""), t.refresh()
        }), m.bind("FileUploaded", function (t, i, n) {
            var r = e.secureEvalJSON(n.response);
            if ("error" == r.status)return s(t.settings.gf_vars.message_id, i.name + " - " + r.error.message), void e("#" + i.id).html("");
            var l = "<strong>" + i.name + "</strong>", c = t.settings.multipart_params.form_id, d = t.settings.multipart_params.field_id;
            l = "<img class='gform_delete' src='" + o + "/delete.png' onclick='gformDeleteUploadedFile(" + c + "," + d + ", this);' onkeypress='gformDeleteUploadedFile(" + c + "," + d + ", this);' alt='" + a.delete_file + "' title='" + a.delete_file + "' /> " + l, l = gform.applyFilters("gform_file_upload_markup", l, i, t, a, o), e("#" + i.id).html(l);
            var f = t.settings.multipart_params.field_id;
            100 == i.percent && (r.status && "ok" == r.status ? u(f, r.data) : s(t.settings.gf_vars.message_id, a.unknown_error + ": " + i.name))
        }), e("#" + h.drop_element).on({dragenter: p, dragover: p})
    }

    function n() {
        return "xxxxxxxx".replace(/[xy]/g, function (t) {
            var e = 16 * Math.random() | 0, i = "x" == t ? e : 3 & e | 8;
            return i.toString(16)
        })
    }

    t.uploaders = {};
    var a = "undefined" != typeof gform_gravityforms ? gform_gravityforms.strings : {}, o = "undefined" != typeof gform_gravityforms ? gform_gravityforms.vars.images_url : "";
    e(document).bind("gform_post_render", function (n, o) {
        e("form#gform_" + o + " .gform_fileupload_multifile").each(function () {
            i(this)
        });
        var s = e("form#gform_" + o);
        s.length > 0 && s.submit(function () {
            var i = !1;
            return e.each(t.uploaders, function (t, e) {
                return e.total.queued > 0 ? (i = !0, !1) : void 0
            }), i ? (alert(a.currently_uploading), window["gf_submitting_" + o] = !1, e("#gform_ajax_spinner_" + o).remove(), !1) : void 0
        })
    }), e(document).bind("gform_post_conditional_logic", function (i, n, a, o) {
        o || e.each(t.uploaders, function (t, e) {
            e.refresh()
        })
    }), e(document).ready(function () {
        "undefined" != typeof adminpage && "toplevel_page_gf_edit_forms" === adminpage || "undefined" == typeof plupload ? e(".gform_button_select_files").prop("disabled", !0) : "undefined" != typeof adminpage && adminpage.indexOf("_page_gf_entries") > -1 && e(".gform_fileupload_multifile").each(function () {
            i(this)
        })
    }), t.setup = function (t) {
        i(t)
    }
}(window.gfMultiFileUploader = window.gfMultiFileUploader || {}, jQuery);
var __gf_keyup_timeout;
jQuery(document).on("change keyup", ".gfield_trigger_change input, .gfield_trigger_change select, .gfield_trigger_change textarea", function (t) {
    gf_raw_input_change(t, this)
}), !window.rgars, !window.rgar, String.prototype.format = function () {
    var t = arguments;
    return this.replace(/{(\d+)}/g, function (e, i) {
        return "undefined" != typeof t[i] ? t[i] : e
    })
};
var __gf_timeout_handle;
gform.addAction("gform_input_change", function (t, e, i) {
    var n = rgars(gf_form_conditional_logic, [e, "fields", gformExtractFieldId(i)].join("/"));
    n && gf_apply_rules(e, n)
}, 10), !function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t) {
    var e, i = navigator.userAgent, n = /iphone/i.test(i), a = /chrome/i.test(i), o = /android/i.test(i);
    t.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, t.fn.extend({
        caret: function (t, e) {
            var i;
            if (0 !== this.length && !this.is(":hidden"))return "number" == typeof t ? (e = "number" == typeof e ? e : t, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && (i = this.createTextRange(), i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", t), i.select())
            })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), t = 0 - i.duplicate().moveStart("character", -1e5), e = t + i.text.length), {
                begin: t,
                end: e
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (i, s) {
            var r, l, c, u, d, f, p, h;
            if (!i && this.length > 0) {
                r = t(this[0]);
                var m = r.data(t.mask.dataName);
                return m ? m() : void 0
            }
            return s = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, s), l = t.mask.definitions, c = [], u = p = i.length, d = null, t.each(i.split(""), function (t, e) {
                "?" == e ? (p--, u = t) : l[e] ? (c.push(new RegExp(l[e])), null === d && (d = c.length - 1), u > t && (f = c.length - 1)) : c.push(null)
            }), this.trigger("unmask").each(function () {
                function r() {
                    if (s.completed) {
                        for (var t = d; f >= t; t++)if (c[t] && $[t] === m(t))return;
                        s.completed.call(T)
                    }
                }

                function m(t) {
                    return s.placeholder.charAt(t < s.placeholder.length ? t : 0)
                }

                function g(t) {
                    for (; ++t < p && !c[t];);
                    return t
                }

                function v(t) {
                    for (; --t >= 0 && !c[t];);
                    return t
                }

                function y(t, e) {
                    var i, n;
                    if (!(0 > t)) {
                        for (i = t, n = g(e); p > i; i++)if (c[i]) {
                            if (!(p > n && c[i].test($[n])))break;
                            $[i] = $[n], $[n] = m(n), n = g(n)
                        }
                        k(), T.caret(Math.max(d, t))
                    }
                }

                function b(t) {
                    var e, i, n, a;
                    for (e = t, i = m(t); p > e; e++)if (c[e]) {
                        if (n = g(e), a = $[e], $[e] = i, !(p > n && c[n].test(a)))break;
                        i = a
                    }
                }

                function w() {
                    var t = T.val(), e = T.caret();
                    if (h && h.length && h.length > t.length) {
                        for (I(!0); e.begin > 0 && !c[e.begin - 1];)e.begin--;
                        if (0 === e.begin)for (; e.begin < d && !c[e.begin];)e.begin++;
                        T.caret(e.begin, e.begin)
                    } else {
                        for (I(!0); e.begin < p && !c[e.begin];)e.begin++;
                        T.caret(e.begin, e.begin)
                    }
                    r()
                }

                function _() {
                    I(), T.val() != E && T.change()
                }

                function x(t) {
                    if (!T.prop("readonly")) {
                        var e, i, a, o = t.which || t.keyCode;
                        h = T.val(), 8 === o || 46 === o || n && 127 === o ? (e = T.caret(), i = e.begin, a = e.end, a - i === 0 && (i = 46 !== o ? v(i) : a = g(i - 1), a = 46 === o ? g(a) : a), S(i, a), y(i, a - 1), t.preventDefault()) : 13 === o ? _.call(this, t) : 27 === o && (T.val(E), T.caret(0, I()), t.preventDefault())
                    }
                }

                function C(e) {
                    if (!T.prop("readonly")) {
                        var i, n, a, s = e.which || e.keyCode, l = T.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > s) && s && 13 !== s) {
                            if (l.end - l.begin !== 0 && (S(l.begin, l.end), y(l.begin, l.end - 1)), i = g(l.begin - 1), p > i && (n = String.fromCharCode(s), c[i].test(n))) {
                                if (b(i), $[i] = n, k(), a = g(i), o) {
                                    var u = function () {
                                        t.proxy(t.fn.caret, T, a)()
                                    };
                                    setTimeout(u, 0)
                                } else T.caret(a);
                                l.begin <= f && r()
                            }
                            e.preventDefault()
                        }
                    }
                }

                function S(t, e) {
                    var i;
                    for (i = t; e > i && p > i; i++)c[i] && ($[i] = m(i))
                }

                function k() {
                    T.val($.join(""))
                }

                function I(t) {
                    var e, i, n, a = T.val(), o = -1;
                    for (e = 0, n = 0; p > e; e++)if (c[e]) {
                        for ($[e] = m(e); n++ < a.length;)if (i = a.charAt(n - 1), c[e].test(i)) {
                            $[e] = i, o = e;
                            break
                        }
                        if (n > a.length) {
                            S(e + 1, p);
                            break
                        }
                    } else $[e] === a.charAt(n) && n++, u > e && (o = e);
                    return t ? k() : u > o + 1 ? s.autoclear || $.join("") === P ? (T.val() && T.val(""), S(0, p)) : k() : (k(), T.val(T.val().substring(0, o + 1))), u ? e : d
                }

                var T = t(this), $ = t.map(i.split(""), function (t, e) {
                    return "?" != t ? l[t] ? m(e) : t : void 0
                }), P = $.join(""), E = T.val();
                T.data(t.mask.dataName, function () {
                    return t.map($, function (t, e) {
                        return c[e] && t != m(e) ? t : null
                    }).join("")
                }), T.one("unmask", function () {
                    T.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function () {
                    if (!T.prop("readonly")) {
                        clearTimeout(e);
                        var t;
                        E = T.val(), t = I(), e = setTimeout(function () {
                            T.get(0) === document.activeElement && (k(), t == i.replace("?", "").length ? T.caret(0, t) : T.caret(t))
                        }, 10)
                    }
                }).on("blur.mask", _).on("keydown.mask", x).on("keypress.mask", C).on("input.mask paste.mask", function () {
                    T.prop("readonly") || setTimeout(function () {
                        var t = I(!0);
                        T.caret(t), r()
                    }, 0)
                }), a && o && T.off("input.mask").on("input.mask", w), I()
            })
        }
    })
}), function (t) {
    "use strict";
    function e(t, e, i) {
        return t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : void 0
    }

    function i(t, e) {
        var i, n;
        for (i = 0, n = t.length; n > i; i++)if (t[i] === e)return !0;
        return !1
    }

    function n(t, e) {
        var i;
        t.createTextRange ? (i = t.createTextRange(), i.move("character", e), i.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }

    function a(t, e) {
        try {
            return t.type = e, !0
        } catch (i) {
            return !1
        }
    }

    t.Placeholders = {Utils: {addEventListener: e, inArray: i, moveCaret: n, changeType: a}}
}(this), function (t) {
    "use strict";
    function e() {
    }

    function i() {
        try {
            return document.activeElement
        } catch (t) {
        }
    }

    function n(t, e) {
        var i, n, a = !!e && t.value !== e, o = t.value === t.getAttribute(j);
        return !(!a && !o || "true" !== t.getAttribute(N)) && (t.removeAttribute(N), t.value = t.value.replace(t.getAttribute(j), ""), t.className = t.className.replace(A, ""), n = t.getAttribute(Q), parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(Q)), i = t.getAttribute(F), i && (t.type = i), !0)
    }

    function a(t) {
        var e, i, n = t.getAttribute(j);
        return !("" !== t.value || !n) && (t.setAttribute(N, "true"), t.value = n, t.className += " " + M, i = t.getAttribute(Q), i || (t.setAttribute(Q, t.maxLength), t.removeAttribute("maxLength")), e = t.getAttribute(F), e ? t.type = "text" : "password" === t.type && q.changeType(t, "text") && t.setAttribute(F, "password"), !0)
    }

    function o(t, e) {
        var i, n, a, o, s, r, l;
        if (t && t.getAttribute(j))e(t); else for (a = t ? t.getElementsByTagName("input") : m, o = t ? t.getElementsByTagName("textarea") : g, i = a ? a.length : 0, n = o ? o.length : 0, l = 0, r = i + n; r > l; l++)s = i > l ? a[l] : o[l - i], e(s)
    }

    function s(t) {
        o(t, n)
    }

    function r(t) {
        o(t, a)
    }

    function l(t) {
        return function () {
            v && t.value === t.getAttribute(j) && "true" === t.getAttribute(N) ? q.moveCaret(t, 0) : n(t)
        }
    }

    function c(t) {
        return function () {
            a(t)
        }
    }

    function u(t) {
        return function (e) {
            return b = t.value, "true" === t.getAttribute(N) && b === t.getAttribute(j) && q.inArray(P, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
        }
    }

    function d(t) {
        return function () {
            n(t, b), "" === t.value && (t.blur(), q.moveCaret(t, 0))
        }
    }

    function f(t) {
        return function () {
            t === i() && t.value === t.getAttribute(j) && "true" === t.getAttribute(N) && q.moveCaret(t, 0)
        }
    }

    function p(t) {
        return function () {
            s(t)
        }
    }

    function h(t) {
        t.form && (S = t.form, "string" == typeof S && (S = document.getElementById(S)), S.getAttribute(L) || (q.addEventListener(S, "submit", p(S)), S.setAttribute(L, "true"))), q.addEventListener(t, "focus", l(t)), q.addEventListener(t, "blur", c(t)), v && (q.addEventListener(t, "keydown", u(t)), q.addEventListener(t, "keyup", d(t)), q.addEventListener(t, "click", f(t))), t.setAttribute(O, "true"), t.setAttribute(j, x), (v || t !== i()) && a(t)
    }

    var m, g, v, y, b, w, _, x, C, S, k, I, T, $ = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], P = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], E = "#ccc", M = "placeholdersjs", A = RegExp("(?:^|\\s)" + M + "(?!\\S)"), j = "data-placeholder-value", N = "data-placeholder-active", F = "data-placeholder-type", L = "data-placeholder-submit", O = "data-placeholder-bound", V = "data-placeholder-focus", D = "data-placeholder-live", Q = "data-placeholder-maxlength", W = document.createElement("input"), H = document.getElementsByTagName("head")[0], z = document.documentElement, R = t.Placeholders, q = R.Utils;
    if (R.nativeSupport = void 0 !== W.placeholder, !R.nativeSupport) {
        for (m = document.getElementsByTagName("input"), g = document.getElementsByTagName("textarea"), v = "false" === z.getAttribute(V), y = "false" !== z.getAttribute(D), w = document.createElement("style"), w.type = "text/css", _ = document.createTextNode("." + M + " { color:" + E + "; }"), w.styleSheet ? w.styleSheet.cssText = _.nodeValue : w.appendChild(_), H.insertBefore(w, H.firstChild), T = 0, I = m.length + g.length; I > T; T++)k = m.length > T ? m[T] : g[T - m.length], x = k.attributes.placeholder, x && (x = x.nodeValue, x && q.inArray($, k.type) && h(k));
        C = setInterval(function () {
            for (T = 0, I = m.length + g.length; I > T; T++)k = m.length > T ? m[T] : g[T - m.length], x = k.attributes.placeholder, x ? (x = x.nodeValue, x && q.inArray($, k.type) && (k.getAttribute(O) || h(k), (x !== k.getAttribute(j) || "password" === k.type && !k.getAttribute(F)) && ("password" === k.type && !k.getAttribute(F) && q.changeType(k, "text") && k.setAttribute(F, "password"), k.value === k.getAttribute(j) && (k.value = x), k.setAttribute(j, x)))) : k.getAttribute(N) && (n(k), k.removeAttribute(j));
            y || clearInterval(C)
        }, 100)
    }
    q.addEventListener(t, "beforeunload", function () {
        R.disable()
    }), R.disable = R.nativeSupport ? e : s, R.enable = R.nativeSupport ? e : r
}(this), function (t) {
    "use strict";
    var e = t.fn.val, i = t.fn.prop;
    Placeholders.nativeSupport || (t.fn.val = function (t) {
        var i = e.apply(this, arguments), n = this.eq(0).data("placeholder-value");
        return void 0 === t && this.eq(0).data("placeholder-active") && i === n ? "" : i
    }, t.fn.prop = function (t, e) {
        return void 0 === e && this.eq(0).data("placeholder-active") && "value" === t ? "" : i.apply(this, arguments)
    })
}(jQuery), function (t) {
    t.flexslider = function (e, i) {
        var n = t(e);
        n.vars = t.extend({}, t.flexslider.defaults, i);
        var a, o = n.vars.namespace, s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch, l = "click touchend MSPointerUp keyup", c = "", u = "vertical" === n.vars.direction, d = n.vars.reverse, f = n.vars.itemWidth > 0, p = "fade" === n.vars.animation, h = "" !== n.vars.asNavFor, m = {}, g = !0;
        t.data(e, "flexslider", n), m = {
            init: function () {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = t(n.vars.selector, n), n.container = t(n.containerSelector, n), n.count = n.slides.length, n.syncExists = t(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = u ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
                        var t = document.createElement("div"), e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)if (void 0 !== t.style[e[i]])return n.pfx = e[i].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                        return !1
                    }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = t(n.vars.controlsContainer).length > 0 && t(n.vars.controlsContainer)),
                "" !== n.vars.manualControls && (n.manualControls = t(n.vars.manualControls).length > 0 && t(n.vars.manualControls)), n.vars.randomize && (n.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && m.controlNav.setup(), n.vars.directionNav && m.directionNav.setup(), n.vars.keyboard && (1 === t(n.containerSelector).length || n.vars.multipleKeyboard) && t(document).bind("keyup", function (t) {
                    var e = t.keyCode;
                    if (!n.animating && (39 === e || 37 === e)) {
                        var i = 39 === e ? n.getTarget("next") : 37 === e && n.getTarget("prev");
                        n.flexAnimate(i, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function (t, e, i, a) {
                    t.preventDefault();
                    var o = e < 0 ? n.getTarget("next") : n.getTarget("prev");
                    n.flexAnimate(o, n.vars.pauseOnAction)
                }), n.vars.pausePlay && m.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && m.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
                    n.manualPlay || n.manualPause || n.pause()
                }, function () {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && m.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), h && m.asNav.setup(), r && n.vars.touch && m.touch(), (!p || p && n.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
                    n.vars.start(n)
                }, 200)
            }, asNav: {
                setup: function () {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(o + "active-slide").eq(n.currentItem).addClass(o + "active-slide"), s ? (e._slider = n, n.slides.each(function () {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (t) {
                            t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function (e) {
                            e.preventDefault();
                            var i = t(this), a = i.index();
                            t(n.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(l, function (e) {
                        e.preventDefault();
                        var i = t(this), a = i.index(), s = i.offset().left - t(n).scrollLeft();
                        s <= 0 && i.hasClass(o + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : t(n.vars.asNavFor).data("flexslider").animating || i.hasClass(o + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            }, controlNav: {
                setup: function () {
                    n.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                }, setupPaging: function () {
                    var e, i, a = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging", s = 1;
                    if (n.controlNavScaffold = t('<ol class="' + o + "control-nav " + o + a + '"></ol>'), n.pagingCount > 1)for (var r = 0; r < n.pagingCount; r++) {
                        if (i = n.slides.eq(r), e = "thumbnails" === n.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"/>' : "<a>" + s + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                            var u = i.attr("data-thumbcaption");
                            "" != u && void 0 != u && (e += '<span class="' + o + 'caption">' + u + "</span>")
                        }
                        n.controlNavScaffold.append("<li>" + e + "</li>"), s++
                    }
                    n.controlsContainer ? t(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function (e) {
                        if (e.preventDefault(), "" === c || c === e.type) {
                            var i = t(this), a = n.controlNav.index(i);
                            i.hasClass(o + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === c && (c = e.type), m.setToClearWatchedEvent()
                    })
                }, setupManual: function () {
                    n.controlNav = n.manualControls, m.controlNav.active(), n.controlNav.bind(l, function (e) {
                        if (e.preventDefault(), "" === c || c === e.type) {
                            var i = t(this), a = n.controlNav.index(i);
                            i.hasClass(o + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === c && (c = e.type), m.setToClearWatchedEvent()
                    })
                }, set: function () {
                    var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = t("." + o + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                }, active: function () {
                    n.controlNav.removeClass(o + "active").eq(n.animatingTo).addClass(o + "active")
                }, update: function (e, i) {
                    n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append(t("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(i).closest("li").remove(), m.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(i, e) : m.controlNav.active()
                }
            }, directionNav: {
                setup: function () {
                    var e = t('<ul class="' + o + 'direction-nav"><li><a class="' + o + 'prev" href="#">' + n.vars.prevText + '</a></li><li><a class="' + o + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.controlsContainer ? (t(n.controlsContainer).append(e), n.directionNav = t("." + o + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = t("." + o + "direction-nav li a", n)), m.directionNav.update(), n.directionNav.bind(l, function (e) {
                        e.preventDefault();
                        var i;
                        "" !== c && c !== e.type || (i = t(this).hasClass(o + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(i, n.vars.pauseOnAction)), "" === c && (c = e.type), m.setToClearWatchedEvent()
                    })
                }, update: function () {
                    var t = o + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + o + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + o + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                }
            }, pausePlay: {
                setup: function () {
                    var e = t('<div class="' + o + 'pauseplay"><a></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = t("." + o + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = t("." + o + "pauseplay a", n)), m.pausePlay.update(n.vars.slideshow ? o + "pause" : o + "play"), n.pausePlay.bind(l, function (e) {
                        e.preventDefault(), "" !== c && c !== e.type || (t(this).hasClass(o + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === c && (c = e.type), m.setToClearWatchedEvent()
                    })
                }, update: function (t) {
                    "play" === t ? n.pausePlay.removeClass(o + "pause").addClass(o + "play").html(n.vars.playText) : n.pausePlay.removeClass(o + "play").addClass(o + "pause").html(n.vars.pauseText)
                }
            }, touch: function () {
                function t(t) {
                    n.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (n.pause(), g = u ? n.h : n.w, y = Number(new Date), w = t.touches[0].pageX, _ = t.touches[0].pageY, m = f && d && n.animatingTo === n.last ? 0 : f && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : f && n.currentSlide === n.last ? n.limit : f ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g, c = u ? _ : w, h = u ? w : _, e.addEventListener("touchmove", i, !1), e.addEventListener("touchend", a, !1))
                }

                function i(t) {
                    w = t.touches[0].pageX, _ = t.touches[0].pageY, v = u ? c - _ : c - w, b = u ? Math.abs(v) < Math.abs(w - h) : Math.abs(v) < Math.abs(_ - h);
                    var e = 500;
                    (!b || Number(new Date) - y > e) && (t.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (v /= 0 === n.currentSlide && v < 0 || n.currentSlide === n.last && v > 0 ? Math.abs(v) / g + 2 : 1), n.setProps(m + v, "setTouch")))
                }

                function a(t) {
                    if (e.removeEventListener("touchmove", i, !1), n.animatingTo === n.currentSlide && !b && null !== v) {
                        var o = d ? -v : v, s = o > 0 ? n.getTarget("next") : n.getTarget("prev");
                        n.canAdvance(s) && (Number(new Date) - y < 550 && Math.abs(o) > 50 || Math.abs(o) > g / 2) ? n.flexAnimate(s, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    e.removeEventListener("touchend", a, !1), c = null, h = null, v = null, m = null
                }

                function o(t) {
                    t.stopPropagation(), n.animating ? t.preventDefault() : (n.pause(), e._gesture.addPointer(t.pointerId), x = 0, g = u ? n.h : n.w, y = Number(new Date), m = f && d && n.animatingTo === n.last ? 0 : f && d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : f && n.currentSlide === n.last ? n.limit : f ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : d ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g)
                }

                function r(t) {
                    t.stopPropagation();
                    var i = t.target._slider;
                    if (i) {
                        var n = -t.translationX, a = -t.translationY;
                        return x += u ? a : n, v = x, b = u ? Math.abs(x) < Math.abs(-n) : Math.abs(x) < Math.abs(-a), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            e._gesture.stop()
                        }) : void((!b || Number(new Date) - y > 500) && (t.preventDefault(), !p && i.transitions && (i.vars.animationLoop || (v = x / (0 === i.currentSlide && x < 0 || i.currentSlide === i.last && x > 0 ? Math.abs(x) / g + 2 : 1)), i.setProps(m + v, "setTouch"))))
                    }
                }

                function l(t) {
                    t.stopPropagation();
                    var e = t.target._slider;
                    if (e) {
                        if (e.animatingTo === e.currentSlide && !b && null !== v) {
                            var i = d ? -v : v, n = i > 0 ? e.getTarget("next") : e.getTarget("prev");
                            e.canAdvance(n) && (Number(new Date) - y < 550 && Math.abs(i) > 50 || Math.abs(i) > g / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : p || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        c = null, h = null, v = null, m = null, x = 0
                    }
                }

                var c, h, m, g, v, y, b = !1, w = 0, _ = 0, x = 0;
                s ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", o, !1), e._slider = n, e.addEventListener("MSGestureChange", r, !1), e.addEventListener("MSGestureEnd", l, !1)) : e.addEventListener("touchstart", t, !1)
            }, resize: function () {
                !n.animating && n.is(":visible") && (f || n.doMath(), p ? m.smoothHeight() : f ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : u ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && m.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            }, smoothHeight: function (t) {
                if (!u || p) {
                    var e = p ? n : n.viewport;
                    t ? e.animate({height: n.slides.eq(n.animatingTo).height()}, t) : e.height(n.slides.eq(n.animatingTo).height())
                }
            }, sync: function (e) {
                var i = t(n.vars.sync).data("flexslider"), a = n.animatingTo;
                switch (e) {
                    case"animate":
                        i.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        i.playing || i.asNav || i.play();
                        break;
                    case"pause":
                        i.pause()
                }
            }, uniqueID: function (e) {
                return e.find("[id]").each(function () {
                    var e = t(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            }, pauseInvisible: {
                visProp: null, init: function () {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document)return "hidden";
                    for (var e = 0; e < t.length; e++)t[e] + "Hidden" in document && (m.pauseInvisible.visProp = t[e] + "Hidden");
                    if (m.pauseInvisible.visProp) {
                        var i = m.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(i, function () {
                            m.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                }, isHidden: function () {
                    return document[m.pauseInvisible.visProp] || !1
                }
            }, setToClearWatchedEvent: function () {
                clearTimeout(a), a = setTimeout(function () {
                    c = ""
                }, 3e3)
            }
        }, n.flexAnimate = function (e, i, a, s, l) {
            if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), h && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, l) || a) && n.is(":visible")) {
                if (h && s) {
                    var c = t(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === e || e === n.count - 1, c.flexAnimate(e, !0, !1, !0, l), n.direction = n.currentItem < e ? "next" : "prev", c.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e)return n.currentItem = e, n.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide"), !1;
                    n.currentItem = e, n.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide"), e = Math.floor(e / n.visible)
                }
                if (n.animating = !0, n.animatingTo = e, i && n.pause(), n.vars.before(n), n.syncExists && !l && m.sync("animate"), n.vars.controlNav && m.controlNav.active(), f || n.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && m.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p)r ? (n.slides.eq(n.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), n.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), n.wrapup(b)) : (n.slides.eq(n.currentSlide).css({zIndex: 1}).animate({opacity: 0}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing, n.wrapup)); else {
                    var g, v, y, b = u ? n.slides.filter(":first").height() : n.computedW;
                    f ? (g = n.vars.itemMargin, y = (n.itemW + g) * n.move * n.animatingTo, v = y > n.limit && 1 !== n.visible ? n.limit : y) : v = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? d ? (n.count + n.cloneOffset) * b : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? d ? 0 : (n.count + 1) * b : d ? (n.count - 1 - e + n.cloneOffset) * b : (e + n.cloneOffset) * b, n.setProps(v, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(b)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
                        n.wrapup(b)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
                        n.wrapup(b)
                    })
                }
                n.vars.smoothHeight && m.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function (t) {
            p || f || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function () {
            !n.animating && g && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function () {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && m.pausePlay.update("play"), n.syncExists && m.sync("pause")
        }, n.play = function () {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && m.pausePlay.update("pause"), n.syncExists && m.sync("play")
        }, n.stop = function () {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function (t, e) {
            var i = h ? n.pagingCount - 1 : n.last;
            return !!e || (!(!h || n.currentItem !== n.count - 1 || 0 !== t || "prev" !== n.direction) || (!h || 0 !== n.currentItem || t !== n.pagingCount - 1 || "next" === n.direction) && (!(t === n.currentSlide && !h) && (!!n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || t !== i || "next" === n.direction) && (!n.atEnd || n.currentSlide !== i || 0 !== t || "next" !== n.direction))))
        }, n.getTarget = function (t) {
            return n.direction = t, "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function (t, e, i) {
            var a = function () {
                var i = t ? t : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo, a = function () {
                    if (f)return "setTouch" === e ? t : d && n.animatingTo === n.last ? 0 : d ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : i;
                    switch (e) {
                        case"setTotal":
                            return d ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t : (n.currentSlide + n.cloneOffset) * t;
                        case"setTouch":
                            return d ? t : t;
                        case"jumpEnd":
                            return d ? t : n.count * t;
                        case"jumpStart":
                            return d ? n.count * t : t;
                        default:
                            return t
                    }
                }();
                return a * -1 + "px"
            }();
            n.transitions && (a = u ? "translate3d(0," + a + ",0)" : "translate3d(" + a + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)), n.args[n.prop] = a, (n.transitions || void 0 === i) && n.container.css(n.args), n.container.css("transform", a)
        }, n.setup = function (e) {
            if (p)n.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (r ? (n.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(n.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }), n.slides.css("transition", "opacity " + n.vars.animationSpeed / 1e3 + "s ease")) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({zIndex: 2}).css({opacity: 1}) : n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && m.smoothHeight(); else {
                var i, a;
                "init" === e && (n.viewport = t('<div class="' + o + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, d && (a = t.makeArray(n.slides).reverse(), n.slides = t(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !f && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), m.uniqueID(n.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(n.container), m.uniqueID(n.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(n.container)), n.newSlides = t(n.vars.selector, n), i = d ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, u && !f ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    n.newSlides.css({display: "block"}), n.doMath(), n.viewport.height(n.h), n.setProps(i * n.h, "init")
                }, "init" === e ? 100 : 0)) : (n.newSlides.css({
                    width: n.computedW,
                    "float": "left",
                    display: "block"
                }), n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(i * n.computedW, "init"), setTimeout(function () {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        "float": "left",
                        display: "block"
                    }), n.vars.smoothHeight && m.smoothHeight()
                }, "init" === e ? 100 : 0))
            }
            f || n.slides.removeClass(o + "active-slide").eq(n.currentSlide).addClass(o + "active-slide"), n.vars.init(n)
        }, n.doMath = function () {
            var t = n.slides.first(), e = n.vars.itemMargin, i = n.vars.minItems, a = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = t.height(), n.boxPadding = t.outerWidth() - t.width(), f ? (n.itemT = n.vars.itemWidth + e, n.minW = i ? i * n.itemT : n.w, n.maxW = a ? a * n.itemT - e : n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i : n.maxW < n.w ? (n.w - e * (a - 1)) / a : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
        }, n.update = function (t, e) {
            n.doMath(), f || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === e && !f || n.pagingCount > n.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !f || n.pagingCount < n.controlNav.length) && (f && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), m.controlNav.update("remove", n.last))), n.vars.directionNav && m.directionNav.update()
        }, n.addSlide = function (e, i) {
            var a = t(e);
            n.count += 1, n.last = n.count - 1, u && d ? void 0 !== i ? n.slides.eq(n.count - i).after(a) : n.container.prepend(a) : void 0 !== i ? n.slides.eq(i).before(a) : n.container.append(a), n.update(i, "add"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function (e) {
            var i = isNaN(e) ? n.slides.index(t(e)) : e;
            n.count -= 1, n.last = n.count - 1, isNaN(e) ? t(e, n.slides).remove() : u && d ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(i, "remove"), n.slides = t(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, m.init()
    }, t(window).blur(function (t) {
        focused = !1
    }).focus(function (t) {
        focused = !0
    }), t.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {
        },
        before: function () {
        },
        after: function () {
        },
        end: function () {
        },
        added: function () {
        },
        removed: function () {
        },
        init: function () {
        }
    }, t.fn.flexslider = function (e) {
        if (void 0 === e && (e = {}), "object" == typeof e)return this.each(function () {
            var i = t(this), n = e.selector ? e.selector : ".slides > li", a = i.find(n);
            1 === a.length && e.allowOneSlide === !0 || 0 === a.length ? (a.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
        });
        var i = t(this).data("flexslider");
        switch (e) {
            case"play":
                i.play();
                break;
            case"pause":
                i.pause();
                break;
            case"stop":
                i.stop();
                break;
            case"next":
                i.flexAnimate(i.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                i.flexAnimate(i.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && i.flexAnimate(e, !0)
        }
    }
}(jQuery), !function (t, e, i, n) {
    "use strict";
    function a(t) {
        var e = t.currentTarget, n = t.data ? t.data.options : {}, a = t.data ? t.data.items : [], o = "", s = 0;
        t.preventDefault(), t.stopPropagation(), i(e).attr("data-fancybox") && (o = i(e).data("fancybox")), o ? (a = a.length ? a.filter('[data-fancybox="' + o + '"]') : i("[data-fancybox=" + o + "]"), s = a.index(e)) : a = [e], i.fancybox.open(a, n, s)
    }

    if (!i)return n;
    var o = {
        speed: 330,
        loop: !0,
        opacity: "auto",
        margin: [44, 0],
        gutter: 30,
        infobar: !0,
        buttons: !0,
        slideShow: !0,
        fullScreen: !0,
        thumbs: !0,
        closeBtn: !0,
        smallBtn: "auto",
        image: {preload: "auto", protect: !1},
        ajax: {settings: {data: {fancybox: !0}}},
        iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
            preload: !0,
            scrolling: "no",
            css: {}
        },
        baseClass: "",
        slideClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',
        closeTpl: '<button data-fancybox-close class="fancybox-close-small"></button>',
        parentEl: "body",
        touch: !0,
        keyboard: !0,
        focus: !0,
        closeClickOutside: !0,
        beforeLoad: i.noop,
        afterLoad: i.noop,
        beforeMove: i.noop,
        afterMove: i.noop,
        onComplete: i.noop,
        onInit: i.noop,
        beforeClose: i.noop,
        afterClose: i.noop,
        onActivate: i.noop,
        onDeactivate: i.noop
    }, s = i(t), r = i(e), l = 0, c = function (t) {
        return t && t.hasOwnProperty && t instanceof i
    }, u = function () {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (e) {
                t.setTimeout(e, 1e3 / 60)
            }
    }(), d = function (n) {
        var a;
        return "function" == typeof i && n instanceof i && (n = n[0]), a = n.getBoundingClientRect(), a.bottom > 0 && a.right > 0 && a.left < (t.innerWidth || e.documentElement.clientWidth) && a.top < (t.innerHeight || e.documentElement.clientHeight)
    }, f = function (t, n, a) {
        var s = this;
        s.opts = i.extend(!0, {index: a}, o, n || {}), s.id = s.opts.id || ++l, s.group = [], s.currIndex = parseInt(s.opts.index, 10) || 0, s.prevIndex = null, s.prevPos = null, s.currPos = 0, s.firstRun = null, s.createGroup(t), s.group.length && (s.$lastFocus = i(e.activeElement).blur(), s.slides = {}, s.init(t))
    };
    i.extend(f.prototype, {
        init: function () {
            var t, e, n = this, a = !1;
            n.scrollTop = r.scrollTop(), n.scrollLeft = r.scrollLeft(), i.fancybox.getInstance() || (t = i("body").width(), i("html").addClass("fancybox-enabled"), i.fancybox.isTouch ? (i.each(n.group, function (t, e) {
                if ("image" !== e.type && "iframe" !== e.type)return a = !0, !1
            }), a && i("body").css({
                position: "fixed",
                width: t,
                top: n.scrollTop * -1
            })) : (t = i("body").width() - t, t > 1 && i('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: " + t + "px; }").appendTo("head"))), e = i(n.opts.baseTpl).attr("id", "fancybox-container-" + n.id).data("FancyBox", n).addClass(n.opts.baseClass).hide().prependTo(n.opts.parentEl), n.$refs = {
                container: e,
                bg: e.find(".fancybox-bg"),
                controls: e.find(".fancybox-controls"),
                buttons: e.find(".fancybox-buttons"),
                slider_wrap: e.find(".fancybox-slider-wrap"),
                slider: e.find(".fancybox-slider"),
                caption: e.find(".fancybox-caption")
            }, n.trigger("onInit"), n.activate(), n.current || n.jumpTo(n.currIndex)
        }, createGroup: function (t) {
            var e = this, a = i.makeArray(t);
            i.each(a, function (t, a) {
                var o, s, r, l, c = {}, u = {}, d = [];
                i.isPlainObject(a) ? (c = a, u = a.opts || {}) : "object" === i.type(a) && i(a).length ? (o = i(a), d = o.data(), u = "options" in d ? d.options : {}, u = "object" === i.type(u) ? u : {}, c.type = "type" in d ? d.type : u.type, c.src = "src" in d ? d.src : u.src || o.attr("href"), u.width = "width" in d ? d.width : u.width, u.height = "height" in d ? d.height : u.height, u.thumb = "thumb" in d ? d.thumb : u.thumb, u.selector = "selector" in d ? d.selector : u.selector, "srcset" in d && (u.image = {srcset: d.srcset}), u.$orig = o) : c = {
                    type: "html",
                    content: a + ""
                }, c.opts = i.extend(!0, {}, e.opts, u), s = c.type, r = c.src || "", s || (c.content ? s = "html" : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === r.charAt(0) && (s = "inline"), c.type = s), c.index = e.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === i.type(c.opts.caption) ? c.opts.caption = c.opts.caption.apply(a, [e, c]) : "caption" in d ? c.opts.caption = d.caption : u.$orig && (c.opts.caption = o.attr("title")), c.opts.caption = c.opts.caption === n ? "" : c.opts.caption + "", "ajax" === s && (l = r.split(/\s+/, 2), l.length > 1 && (c.src = l.shift(), c.opts.selector = l.shift())), "auto" == c.opts.smallBtn && (i.inArray(s, ["html", "inline", "ajax"]) > -1 ? (c.opts.buttons = !1, c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === s && (c.type = "iframe", c.opts.closeBtn = !0, c.opts.smallBtn = !1, c.opts.iframe.preload = !1), c.opts.modal && i.extend(!0, c.opts, {
                    infobar: 0,
                    buttons: 0,
                    keyboard: 0,
                    slideShow: 0,
                    fullScreen: 0,
                    closeClickOutside: 0
                }), e.group.push(c)
            })
        }, addEvents: function () {
            var e = this;
            e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                t.stopPropagation(), t.preventDefault(), e.close(t)
            }).on("click.fb-previous", "[data-fancybox-previous]", function (t) {
                t.stopPropagation(), t.preventDefault(), e.previous()
            }).on("click.fb-next", "[data-fancybox-next]", function (t) {
                t.stopPropagation(), t.preventDefault(), e.next()
            }), i(t).on("orientationchange.fb resize.fb", function (t) {
                u(function () {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? e.update() : (e.$refs.slider_wrap.hide(), u(function () {
                        e.$refs.slider_wrap.show(), e.update()
                    }))
                })
            }), r.on("focusin.fb", function (t) {
                var n = i.fancybox ? i.fancybox.getInstance() : null;
                !n || i(t.target).hasClass("fancybox-container") || i.contains(n.$refs.container[0], t.target) || (t.stopPropagation(), n.focus(), s.scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))
            }), r.on("keydown.fb", function (t) {
                var n = e.current, a = t.keyCode || t.which;
                if (n && n.opts.keyboard && !i(t.target).is("input") && !i(t.target).is("textarea")) {
                    if (8 === a || 27 === a)return t.preventDefault(), void e.close(t);
                    switch (a) {
                        case 37:
                        case 38:
                            t.preventDefault(), e.previous();
                            break;
                        case 39:
                        case 40:
                            t.preventDefault(), e.next();
                            break;
                        case 80:
                        case 32:
                            t.preventDefault(), e.SlideShow && (t.preventDefault(), e.SlideShow.toggle());
                            break;
                        case 70:
                            e.FullScreen && (t.preventDefault(), e.FullScreen.toggle());
                            break;
                        case 71:
                            e.Thumbs && (t.preventDefault(), e.Thumbs.toggle())
                    }
                }
            })
        }, removeEvents: function () {
            s.off("scroll.fb resize.fb orientationchange.fb"), r.off("keydown.fb focusin.fb click.fb-close"), this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")
        }, previous: function (t) {
            this.jumpTo(this.currIndex - 1, t)
        }, next: function (t) {
            this.jumpTo(this.currIndex + 1, t)
        }, jumpTo: function (t, e) {
            var i, a, o, s, r = this;
            if (i = r.firstRun = null === r.firstRun, a = o = t = parseInt(t, 10), s = !!r.current && r.current.opts.loop, !r.isAnimating && (a != r.currIndex || i)) {
                if (r.group.length > 1 && s)a %= r.group.length, a = a < 0 ? r.group.length + a : a, 2 == r.group.length ? o = t - r.currIndex + r.currPos : (o = a - r.currIndex + r.currPos, Math.abs(r.currPos - (o + r.group.length)) < Math.abs(r.currPos - o) ? o += r.group.length : Math.abs(r.currPos - (o - r.group.length)) < Math.abs(r.currPos - o) && (o -= r.group.length)); else if (!r.group[a])return void r.update(!1, !1, e);
                r.current && (r.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"), r.updateSlide(r.current, !0)), r.prevIndex = r.currIndex, r.prevPos = r.currPos, r.currIndex = a, r.currPos = o, r.current = r.createSlide(o), r.group.length > 1 && ((r.opts.loop || o - 1 >= 0) && r.createSlide(o - 1), (r.opts.loop || o + 1 < r.group.length) && r.createSlide(o + 1)), r.current.isMoved = !1, r.current.isComplete = !1, e = parseInt(e === n ? 1.5 * r.current.opts.speed : e, 10), r.trigger("beforeMove"), r.updateControls(), i && (r.current.$slide.addClass("fancybox-slide--current"), r.$refs.container.show(), u(function () {
                    r.$refs.bg.css("transition-duration", r.current.opts.speed + "ms"), r.$refs.container.addClass("fancybox-container--ready")
                })), r.update(!0, !1, i ? 0 : e, function () {
                    r.afterMove()
                }), r.loadSlide(r.current), i && r.current.$ghost || r.preload()
            }
        }, createSlide: function (t) {
            var e, n, a, o = this;
            if (n = t % o.group.length, n = n < 0 ? o.group.length + n : n, !o.slides[t] && o.group[n]) {
                if (o.opts.loop && o.group.length > 2)for (var s in o.slides)if (o.slides[s].index === n)return a = o.slides[s], a.pos = t, o.slides[t] = a, delete o.slides[s], o.updateSlide(a), a;
                e = i('<div class="fancybox-slide"></div>').appendTo(o.$refs.slider), o.slides[t] = i.extend(!0, {}, o.group[n], {
                    pos: t,
                    $slide: e,
                    isMoved: !1,
                    isLoaded: !1
                })
            }
            return o.slides[t]
        }, zoomInOut: function (t, e, n) {
            var a, o, s, r = this, l = r.current, c = l.$placeholder, u = l.opts.opacity, f = l.opts.$thumb, p = f ? f.offset() : 0, h = l.$slide.offset();
            return !(!(c && l.isMoved && p && d(f)) || "In" === t && !r.firstRun || (i.fancybox.stop(c), r.isAnimating = !0, a = {
                top: p.top - h.top + parseFloat(f.css("border-top-width") || 0),
                left: p.left - h.left + parseFloat(f.css("border-left-width") || 0),
                width: f.width(),
                height: f.height(),
                scaleX: 1,
                scaleY: 1
            }, "auto" == u && (u = Math.abs(l.width / l.height - a.width / a.height) > .1), "In" === t ? (o = a, s = r.getFitPos(l), s.scaleX = s.width / o.width, s.scaleY = s.height / o.height, u && (o.opacity = .1, s.opacity = 1)) : (o = i.fancybox.getTranslate(c), s = a, l.$ghost && (l.$ghost.show(), l.$image && l.$image.remove()), o.scaleX = o.width / s.width, o.scaleY = o.height / s.height, o.width = s.width, o.height = s.height, u && (s.opacity = 0)), r.updateCursor(s.width, s.height), delete s.width, delete s.height, i.fancybox.setTranslate(c, o), c.show(), r.trigger("beforeZoom" + t), c.css("transition", "all " + e + "ms"), i.fancybox.setTranslate(c, s), setTimeout(function () {
                var e;
                c.css("transition", "none"), e = i.fancybox.getTranslate(c), e.scaleX = 1, e.scaleY = 1, i.fancybox.setTranslate(c, e), r.trigger("afterZoom" + t), n.apply(r), r.isAnimating = !1
            }, e), 0))
        }, canPan: function () {
            var t = this, e = t.current, i = e.$placeholder, n = !1;
            return i && (n = t.getFitPos(e), n = Math.abs(i.width() - n.width) > 1 || Math.abs(i.height() - n.height) > 1), n
        }, isScaledDown: function () {
            var t = this, e = t.current, n = e.$placeholder, a = !1;
            return n && (a = i.fancybox.getTranslate(n), a = a.width < e.width || a.height < e.height), a
        }, scaleToActual: function (t, e, a) {
            var o, s, r, l, c, u = this, d = u.current, f = d.$placeholder, p = parseInt(d.$slide.width(), 10), h = parseInt(d.$slide.height(), 10), m = d.width, g = d.height;
            f && (u.isAnimating = !0, t = t === n ? .5 * p : t, e = e === n ? .5 * h : e, o = i.fancybox.getTranslate(f), l = m / o.width, c = g / o.height, s = .5 * p - .5 * m, r = .5 * h - .5 * g, m > p && (s = o.left * l - (t * l - t), s > 0 && (s = 0), s < p - m && (s = p - m)), g > h && (r = o.top * c - (e * c - e), r > 0 && (r = 0), r < h - g && (r = h - g)), u.updateCursor(m, g), i.fancybox.animate(f, null, {
                top: r,
                left: s,
                scaleX: l,
                scaleY: c
            }, a || d.opts.speed, function () {
                u.isAnimating = !1
            }))
        }, scaleToFit: function (t) {
            var e, n = this, a = n.current, o = a.$placeholder;
            o && (n.isAnimating = !0, e = n.getFitPos(a), n.updateCursor(e.width, e.height), i.fancybox.animate(o, null, {
                top: e.top,
                left: e.left,
                scaleX: e.width / o.width(),
                scaleY: e.height / o.height()
            }, t || a.opts.speed, function () {
                n.isAnimating = !1
            }))
        }, getFitPos: function (t) {
            var e, n, a, o, r, l, c, u = t.$placeholder || t.$content, d = t.width, f = t.height, p = t.opts.margin;
            return !(!u || !u.length || !d && !f) && ("number" === i.type(p) && (p = [p, p]), 2 == p.length && (p = [p[0], p[1], p[0], p[1]]), s.width() < 800 && (p = [0, 0, 0, 0]), e = parseInt(t.$slide.width(), 10) - (p[1] + p[3]), n = parseInt(t.$slide.height(), 10) - (p[0] + p[2]),
                    a = Math.min(1, e / d, n / f), l = Math.floor(a * d), c = Math.floor(a * f), o = Math.floor(.5 * (n - c)) + p[0], r = Math.floor(.5 * (e - l)) + p[3], {
                    top: o,
                    left: r,
                    width: l,
                    height: c
                })
        }, update: function (t, e, n, a) {
            var o, s = this;
            s.isAnimating !== !0 && s.current && (o = s.current.pos * Math.floor(s.current.$slide.width()) * -1 - s.current.pos * s.current.opts.gutter, n = parseInt(n, 10) || 0, i.fancybox.stop(s.$refs.slider), t === !1 ? s.updateSlide(s.current, e) : i.each(s.slides, function (t, i) {
                s.updateSlide(i, e)
            }), n ? i.fancybox.animate(s.$refs.slider, null, {top: 0, left: o}, n, function () {
                s.current.isMoved = !0, "function" === i.type(a) && a.apply(s)
            }) : (i.fancybox.setTranslate(s.$refs.slider, {
                top: 0,
                left: o
            }), s.current.isMoved = !0, "function" === i.type(a) && a.apply(s)))
        }, updateSlide: function (t, e) {
            var n, a = this, o = t.$placeholder;
            t = t || a.current, t && !a.isClosing && (n = t.pos * Math.floor(t.$slide.width()) + t.pos * t.opts.gutter, n !== t.leftPos && (i.fancybox.setTranslate(t.$slide, {
                top: 0,
                left: n
            }), t.leftPos = n), e !== !1 && o && (i.fancybox.setTranslate(o, a.getFitPos(t)), t.pos === a.currPos && a.updateCursor()), t.$slide.trigger("refresh"), a.trigger("onUpdate", t))
        }, updateCursor: function (t, e) {
            var i, a = this, o = a.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");
            !a.isClosing && a.opts.touch && (i = t !== n && e !== n ? t < a.current.width && e < a.current.height : a.isScaledDown(), i ? o.addClass("fancybox-controls--canzoomIn") : a.group.length < 2 ? o.addClass("fancybox-controls--canzoomOut") : o.addClass("fancybox-controls--canGrab"))
        }, loadSlide: function (t) {
            var e, n, a, o = this;
            if (t && !t.isLoaded && !t.isLoading) {
                switch (t.isLoading = !0, o.trigger("beforeLoad", t), e = t.type, n = t.$slide, n.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
                    case"image":
                        o.setImage(t);
                        break;
                    case"iframe":
                        o.setIframe(t);
                        break;
                    case"html":
                        o.setContent(t, t.content);
                        break;
                    case"inline":
                        i(t.src).length ? o.setContent(t, i(t.src)) : o.setError(t);
                        break;
                    case"ajax":
                        o.showLoading(t), a = i.ajax(i.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function (e, i) {
                                "success" === i && o.setContent(t, e)
                            },
                            error: function (e, i) {
                                e && "abort" !== i && o.setError(t)
                            }
                        })), n.one("onReset", function () {
                            a.abort()
                        });
                        break;
                    default:
                        o.setError(t)
                }
                return !0
            }
        }, setImage: function (e) {
            var n, a, o, s, r = this, l = e.opts.image.srcset;
            if (e.isLoaded && !e.hasError)return void r.afterLoad(e);
            if (l) {
                o = t.devicePixelRatio || 1, s = t.innerWidth * o, a = l.split(",").map(function (t) {
                    var e = {};
                    return t.trim().split(/\s+/).forEach(function (t, i) {
                        var n = parseInt(t.substring(0, t.length - 1), 10);
                        return 0 === i ? e.url = t : void(n && (e.value = n, e.postfix = t[t.length - 1]))
                    }), e
                }), a.sort(function (t, e) {
                    return t.value - e.value
                });
                for (var c = 0; c < a.length; c++) {
                    var u = a[c];
                    if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= o) {
                        n = u;
                        break
                    }
                }
                !n && a.length && (n = a[a.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value))
            }
            e.$placeholder = i('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide), e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = i("<img />").one("load error", function () {
                r.isClosing || (i("<img/>")[0].src = e.src, r.revealImage(e, function () {
                    r.setBigImage(e), r.firstRun && e.index === r.currIndex && r.preload()
                }))
            }).addClass("fancybox-image").appendTo(e.$placeholder).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e)
        }, setBigImage: function (t) {
            var e = this, n = i("<img />");
            t.$image = n.one("error", function () {
                e.setError(t)
            }).one("load", function () {
                clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.afterLoad(t), t.$ghost && (t.timouts = setTimeout(function () {
                    t.$ghost.hide()
                }, 350)))
            }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$placeholder), n[0].complete ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function () {
                n[0].complete || t.hasError || e.showLoading(t)
            }, 150), t.opts.image.protect && i('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on("contextmenu.fb", function (t) {
                return 2 == t.button && t.preventDefault(), !0
            })
        }, revealImage: function (t, e) {
            var n = this;
            return e = e || i.noop, "image" !== t.type || t.hasError || t.isRevealed === !0 ? void e.apply(n) : (t.isRevealed = !0, void(t.pos === n.currPos && n.zoomInOut("In", t.opts.speed, e) || (t.$ghost && !t.isLoaded && n.updateSlide(t, !0), t.pos === n.currPos ? i.fancybox.animate(t.$placeholder, {opacity: 0}, {opacity: 1}, 300, e) : t.$placeholder.show(), e.apply(n))))
        }, setIframe: function (t) {
            var e, a = this, o = t.opts.iframe, s = t.$slide;
            t.$content = i('<div class="fancybox-content"></div>').css(o.css).appendTo(s), e = i(o.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", i.fancybox.isTouch ? "auto" : o.scrolling).appendTo(t.$content), o.preload ? (t.$content.addClass("fancybox-tmp"), a.showLoading(t), e.on("load.fb error.fb", function (e) {
                this.isReady = 1, t.$slide.trigger("refresh"), a.afterLoad(t)
            }), s.on("refresh.fb", function () {
                var t, i, a, s, r, l = c.$content;
                if (1 === e[0].isReady) {
                    try {
                        t = e.contents(), i = t.find("body")
                    } catch (c) {
                    }
                    i && i.length && (o.css.width === n || o.css.height === n) && (a = e[0].contentWindow.document.documentElement.scrollWidth, s = Math.ceil(i.outerWidth(!0) + (l.width() - a)), r = Math.ceil(i.outerHeight(!0)), l.css({
                        width: o.css.width === n ? s + (l.outerWidth() - l.innerWidth()) : o.css.width,
                        height: o.css.height === n ? r + (l.outerHeight() - l.innerHeight()) : o.css.height
                    })), l.removeClass("fancybox-tmp")
                }
            })) : this.afterLoad(t), e.attr("src", t.src), t.opts.smallBtn && t.$content.prepend(t.opts.closeTpl), s.one("onReset", function () {
                try {
                    i(this).find("iframe").hide().attr("src", "//about:blank")
                } catch (t) {
                }
                i(this).empty(), t.isLoaded = !1
            })
        }, setContent: function (t, e) {
            var n = this;
            n.isClosing || (n.hideLoading(t), t.$slide.empty(), c(e) && e.parent().length ? (e.data("placeholder") && e.parents(".fancybox-slide").trigger("onReset"), e.data({placeholder: i("<div></div>").hide().insertAfter(e)}).css("display", "inline-block")) : ("string" === i.type(e) && (e = i("<div>").append(e).contents(), 3 === e[0].nodeType && (e = i("<div>").html(e))), t.opts.selector && (e = i("<div>").html(e).find(t.opts.selector))), t.$slide.one("onReset", function () {
                var n = c(e) ? e.data("placeholder") : 0;
                n && (e.hide().replaceAll(n), e.data("placeholder", null)), t.hasError || (i(this).empty(), t.isLoaded = !1)
            }), t.$content = i(e).appendTo(t.$slide), t.opts.smallBtn === !0 && t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl), this.afterLoad(t))
        }, setError: function (t) {
            t.hasError = !0, this.setContent(t, t.opts.errorTpl)
        }, showLoading: function (t) {
            var e = this;
            t = t || e.current, t && !t.$spinner && (t.$spinner = i(e.opts.spinnerTpl).appendTo(t.$slide))
        }, hideLoading: function (t) {
            var e = this;
            t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
        }, afterMove: function () {
            var t = this, e = t.current, n = {};
            e && (e.$slide.siblings().trigger("onReset"), i.each(t.slides, function (e, i) {
                i.pos >= t.currPos - 1 && i.pos <= t.currPos + 1 ? n[i.pos] = i : i && i.$slide.remove()
            }), t.slides = n, t.trigger("afterMove"), e.isLoaded && t.complete())
        }, afterLoad: function (t) {
            var e = this;
            e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.$ghost || e.updateSlide(t, !0), t.index === e.currIndex && t.isMoved ? e.complete() : t.$ghost || e.revealImage(t))
        }, complete: function () {
            var t = this, e = t.current;
            t.revealImage(e, function () {
                e.isComplete = !0, e.$slide.addClass("fancybox-slide--complete"), t.updateCursor(), t.trigger("onComplete"), e.opts.focus && "image" !== e.type && "iframe" !== e.type && t.focus()
            })
        }, preload: function () {
            var t, e, i = this;
            i.group.length < 2 || (t = i.slides[i.currPos + 1], e = i.slides[i.currPos - 1], t && "image" === t.type && i.loadSlide(t), e && "image" === e.type && i.loadSlide(e))
        }, focus: function () {
            var t, e = this.current;
            t = e && e.isComplete ? e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first") : null, t && t.length || (t = this.$refs.container), t.focus(), this.$refs.slider_wrap.scrollLeft(0), e && e.$slide.scrollTop(0)
        }, activate: function () {
            var t = this;
            i(".fancybox-container").each(function () {
                var e = i(this).data("FancyBox");
                e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
            }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
        }, close: function (t) {
            var e = this, n = e.current, a = n.opts.speed, o = i.proxy(function () {
                e.cleanUp(t)
            }, this);
            return !e.isAnimating && !e.isClosing && (e.trigger("beforeClose", t) === !1 ? (i.fancybox.stop(e.$refs.slider), void u(function () {
                    e.update(!0, !0, 150)
                })) : (e.isClosing = !0, n.timouts && clearTimeout(n.timouts), t !== !0 && i.fancybox.stop(e.$refs.slider), e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"), n.$slide.removeClass("fancybox-slide--complete").siblings().remove(), n.isMoved || n.$slide.css("overflow", "visible"), e.removeEvents(), e.hideLoading(n), e.hideControls(), e.updateCursor(), e.$refs.bg.css("transition-duration", a + "ms"), this.$refs.container.removeClass("fancybox-container--ready"), void(t === !0 ? setTimeout(o, a) : e.zoomInOut("Out", a, o) || i.fancybox.animate(e.$refs.container, null, {opacity: 0}, a, "easeInSine", o))))
        }, cleanUp: function (t) {
            var e, n = this;
            n.$refs.slider.children().trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", t), n.current = null, e = i.fancybox.getInstance(), e ? e.activate() : (i("html").removeClass("fancybox-enabled"), i("body").removeAttr("style"), s.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), i("#fancybox-noscroll").remove()), n.$lastFocus && n.$lastFocus.focus()
        }, trigger: function (t, n) {
            var a, o = Array.prototype.slice.call(arguments, 1), s = this, r = n && n.opts ? n : s.current;
            return r ? o.unshift(r) : r = s, o.unshift(s), i.isFunction(r.opts[t]) && (a = r.opts[t].apply(r, o)), a === !1 ? a : void("afterClose" === t ? i(e).trigger(t + ".fb", o) : s.$refs.container.trigger(t + ".fb", o))
        }, toggleControls: function (t) {
            this.isHiddenControls ? this.updateControls(t) : this.hideControls()
        }, hideControls: function () {
            this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-controls"), this.$refs.container.removeClass("fancybox-show-caption")
        }, updateControls: function (t) {
            var e = this, n = e.$refs.container, a = e.$refs.caption, o = e.current, s = o.index, r = o.opts, l = r.caption;
            this.isHiddenControls && t !== !0 || (this.isHiddenControls = !1, n.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar", !!r.infobar && e.group.length > 1).toggleClass("fancybox-show-buttons", !!r.buttons).toggleClass("fancybox-is-modal", !!r.modal), i(".fancybox-button--left", n).toggleClass("fancybox-button--disabled", !r.loop && s <= 0), i(".fancybox-button--right", n).toggleClass("fancybox-button--disabled", !r.loop && s >= e.group.length - 1), i(".fancybox-button--play", n).toggle(!!(r.slideShow && e.group.length > 1)), i(".fancybox-button--close", n).toggle(!!r.closeBtn), i(".js-fancybox-count", n).html(e.group.length), i(".js-fancybox-index", n).html(s + 1), o.$slide.trigger("refresh"), a && a.empty(), l && l.length ? (a.html(l), this.$refs.container.addClass("fancybox-show-caption "), e.$caption = a) : this.$refs.container.removeClass("fancybox-show-caption"))
        }
    }), i.fancybox = {
        version: "3.0.47",
        defaults: o,
        getInstance: function (t) {
            var e = i('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"), n = Array.prototype.slice.call(arguments, 1);
            return e instanceof f && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
        },
        open: function (t, e, i) {
            return new f(t, e, i)
        },
        close: function (t) {
            var e = this.getInstance();
            e && (e.close(), t === !0 && this.close())
        },
        isTouch: e.createTouch !== n && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
        use3d: function () {
            var i = e.createElement("div");
            return t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode <= 11)
        }(),
        getTranslate: function (t) {
            var e, i;
            return !(!t || !t.length) && (e = t.get(0).getBoundingClientRect(), i = t.eq(0).css("transform"), i && i.indexOf("matrix") !== -1 ? (i = i.split("(")[1], i = i.split(")")[0], i = i.split(",")) : i = [], i.length ? (i = i.length > 10 ? [i[13], i[12], i[0], i[5]] : [i[5], i[4], i[0], i[3]], i = i.map(parseFloat)) : i = [0, 0, 1, 1], {
                    top: i[0],
                    left: i[1],
                    scaleX: i[2],
                    scaleY: i[3],
                    opacity: parseFloat(t.css("opacity")),
                    width: e.width,
                    height: e.height
                })
        },
        setTranslate: function (t, e) {
            var i = "", a = {};
            if (t && e)return e.left === n && e.top === n || (i = (e.left === n ? t.position().top : e.left) + "px, " + (e.top === n ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), e.scaleX !== n && e.scaleY !== n && (i = (i.length ? i + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), i.length && (a.transform = i), e.opacity !== n && (a.opacity = e.opacity), e.width !== n && (a.width = e.width), e.height !== n && (a.height = e.height), t.css(a)
        },
        easing: {
            easeOutCubic: function (t, e, i, n) {
                return i * ((t = t / n - 1) * t * t + 1) + e
            }, easeInCubic: function (t, e, i, n) {
                return i * (t /= n) * t * t + e
            }, easeOutSine: function (t, e, i, n) {
                return i * Math.sin(t / n * (Math.PI / 2)) + e
            }, easeInSine: function (t, e, i, n) {
                return -i * Math.cos(t / n * (Math.PI / 2)) + i + e
            }
        },
        stop: function (t) {
            t.removeData("animateID")
        },
        animate: function (t, e, a, o, s, r) {
            var l, c, d, f = this, p = null, h = 0, m = function () {
                a.scaleX !== n && a.scaleY !== n && e && e.width !== n && e.height !== n && (a.width = e.width * a.scaleX, a.height = e.height * a.scaleY, a.scaleX = 1, a.scaleY = 1), f.setTranslate(t, a), r()
            }, g = function (i) {
                if (l = [], c = 0, t.length && t.data("animateID") === d) {
                    if (i = i || Date.now(), p && (c = i - p), p = i, h += c, h >= o)return void m();
                    for (var r in a)a.hasOwnProperty(r) && e[r] !== n && (e[r] == a[r] ? l[r] = a[r] : l[r] = f.easing[s](h, e[r], a[r] - e[r], o));
                    f.setTranslate(t, l), u(g)
                }
            };
            f.animateID = d = f.animateID === n ? 1 : f.animateID + 1, t.data("animateID", d), r === n && "function" == i.type(s) && (r = s, s = n), s || (s = "easeOutCubic"), r = r || i.noop, e ? this.setTranslate(t, e) : e = this.getTranslate(t), o ? (t.show(), u(g)) : m()
        }
    }, i.fn.fancybox = function (t) {
        return this.off("click.fb-start").on("click.fb-start", {items: this, options: t || {}}, a), this
    }, i(e).on("click.fb-start", "[data-fancybox]", a)
}(window, document, window.jQuery), function (t) {
    "use strict";
    var e = function (e, i, n) {
        if (e)return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function (t, i) {
            e = e.replace("$" + t, i || "")
        }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
    }, i = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1},
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type: "iframe",
            url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {additionalInfos: 0, autoStart: 1},
            type: "iframe",
            url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/, type: "iframe", url: "//vine.co/v/$1/embed/simple"},
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        google_maps: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        }
    };
    t(document).on("onInit.fb", function (n, a) {
        t.each(a.group, function (n, a) {
            var o, s, r, l, c, u, d = a.src || "", f = !1;
            a.type || (t.each(i, function (i, n) {
                if (s = d.match(n.matcher), c = {}, u = i, s) {
                    if (f = n.type, n.paramPlace && s[n.paramPlace]) {
                        l = s[n.paramPlace], "?" == l[0] && (l = l.substring(1)), l = l.split("&");
                        for (var p = 0; p < l.length; ++p) {
                            var h = l[p].split("=", 2);
                            2 == h.length && (c[h[0]] = decodeURIComponent(h[1].replace(/\+/g, " ")))
                        }
                    }
                    return r = t.extend(!0, {}, n.params, a.opts[i], c), d = "function" === t.type(n.url) ? n.url.call(this, s, r, a) : e(n.url, s, r), o = "function" === t.type(n.thumb) ? n.thumb.call(this, s, r, a) : e(n.thumb, s), "vimeo" === u && (d = d.replace("&%23", "#")), !1
                }
            }), f ? (a.src = d, a.type = f, a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = o), "iframe" === f && (t.extend(!0, a.opts, {
                iframe: {
                    preload: !1,
                    scrolling: "no"
                }, smallBtn: !1, closeBtn: !0, fullScreen: !1, slideShow: !1
            }), a.opts.slideClass += " fancybox-slide--video")) : a.type = "iframe")
        })
    })
}(window.jQuery), function (t, e, i) {
    "use strict";
    var n = function () {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (e) {
                t.setTimeout(e, 1e3 / 60)
            }
    }(), a = function (e) {
        var i = [];
        e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
        for (var n in e)e[n].pageX ? i.push({x: e[n].pageX, y: e[n].pageY}) : e[n].clientX && i.push({
            x: e[n].clientX,
            y: e[n].clientY
        });
        return i
    }, o = function (t, e, i) {
        return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }, s = function (t) {
        return t.is("a") || t.is("button") || t.is("input") || t.is("select") || t.is("textarea") || i.isFunction(t.get(0).onclick)
    }, r = function (e) {
        var i = t.getComputedStyle(e)["overflow-y"], n = t.getComputedStyle(e)["overflow-x"], a = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight, o = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
        return a || o
    }, l = function (t) {
        for (var e = !1; !(e = r(t.get(0))) && (t = t.parent(), t.length && !t.hasClass("fancybox-slider") && !t.is("body")););
        return e
    }, c = function (t) {
        var e = this;
        e.instance = t, e.$wrap = t.$refs.slider_wrap, e.$slider = t.$refs.slider, e.$container = t.$refs.container, e.destroy(), e.$wrap.on("touchstart.fb mousedown.fb", i.proxy(e, "ontouchstart"))
    };
    c.prototype.destroy = function () {
        this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")
    }, c.prototype.ontouchstart = function (e) {
        var n = this, r = i(e.target), c = n.instance, u = c.current, d = u.$content || u.$placeholder;
        return n.startPoints = a(e), n.$target = r, n.$content = d, n.canvasWidth = Math.round(u.$slide[0].clientWidth), n.canvasHeight = Math.round(u.$slide[0].clientHeight), n.startEvent = e, e.originalEvent.clientX > n.canvasWidth + u.$slide.offset().left || (s(r) || s(r.parent()) || l(r) ? void 0 : u.opts.touch ? void(e.originalEvent && 2 == e.originalEvent.button || (e.stopPropagation(), e.preventDefault(), !u || n.instance.isAnimating || n.instance.isClosing || !n.startPoints || n.startPoints.length > 1 && !u.isMoved || (n.$wrap.off("touchmove.fb mousemove.fb", i.proxy(n, "ontouchmove")), n.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", i.proxy(n, "ontouchend")), n.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", i.proxy(n, "ontouchend")), n.$wrap.on("touchmove.fb mousemove.fb", i.proxy(n, "ontouchmove")), n.startTime = (new Date).getTime(), n.distanceX = n.distanceY = n.distance = 0, n.canTap = !1, n.isPanning = !1, n.isSwiping = !1, n.isZooming = !1, n.sliderStartPos = i.fancybox.getTranslate(n.$slider), n.contentStartPos = i.fancybox.getTranslate(n.$content), n.contentLastPos = null, 1 !== n.startPoints.length || n.isZooming || (n.canTap = u.isMoved, "image" === u.type && (n.contentStartPos.width > n.canvasWidth + 1 || n.contentStartPos.height > n.canvasHeight + 1) ? (i.fancybox.stop(n.$content), n.isPanning = !0) : (i.fancybox.stop(n.$slider), n.isSwiping = !0), n.$container.addClass("fancybox-controls--isGrabbing")), 2 === n.startPoints.length && u.isMoved && !u.hasError && "image" === u.type && (u.isLoaded || u.$ghost) && (n.isZooming = !0, n.isSwiping = !1, n.isPanning = !1, i.fancybox.stop(n.$content), n.centerPointStartX = .5 * (n.startPoints[0].x + n.startPoints[1].x) - i(t).scrollLeft(), n.centerPointStartY = .5 * (n.startPoints[0].y + n.startPoints[1].y) - i(t).scrollTop(), n.percentageOfImageAtPinchPointX = (n.centerPointStartX - n.contentStartPos.left) / n.contentStartPos.width, n.percentageOfImageAtPinchPointY = (n.centerPointStartY - n.contentStartPos.top) / n.contentStartPos.height, n.startDistanceBetweenFingers = o(n.startPoints[0], n.startPoints[1]))))) : (n.endPoints = n.startPoints, n.ontap()))
    }, c.prototype.ontouchmove = function (t) {
        var e = this;
        t.preventDefault(), e.newPoints = a(t), e.newPoints && e.newPoints.length && (e.distanceX = o(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = o(e.newPoints[0], e.startPoints[0], "y"), e.distance = o(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))
    }, c.prototype.onSwipe = function () {
        var e, a = this, o = a.isSwiping, s = a.sliderStartPos.left;
        o === !0 ? Math.abs(a.distance) > 10 && (a.instance.group.length < 2 ? a.isSwiping = "y" : !a.instance.current.isMoved || a.instance.opts.touch.vertical === !1 || "auto" === a.instance.opts.touch.vertical && i(t).width() > 800 ? a.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = e > 45 && e < 135 ? "y" : "x"), a.canTap = !1, a.instance.current.isMoved = !1, a.startPoints = a.newPoints) : ("x" == o && (!a.instance.current.opts.loop && 0 === a.instance.current.index && a.distanceX > 0 ? s += Math.pow(a.distanceX, .8) : !a.instance.current.opts.loop && a.instance.current.index === a.instance.group.length - 1 && a.distanceX < 0 ? s -= Math.pow(-a.distanceX, .8) : s += a.distanceX), a.sliderLastPos = {
            top: "x" == o ? 0 : a.sliderStartPos.top + a.distanceY,
            left: s
        }, n(function () {
            i.fancybox.setTranslate(a.$slider, a.sliderLastPos)
        }))
    }, c.prototype.onPan = function () {
        var t, e, a, o = this;
        o.canTap = !1, t = o.contentStartPos.width > o.canvasWidth ? o.contentStartPos.left + o.distanceX : o.contentStartPos.left, e = o.contentStartPos.top + o.distanceY, a = o.limitMovement(t, e, o.contentStartPos.width, o.contentStartPos.height), a.scaleX = o.contentStartPos.scaleX, a.scaleY = o.contentStartPos.scaleY, o.contentLastPos = a, n(function () {
            i.fancybox.setTranslate(o.$content, o.contentLastPos)
        })
    }, c.prototype.limitMovement = function (t, e, i, n) {
        var a, o, s, r, l = this, c = l.canvasWidth, u = l.canvasHeight, d = l.contentStartPos.left, f = l.contentStartPos.top, p = l.distanceX, h = l.distanceY;
        return a = Math.max(0, .5 * c - .5 * i), o = Math.max(0, .5 * u - .5 * n), s = Math.min(c - i, .5 * c - .5 * i), r = Math.min(u - n, .5 * u - .5 * n), i > c && (p > 0 && t > a && (t = a - 1 + Math.pow(-a + d + p, .8) || 0), p < 0 && t < s && (t = s + 1 - Math.pow(s - d - p, .8) || 0)), n > u && (h > 0 && e > o && (e = o - 1 + Math.pow(-o + f + h, .8) || 0), h < 0 && e < r && (e = r + 1 - Math.pow(r - f - h, .8) || 0)), {
            top: e,
            left: t
        }
    }, c.prototype.limitPosition = function (t, e, i, n) {
        var a = this, o = a.canvasWidth, s = a.canvasHeight;
        return i > o ? (t = t > 0 ? 0 : t, t = t < o - i ? o - i : t) : t = Math.max(0, o / 2 - i / 2), n > s ? (e = e > 0 ? 0 : e, e = e < s - n ? s - n : e) : e = Math.max(0, s / 2 - n / 2), {
            top: e,
            left: t
        }
    }, c.prototype.onZoom = function () {
        var e = this, a = e.contentStartPos.width, s = e.contentStartPos.height, r = e.contentStartPos.left, l = e.contentStartPos.top, c = o(e.newPoints[0], e.newPoints[1]), u = c / e.startDistanceBetweenFingers, d = Math.floor(a * u), f = Math.floor(s * u), p = (a - d) * e.percentageOfImageAtPinchPointX, h = (s - f) * e.percentageOfImageAtPinchPointY, m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(), g = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(), v = m - e.centerPointStartX, y = g - e.centerPointStartY, b = r + (p + v), w = l + (h + y), _ = {
            top: w,
            left: b,
            scaleX: e.contentStartPos.scaleX * u,
            scaleY: e.contentStartPos.scaleY * u
        };
        e.canTap = !1, e.newWidth = d, e.newHeight = f, e.contentLastPos = _, n(function () {
            i.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, c.prototype.ontouchend = function (t) {
        var e = this, n = e.instance.current, o = Math.max((new Date).getTime() - e.startTime, 1), s = e.isSwiping, r = e.isPanning, l = e.isZooming;
        return e.endPoints = a(t), e.$container.removeClass("fancybox-controls--isGrabbing"), e.$wrap.off("touchmove.fb mousemove.fb", i.proxy(this, "ontouchmove")), e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", i.proxy(this, "ontouchend")), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.canTap ? e.ontap() : (e.velocityX = e.distanceX / o * .5, e.velocityY = e.distanceY / o * .5, e.speed = n.opts.speed || 330, e.speedX = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), e.speedY = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityY) * e.speed)), void(r ? e.endPanning() : l ? e.endZooming() : e.endSwiping(s)))
    }, c.prototype.endSwiping = function (t) {
        var e = this;
        "y" == t && Math.abs(e.distanceY) > 50 ? (i.fancybox.animate(e.$slider, null, {
            top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
            left: e.sliderStartPos.left,
            opacity: 0
        }, e.speedY), e.instance.close(!0)) : "x" == t && e.distanceX > 50 ? e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 ? e.instance.next(e.speedX) : e.instance.update(!1, !0, 150)
    }, c.prototype.endPanning = function () {
        var t, e, n, a = this;
        a.contentLastPos && (t = a.contentLastPos.left + a.velocityX * a.speed * 2, e = a.contentLastPos.top + a.velocityY * a.speed * 2, n = a.limitPosition(t, e, a.contentStartPos.width, a.contentStartPos.height), n.width = a.contentStartPos.width, n.height = a.contentStartPos.height, i.fancybox.animate(a.$content, null, n, a.speed, "easeOutSine"))
    }, c.prototype.endZooming = function () {
        var t, e, n, a, o = this, s = o.instance.current, r = o.newWidth, l = o.newHeight;
        o.contentLastPos && (t = o.contentLastPos.left, e = o.contentLastPos.top, a = {
            top: e,
            left: t,
            width: r,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, i.fancybox.setTranslate(o.$content, a), r < o.canvasWidth && l < o.canvasHeight ? o.instance.scaleToFit(150) : r > s.width || l > s.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (n = o.limitPosition(t, e, r, l), i.fancybox.animate(o.$content, null, n, o.speed, "easeOutSine")))
    }, c.prototype.ontap = function () {
        var t = this, e = t.instance, n = e.current, a = t.endPoints[0].x, o = t.endPoints[0].y;
        if (a -= t.$wrap.offset().left, o -= t.$wrap.offset().top, e.SlideShow && e.SlideShow.isActive && e.SlideShow.stop(), !i.fancybox.isTouch)return n.opts.closeClickOutside && t.$target.is(".fancybox-slide") ? void e.close(t.startEvent) : void("image" == n.type && n.isMoved && (e.canPan() ? e.scaleToFit() : e.isScaledDown() ? e.scaleToActual(a, o) : e.group.length < 2 && e.close(t.startEvent)));
        if (t.tapped) {
            if (clearTimeout(t.tapped), t.tapped = null, Math.abs(a - t.x) > 50 || Math.abs(o - t.y) > 50 || !n.isMoved)return this;
            "image" == n.type && (n.isLoaded || n.$ghost) && (e.canPan() ? e.scaleToFit() : e.isScaledDown() && e.scaleToActual(a, o))
        } else t.x = a, t.y = o, t.tapped = setTimeout(function () {
            t.tapped = null, e.toggleControls(!0)
        }, 300);
        return this
    }, i(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new c(e))
    }), i(e).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, window.jQuery), function (t, e) {
    "use strict";
    var i = function (t) {
        this.instance = t, this.init()
    };
    e.extend(i.prototype, {
        timer: null, isActive: !1, $button: null, speed: 3e3, init: function () {
            var t = this;
            t.$button = e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons), t.instance.$refs.container.on("click", "[data-fancybox-play]", function () {
                t.toggle()
            })
        }, set: function () {
            var t = this;
            t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function () {
                t.instance.next()
            }, t.instance.current.opts.slideShow.speed || t.speed) : t.stop()
        }, clear: function () {
            var t = this;
            clearTimeout(t.timer), t.timer = null
        }, start: function () {
            var t = this;
            t.stop(), t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) && (t.instance.$refs.container.on({
                "beforeLoad.fb.player": e.proxy(t, "clear"),
                "onComplete.fb.player": e.proxy(t, "set")
            }), t.isActive = !0, t.instance.current.isComplete && t.set(), t.instance.$refs.container.trigger("onPlayStart"), t.$button.addClass("fancybox-button--pause"))
        }, stop: function () {
            var t = this;
            t.clear(), t.instance.$refs.container.trigger("onPlayEnd").off(".player"), t.$button.removeClass("fancybox-button--pause"), t.isActive = !1
        }, toggle: function () {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on("onInit.fb", function (t, e) {
        e && e.group.length > 1 && e.opts.slideShow && !e.SlideShow && (e.SlideShow = new i(e))
    }), e(t).on("beforeClose.fb onDeactivate.fb", function (t, e) {
        e && e.SlideShow && e.SlideShow.stop()
    })
}(document, window.jQuery), function (t, e) {
    "use strict";
    var i = function () {
        var e, i, n, a = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], o = {};
        for (i = 0; i < a.length; i++)if (e = a[i], e && e[1] in t) {
            for (n = 0; n < e.length; n++)o[a[0][n]] = e[n];
            return o
        }
        return !1
    }();
    if (i) {
        var n = {
            request: function (e) {
                e = e || t.documentElement, e[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            }, exit: function () {
                t[i.exitFullscreen]()
            }, toggle: function (t) {
                this.isFullscreen() ? this.exit() : this.request(t)
            }, isFullscreen: function () {
                return Boolean(t[i.fullscreenElement])
            }, enabled: function () {
                return Boolean(t[i.fullscreenEnabled])
            }
        };
        e(t).on({
            "onInit.fb": function (t, i) {
                var a;
                i && i.opts.fullScreen && !i.FullScreen && (a = i.$refs.container, i.$refs.button_fs = e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(i.$refs.buttons), a.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                    t.stopPropagation(), t.preventDefault(), n.toggle(a[0])
                }), i.opts.fullScreen.requestOnStart === !0 && n.request(a[0]))
            }, "beforeMove.fb": function (t, e) {
                e && e.$refs.button_fs && e.$refs.button_fs.toggle(!!e.current.opts.fullScreen)
            }, "beforeClose.fb": function () {
                n.exit()
            }
        }), e(t).on(i.fullscreenchange, function () {
            var t = e.fancybox.getInstance(), i = t ? t.current.$placeholder : null;
            i && (i.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0))
        })
    }
}(document, window.jQuery), function (t, e) {
    "use strict";
    var i = function (t) {
        this.instance = t, this.init()
    };
    e.extend(i.prototype, {
        $button: null, $grid: null, $list: null, isVisible: !1, init: function () {
            var t = this;
            t.$button = e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click", function (e) {
                e.stopPropagation(), e.preventDefault(), t.toggle()
            })
        }, create: function () {
            var t, i, n = this.instance;
            this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(n.$refs.container), t = "<ul>", e.each(n.group, function (e, n) {
                i = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), i || "image" !== n.type || (i = n.src), i && i.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
            }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click touchstart", "li", function () {
                n.jumpTo(e(this).data("index"))
            }), this.$list.find("img").hide().one("load", function () {
                var t, i, n, a, o = e(this).parent().removeClass("fancybox-thumbs-loading"), s = o.outerWidth(), r = o.outerHeight();
                t = this.naturalWidth || this.width, i = this.naturalHeight || this.height, n = t / s, a = i / r, n >= 1 && a >= 1 && (n > a ? (t /= a, i = r) : (t = s, i /= n)), e(this).css({
                    width: Math.floor(t),
                    height: Math.floor(i),
                    "margin-top": Math.min(0, Math.floor(.3 * r - .3 * i)),
                    "margin-left": Math.min(0, Math.floor(.5 * s - .5 * t))
                }).show()
            }).each(function () {
                this.src = e(this).data("src")
            })
        }, focus: function () {
            this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
        }, close: function () {
            this.$grid.hide()
        }, update: function () {
            this.instance.$refs.container.toggleClass("fancybox-container--thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.$grid.show(), this.focus()) : this.$grid && this.$grid.hide(), this.instance.update()
        }, hide: function () {
            this.isVisible = !1, this.update()
        }, show: function () {
            this.isVisible = !0, this.update()
        }, toggle: function () {
            this.isVisible ? this.hide() : this.show()
        }
    }), e(t).on("onInit.fb", function (t, e) {
        var n = e.group[0], a = e.group[1];
        e.opts.thumbs && !e.Thumbs && e.group.length > 1 && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == a.type || a.opts.thumb || a.opts.$thumb) && (e.Thumbs = new i(e))
    }), e(t).on("beforeMove.fb", function (t, e, i) {
        var n = e && e.Thumbs;
        n && (i.modal ? (n.$button.hide(), n.hide()) : (e.opts.thumbs.showOnStart === !0 && e.firstRun && n.show(), n.$button.show(), n.isVisible && n.focus()))
    }), e(t).on("beforeClose.fb", function (t, e) {
        e && e.Thumbs && (e.Thumbs.isVisible && e.opts.thumbs.hideOnClosing !== !1 && e.Thumbs.close(), e.Thumbs = null)
    })
}(document, window.jQuery), function (t, e, i) {
    "use strict";
    function n() {
        var t = e.location.hash.substr(1), i = t.split("-"), n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) ? parseInt(i.pop(-1), 10) || 1 : 1, a = i.join("-");
        return n < 1 && (n = 1), {hash: t, index: n, gallery: a}
    }

    function a(t) {
        var e;
        "" !== t.gallery && (e = i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1), e.length ? e.trigger("click") : i("#" + i.escapeSelector(t.gallery)).trigger("click"))
    }

    function o(t) {
        var e;
        return !!t && (e = t.current ? t.current.opts : t.opts, e.$orig ? e.$orig.data("fancybox") : e.hash || "")
    }

    i.escapeSelector || (i.escapeSelector = function (t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, i = function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        };
        return (t + "").replace(e, i)
    });
    var s = null;
    i(function () {
        setTimeout(function () {
            i.fancybox.defaults.hash !== !1 && (i(e).on("hashchange.fb", function () {
                var t = n();
                i.fancybox.getInstance() ? s && s !== t.gallery + "-" + t.index && (s = null, i.fancybox.close()) : "" !== t.gallery && a(t)
            }), i(t).on({
                "onInit.fb": function (t, e) {
                    var i = n(), a = o(e);
                    a && i.gallery && a == i.gallery && (e.currIndex = i.index - 1)
                }, "beforeMove.fb": function (i, n, a) {
                    var r = o(n);
                    r && "" !== r && (e.location.hash.indexOf(r) < 0 && (n.opts.origHash = e.location.hash), s = r + (n.group.length > 1 ? "-" + (a.index + 1) : ""), "pushState" in history ? history.pushState("", t.title, e.location.pathname + e.location.search + "#" + s) : e.location.hash = s)
                }, "beforeClose.fb": function (i, n, a) {
                    var r = o(n), l = n && n.opts.origHash ? n.opts.origHash : "";
                    r && "" !== r && ("pushState" in history ? history.pushState("", t.title, e.location.pathname + e.location.search + l) : e.location.hash = l), s = null
                }
            }), a(n()))
        }, 50)
    })
}(document, window, window.jQuery);
(function ($) {

    //Show/Hide the ScrollTop button
    window.onscroll = function (e) {
        var el = document.querySelector('.scrolltop');
        var className = 'active';
        if (window.scrollTop == 0) {
            if (el.classList)
                el.classList.remove(className);
            else
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        } else {
            if (el.classList)
                el.classList.add(className);
            else
                el.className += ' ' + className;
        }
    };

    //Fixed Header
    function fsetMarginTop() {
        setTimeout(function () {
            var header = document.querySelector('.site-header');
            var maincontent = document.querySelector('.site-content');
            var megamenu = document.querySelector('.megamenu');
            megamenu.style.top = header.offsetHeight + 'px';
        }, 700);
    }

    function fsetScrolled() {
        var elmBody = document.querySelector('body');
        var className = 'scrolled';
        var top = typeof window.scrollY === "undefined" ? window.pageYOffset : window.scrollY;
        if (top == 0) {
            $("#site-container").css('padding-top', 0);
            if (elmBody.classList)
                elmBody.classList.remove(className);
            else
                elmBody.className = elmBody.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            //menuFix();
        } else {
            $("#site-container").css('padding-top', $(".site-header").height());
            if (elmBody.classList)
                elmBody.classList.add(className);
            else
                elmBody.className += ' ' + className;
        }
        menuFix();
    }

    function menuFix() {
        var header = $(".site-header").height(),
            main_menu = $(".main-menu").height();
        if ($('body').hasClass('scrolled')) {
            $(".main-menu").css('top', (header - main_menu));
        } else {
            $(".main-menu").removeAttr('style');
        }
    }

    var timer;
    $(window).scroll(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            $(window).trigger("scrollStop");
        }, 450);
    });
    $(window).bind("scrollStop", function () {
        menuFix();
    });

    setTimeout(function () {
        fsetMarginTop();
        fsetScrolled();
    }, 200);
    window.onscroll = function (e) {
        fsetMarginTop();
        fsetScrolled();
    };
    window.onresize = function (e) {
        fsetMarginTop();
        fsetScrolled();
        if (window.innerWidth <= 1024) {
            $(".dropdown-menu").css('left', 0);
        }
        if (window.innerWidth > 1024) {
            if ($('body').hasClass("off-screen")) {
                $("body").toggleClass("off-screen");
                $(".site-header").toggleClass("off-screen");
                $(".site-content").toggleClass("off-screen");
                $(".site-footer").toggleClass("off-screen");
                $(".main-menu").toggleClass("on-screen");
            }
        }
    };
    window.onload = function () {
        menuFix();
    };
    //var thequerystring = location.hash.slice(1);
    //$('html,body').animate({scrollTop: $("#" + thequerystring).offset().top + 45}, 500);


    $(window).ready(function () {
        //Lazy Load Images
        setTimeout(function () {
            $("body img.unveil").each(function (index, el) {
                $(this).unveil(0, function () {
                    $(this).load(function () {
                        this.style.opacity = 1;
                    });
                });
            });
        }, 500);

        //Lazy Load for Maps Iframe
        $(".lazy").recliner({
            attrib: "data-src",
            throttle: 300,
            threshold: 100,
            live: true
        });

        //Custom formatting form elements
        //$("input:checkbox, input:radio, input:file").uniform();

        //Smooth scroll to
        $(window).hashchange(function () {
            var hash = window.location.hash;
            if (hash) {
                setTimeout(function () {
                    window.scrollTo(0, 0);
                }, 1);
                var elem = $(hash);
                if (elem) {
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 155
                    }, 2000);
                }
            }
        });
        $(window).hashchange();

        $(document).on('click', 'a[href*="#"]:not(.home .our-results a[href*="#"], .pagination .page-numbers)', function (event) {
            event.preventDefault();
            var href = $.attr(this, 'href');
            var currentLocation = window.location.href;
            var href1 = href.split("#");
            hash = "#" + href1[1];
            var elem = $(hash);
            if (currentLocation.indexOf(href1[0]) == -1) {
                window.location.href = href;
            } else {
                if ($(hash).length) {
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 155
                    }, 2000);
                }
            }
        });

        //Input mask
        //$('.money').mask('000,000,000,000,000.00', {reverse: true});
        //$('input.number').mask('990', {reverse: true});
        /*$(document).on('change', '.range', function () {
         if ($(this).val() > 100) {
         $(this).val(100);
         }
         $(".range").each(function (index, el) {
         $(this).simpleSlider("setValue", $(this).val());
         });
         });*/

        // Updating slider on window resize
        /*$(window).on('resize', function (event) {
         $(".range").each(function (index, el) {
         $(this).simpleSlider("setValue", $(this).val());
         });
         });*/

        //Support Mobile Menu
        $(document).on('click', '.top-bar a.support-btn', function (event) {
            event.preventDefault();
            $('.top-bar').toggleClass('active');
        });

        //Desktop Menu Dropdown
        var mainMenu = $('.main-menu .navbar-collapse');
        $('.site-header > .fixedwidth').append('<div class="megamenu"></div>');
        var megamenu = $('.megamenu');
        $('> ul.nav > li', mainMenu).each(function (index, el) {
            var submenuID = $(this).attr('id') + '-submenu';
            $('> ul', this).attr('id', submenuID);
            $('> ul', this).clone().appendTo('.megamenu');
        });
        $('ul,li', megamenu).removeAttr('class');
        $('li', megamenu).removeAttr('id');
        megamenu.hide();
        $('.dropdown, .megamenu').hover(
            function () {
                if (window.innerWidth >= 1024) {
                    //$(".dropdown-menu").stop().slideDown(400);
                    //$('.megamenu').stop().slideDown(400);
                    if ($(this).hasClass('dropdown')) {
                        var submenuID = $(this).attr('id') + '-submenu';
                        $(this).find('ul').eq(0).stop().slideDown(400);
                        var pos = $(this).position(),
                            left = pos.left;
                        $(this).find('ul').css('left', left);
                        $('.megamenu #' + submenuID).addClass('active');
                    }
                }
            },
            function () {
                if (window.innerWidth >= 1024) {
                    //$('.megamenu').stop().slideUp(400);
                    //$(".dropdown-menu").stop().slideUp(400);
                    if ($(this).hasClass('dropdown')) {
                        var submenuID = $(this).attr('id') + '-submenu';
                        var menuID = $(this).attr('id');
                        $("#" + menuID).find('ul').eq(0).stop().slideUp(400);
                        $('.megamenu #' + submenuID).removeClass('active');
                    }
                }
            }
        );


        $('.megamenu > ul').hover(
            function () {
                if (window.innerWidth >= 1024) {
                    var menuID = $(this).attr('id');
                    menuID = menuID.replace("-submenu", "");
                    $('.main-menu #' + menuID).addClass('active');
                }
            },
            function () {
                if (window.innerWidth >= 1024) {
                    var menuID = $(this).attr('id');
                    menuID = menuID.replace("-submenu", "");
                    $('.main-menu #' + menuID).removeClass('active');
                }
            }
        );

        //Mobile Menu
        $(document).on('click', '.navbar-toggle', function (event) {
            console.log(11)
            event.preventDefault();
            var body = $('body');
            var siteHeader = $('.site-header');
            var siteContent = $('.site-content');
            var siteFooter = $('.site-footer');
            var mainMenu = $('.main-menu');
            if (body.hasClass("off-screen")) {
                setTimeout(function () {
                    $(".main-menu").css('opacity', 0);
                    siteHeader.toggleClass("off-screen");
                    siteContent.toggleClass("off-screen");
                    siteFooter.toggleClass("off-screen");
                    mainMenu.toggleClass("on-screen");
                }, 100);
            } else {
                $(".main-menu").css('opacity', 1);
                siteHeader.toggleClass("off-screen");
                siteContent.toggleClass("off-screen");
                siteFooter.toggleClass("off-screen");
                mainMenu.toggleClass("on-screen");
            }
            body.toggleClass("off-screen");
        });

        //Mobile Menu Accordion
        $('.navbar-collapse > ul > li ul.dropdown-menu li.dropdown > a').addClass('dropdown-toggle');
        $('.navbar-collapse > ul > li ul li .dropdown-toggle').append('<span class="caret"></span>');
        $('.dropdown-toggle .caret').bind('click', function (event) {
            event.preventDefault();
            if (window.innerWidth <= 1024) {
                var dropdownMenus = $('.main-menu .dropdown-menu');
                var parentLI = $(this).parent().parent();
                if (parentLI.hasClass('active')) {
                    $('> .dropdown-menu', parentLI).stop().slideUp('slow');
                    $('.dropdown-menu .dropdown', parentLI).removeClass('active');
                    parentLI.removeClass('active');
                } else {
                    parentLI.siblings('.dropdown').each(function (index, el) {
                        $('.dropdown-menu', this).stop().slideUp('slow');
                        $('.dropdown-menu .dropdown', this).removeClass('active');
                        $(this).removeClass('active');
                    });
                    $('> .dropdown-menu', parentLI).stop().hide().slideDown('slow');
                    parentLI.addClass('active');
                }
            }
        });
        var contactItem = $('.main-menu .nav-header > li:has(> a[title="Contact"])');
        var reviewsItem = $('.main-menu .nav-header > li:has(> a[title="Reviews"])');
        var contactItemUL = $('> ul', contactItem);
        var reviewsItemUL = $('> ul', reviewsItem);
        $('ul ul li', contactItem).appendTo(contactItemUL);
        $('ul ul li', reviewsItem).appendTo(reviewsItemUL);
        $('ul > li:first-child', contactItem).remove();
        $('ul > li:first-child', reviewsItem).remove();

        $(window).resize(function () {
            if (window.innerWidth > 991) {
                $('.main-menu .navbar-collapse > ul > li').each(function (index, el) {
                    currentLI = $(this);
                    currentLI.removeClass('active');
                    $('.dropdown-menu .dropdown', currentLI).removeClass('active');
                    $('.dropdown-menu', currentLI).css('display', '');
                });
                $('.top-bar').removeClass('active');
            }
            if (window.innerWidth > 479) {
                $('.top-bar').removeClass('active');
            }
            if (window.innerWidth === 1024) {
                $('.main-menu').hide();
                setTimeout(function () {
                    $('.main-menu').show();
                }, 200);
            }

            if (window.innerWidth > 1024) {
                $(".main-menu").css('opacity', 1);
            } else {
                $(".main-menu").css('opacity', 0);
            }
            if (window.innerWidth < 1024) {
                $(".on-screen").css('opacity', 1);
            }
        });
        var offset = 300,
            offset_opacity = 1200,
            scroll_top_duration = 700,
            $back_to_top = $('.scrolltop');

        $(window).scroll(function () {
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('scroll-top-visible') : $back_to_top.removeClass('scroll-top-visible scroll-top-hide');
            /*if( $(this).scrollTop() > offset_opacity ) {
             $back_to_top.addClass('cd-fade-out');
             }*/
        });

        $back_to_top.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                }, scroll_top_duration
            );
        });
        //$(".contact_us_area input[type=submit], .contact-us-form input[type=submit]").wrap('<div class="input-btn-container"><span></span></div>');

        $("a.woocommerce-main-image").fancybox({
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'speedIn': 600,
            'speedOut': 200,
            'overlayShow': false
        });
        $.fancybox.defaults.hash = false;

        $(document).on('change', '#country-ddl', function () {
            var country = $(this).val();
            if (country == 'Select Country') {
                $(".sale-rep-results").html('');
                $("#zip_code").hide();
                return false;
            }
            $("#loading").show();
            var countryTitle = $("#country-ddl option:selected").text();
            if (country == 'usa') {
                $("#zip_code").fadeIn();
                $(".sale-rep-results").html('');
            } else {
                $("#zip_code").hide();
            }
            $.ajax({
                cache: false,
                url: '/wp-json/wp/v2/sales_rep/?per_page=100&filter[country]=' + country,
                success: function (data) {
                    $("#loading").hide();
                    $(".sale-rep-results").html('');
                    if (country == 'usa') {
                        $("#zip_code").on('paste keyup', function () {
                            var $this = this;
                            setTimeout(function () {
                                if ($($this).val().length >= 3) {
                                    var myNumber = parseInt($($this).val().substring(0, 3));

                                    $.each(data, function (i, e) {
                                        var zip_range = e.acf.zip_code.split(',');
                                        $.each(zip_range, function (j, f) {
                                            var zip = f.split('-');
                                            if (zip[1] == undefined) {
                                                zip[1] = zip[0];
                                            }
                                            if (myNumber.isBetween(zip[0], zip[1])) {
                                                /*console.log(myNumber + " is between " + zip[0] + " and " + zip[1] + ".");*/
                                                $(".sale-rep-results").html('');
                                                printData(i, e, countryTitle);
                                            }
                                            else {
                                                /*console.log(myNumber + " is not between " + zip[0] + " and " + zip[1] + ".");*/
                                            }
                                        });
                                    });
                                } else {
                                    $(".sale-rep-results").html('');
                                }
                            }, 500);
                        });
                    } else {
                        $.each(data, function (i, e) {
                            printData(i, e, countryTitle);
                        });
                    }
                }
            });
        });

        function printData(i, e, countryTitle) {
            $(".sale-rep-results").append('<div id="sale-rep-results' + i + '"></div>');
            $("#sale-rep-results" + i).append('<div class="sale-rep-info"><p><label>Manager Name: </label><span>' + e.title.rendered + '</span></p><p><label>Country: </label><span>' + countryTitle + '</span></p></div>');
            if (e.acf.job_title !== '') {
                $("#sale-rep-results" + i + " .sale-rep-info").append('<p><label>Job Title: </label><span>' + e.acf.job_title + '</span></p>');
            }
            if (e.acf.address) {
                $("#sale-rep-results" + i + " .sale-rep-info").append('<address><label>Address: </label>' + e.acf.address + '</address>');
            }
            if (e.acf.phone !== '') {
                $("#sale-rep-results" + i + " .sale-rep-info").append('<p><label>Phone: </label><span>' + e.acf.phone + '</span></p>');
            }
            if (e.acf.mobile !== '') {
                $("#sale-rep-results" + i + " .sale-rep-info").append('<p><label>Mobile: </label><span>' + e.acf.mobile + '</span></p>');
            }
            if (e.acf.fax !== '') {
                $("#sale-rep-results" + i + " .sale-rep-info").append('<p><label>Fax: </label><span>' + e.acf.fax + '</span></p>');
            }
            if (e.acf.email !== '') {
                $("#sale-rep-results" + i + " .sale-rep-info").append('<p><label>Email: </label><a href="mailto:' + e.acf.email + '">' + e.acf.email + '</a></p>');
            }
            if (e.acf.state !== '') {
                $("#sale-rep-results" + i + " .sale-rep-info").append('<p><label>State: </label><span>' + e.acf.state + '</span></p>');
            }
            if (e.acf.region !== '') {
                $("#sale-rep-results" + i + " .sale-rep-info").append('<p><label>Region: </label><span>' + e.acf.region + '</span></p>');
            }
            /*if (e.acf.zip_code !== undefined) {
             $("#sale-rep-results" + i +" .sale-rep-info").append('<p><label>Zip Code: </label><span>' + e.acf.zip_code + '</span></p>');
             }*/
        }

        if (typeof(Number.prototype.isBetween) === "undefined") {
            Number.prototype.isBetween = function (min, max, notBoundaries) {
                var between = false;
                if (notBoundaries) {
                    if ((this < max) && (this > min)) between = true;
                } else {
                    if ((this <= max) && (this >= min)) between = true;
                }
                return between;
            }
        }

        $('.region-area')
            .mouseenter(function () {
                $(".region-list").stop().slideDown();
            })
            .mouseleave(function () {
                $(".region-list").stop().slideUp();
            });
    });
})(jQuery);