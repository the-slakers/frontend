exports.GenerateMap = rsr => {
	
	var defaultFillColor = "#000"

	var object = {};

	var rect_a = rsr.rect(728.7, 33.1, 5.3, 59.7);
	rect_a.attr({
	    x: '728.7',
	    y: '33.1',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_a'); //useless

	var building418 = rsr.rect(686.3, 199.4, 57.2, 25.6);
	building418.attr({
	    id: 'building418',
	    x: '686.3',
	    y: '199.4',
	    class: 'st1',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building418');
	object["B418"] = building418

	var path_b = rsr.path("M 961.7,301.9 990.8,301.9 990.8,368.9 924.3,368.9 924.3,336.5 936.1,336.5 936.1,357.3 979,357.3 979,313.5 961.7,313.5 z");
	path_b.attr({
	    class: 'st2',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'path_b'); // useless

	var building411 = rsr.rect(927.8, 116.6, 73, 43.4);
	building411.attr({
	    id: 'building411',
	    x: '927.8',
	    y: '116.6',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building411');
	object["B411"] = building411

	var building417 = rsr.rect(788.1, 190.3, 73.2, 41.9);
	building417.attr({
	    id: 'building417',
	    x: '788.1',
	    y: '190.3',
	    class: 'st1',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building417');
	object["B417"] = building417

	var building409 = rsr.rect(788.1, 139.2, 73.2, 41.9);
	building409.attr({
	    id: 'building409',
	    x: '788.1',
	    y: '139.2',
	    class: 'st1',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building409');
	object["B409"] = building409

	var building413 = rsr.rect(651, 79, 109.6, 47.4);
	building413.attr({
	    id: 'building413',
	    x: '651',
	    y: '79',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building413');
	object["B413"] = building413

	var building412 = rsr.rect(795.4, 79, 73.5, 39.1);
	building412.attr({
	    id: 'building412',
	    x: '795.4',
	    y: '79',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building412');
	object["B412"] = building412

	var building403 = rsr.rect(655.7, 15.5, 82, 21.3);
	building403.attr({
	    id: 'building403',
	    x: '655.7',
	    y: '15.5',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building403');
	object["B403"] = building403

	var rect_c = rsr.rect(859.9, 33.1, 5.3, 59.7);
	rect_c.attr({
	    x: '859.9',
	    y: '33.1',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_c'); //useless

	var rect_d = rsr.rect(789.9, 33.1, 5.3, 42.9);
	rect_d.attr({
	    x: '789.9',
	    y: '33.1',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_d');

	var rect_f = rsr.rect(669, 62.9, 193.3, 16.6);
	rect_f.attr({
	    x: '669',
	    y: '62.9',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_f'); //useless

	var building402 = rsr.rect(786.9, 15.5, 82, 21.3);
	building402.attr({
	    id: 'building402',
	    x: '786.9',
	    y: '15.5',
	    class: 'st1',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building402');
	object["B402"] = building402

	var rect_h = rsr.rect(523.3, 63.2, 182.1, 28.8);
	rect_h.attr({
	    x: '523.3',
	    y: '63.2',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_h'); // ????

	var building414 = rsr.rect(524.3, 79, 73.5, 47.4);
	building414.attr({
	    id: 'building414',
	    x: '524.3',
	    y: '79',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building414');
	object["B414"] = building414

	var building404 = rsr.rect(524.6, 15.5, 82, 21.3);
	building404.attr({
	    id: 'building404',
	    x: '524.6',
	    y: '15.5',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building404');
	object["B404"] = building404

	var rect_g = rsr.rect(659.5, 33.1, 5.3, 42.9);
	rect_g.attr({
	    x: '659.5',
	    y: '33.1',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_g'); //useless


	var rect_i = rsr.rect(603.8, 63.2, 48.9, 28.8);
	rect_i.attr({
	    x: '603.8',
	    y: '63.2',
	    class: 'st1',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_i'); // useless
	var rect_j = rsr.rect(597.1, 33.1, 5.3, 59.7);
	rect_j.attr({
	    x: '597.1',
	    y: '33.1',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_j'); //useless
	var rect_k = rsr.rect(528.6, 33.1, 5.3, 59.7);
	rect_k.attr({
	    x: '528.6',
	    y: '33.1',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_k'); //useless

	var building435 = rsr.rect(851.8, 330, 21.1, 57.2);
	building435.attr({
	    id: 'building435',
	    x: '851.8',
	    y: '330',
	    class: 'st2',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building435');
	object["B435"] = building435

	var Convenient_Store = rsr.rect(854.1, 268.1, 19.6, 40.4);
	Convenient_Store.attr({
	    id: 'Convenient_Store',
	    x: '854.1',
	    y: '268.1',
	    class: 'st3',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'Convenient_Store');
	object["Convenient_Store"] = Convenient_Store

	var path_l = rsr.path("M194.3,309.2h-0.5 M194.3,309.2l1.3,4.3h-0.3l0.5,2l1.8-0.8l2.3,5.8l-2,0.8l0.8,1.8l0.5-0.3l0.5,1l1.5-0.5 l1.3,3l-1.8,0.8l0.8,1.8h0.5l0.5,0.5l3.8-1.8l6.3,11.5l-4,2.3l1.8,2.5l1.8-1l1.8,2.8l-1.5,0.8l0.5,1l-0.5,0.3l1.3,1.8l1.8-1.3l3.5,5 l-1.5,1l-0.5,0.5l1.3,1.8l0.5-0.5l0.8,0.8l-0.5,0.5l1.5,1.8l0.5-0.3l0.5,0.5l-0.3,0.3l1,1.3v-0.3l1.5,1.8l-0.5,0.3l1.3,1.8l1.8-1.3 l4,4.8l-1.3,1l-0.5,0.5l1.3,1.8l0.5-0.5l0.8,1l1.3-1l2,2.5l-1.5,1l-0.5,0.5l1.5,1.8l0.5-0.5l0.5,0.5l0.5-0.5l2.8-2l8.5,10.8l-3,2.5 l1.8,2.5l1.5-1l2,2.3l-1.5,1.3l0.8,0.8l1.3,1.8l1.5-1l3.8,4.8l-1.3,1v0.3l-0.3,0.3l1.3,1.8l0.3-0.5l2.3,3v-0.3l0.5,0.8l0.8,1 l2.8,3.3l1.3-1l4,4.8l-1.5,1.3h0.3l-0.5,0.5l1.5,1.5l0.5-0.3l0.5,0.8l1.5-1l1.8,2.5l-1.3,1l-0.3,0.3l1.3,1.8l0.3-0.3l0.5,0.3 l0.5-0.5l1.8-1.3l0.5-0.5l0.3,0.3l0.5-0.3l4,5.3l-3,2.5l0.5,0.8l-6.3,5l-7,5.8l-1.8,1.5l-5-6.3l-7.5-10 c-35.1-46.6-71.2-75.5-76.2-138.2 M171.3,285.4l18.3-5v1l4-1l0.5,7.3l-3.8,0.8l0.5,3l1.5-0.3l0.5,3l0.5,3l-1.8,0.5h-0.5l0.5,2 l0.5-0.3l0.3,1.3l1.8-0.5l0.8,3l-2,0.5l0.5,2l0.5-0.3l0.5,1.3l-0.5,0.3v0.3l0.5,2 M222.7,360.8v0.5 M222.4,360.3v0.8 M222.4,360.3 L222.4,360.3 M222.7,360.6L222.7,360.6L222.7,360.6v0.5h0.3 M222.4,360.6L222.4,360.6 M222.4,360.6L222.4,360.6 M222.4,360.6 L222.4,360.6 M221.2,359.1v0.5 M221.2,358.8v0.5 M220.9,358.8L220.9,358.8 M221.2,358.6L221.2,358.6 M220.9,358.6L220.9,358.6 M220.7,358.6L220.7,358.6 M221.2,358.8L221.2,358.8L221.2,358.8L221.2,358.8 M221.2,358.8L221.2,358.8 M220.9,358.3L220.9,358.3 L220.9,358.3v0.5");
	path_l.attr({
	    class: 'st2',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'path_l');
	var building427B = rsr.path("M230,170.3v51.2h24.6v-51.2H230z M169.5,193.3V165h228.9v61.7H169.5L169.5,193.3");
	building427B.attr({
	    id: 'building427B',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building427B');
	object["B427B"] = building427B

	var building425 = rsr.rect(225.4, 15.3, 22.6, 87.5);
	building425.attr({
	    id: 'building425',
	    x: '225.4',
	    y: '15.3',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building425');
	object["B425"] = building425

	var building424 = rsr.rect(281.9, 15.3, 22.6, 87.5);
	building424.attr({
	    id: 'building424',
	    x: '281.9',
	    y: '15.3',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building424');
	object["B424"] = building424

	var building423 = rsr.rect(338.3, 15.3, 22.6, 87.5);
	building423.attr({
	    id: 'building423',
	    x: '338.3',
	    y: '15.3',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building423');
	object["B423"] = building423

	var building426 = rsr.path("M151,15.5v82h54.9v-82H151z M188.1,31.3v49.4h-20.8V31.3H188.1z");
	building426.attr({
	    id: 'building426',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building426');
	object["B426"] = building426

	var path_m = rsr.path("M 350.3,368.9 350.3,384.7 331.3,384.7 331.3,380.9 321.2,380.9 321.2,384.7 308.9,384.7 308.9,380.9 298.7,380.9 298.7,384.7 286.4,384.7 286.4,380.9 276.3,380.9 276.3,384.7 269.8,384.7 269.8,368.9 z");
	path_m.attr({
	    class: 'st2',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'path_m');
	var path_n = rsr.path("M 403.5,414 376.6,414 376.6,417.8 354.3,417.8 354.3,433.1 361.1,433.1 361.1,429.8 383.2,429.8 383.2,426 397,426 397,429.8 403.5,429.8 z");
	path_n.attr({
	    class: 'st2',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'path_n');
	var path_o = rsr.path("M 310.4,420.3 342.8,420.3 342.8,435.8 336.3,435.8 336.3,432.1 317,432.1 317,435.8 294.6,435.8 294.6,439.3 288.1,439.3 288.1,423.8 310.4,423.8 z");
	path_o.attr({
	    class: 'st2',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'path_o');
	var path_p = rsr.path("M219.9,309.9c-4.8,0-8.5-3.8-8.5-8.5c0-4.8,3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5 C228.4,306.2,224.7,309.9,219.9,309.9L219.9,309.9");
	path_p.attr({
	    class: 'st2',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'path_p');
	var rect_q = rsr.rect(651, 83.3, 54.7, 43.4);
	rect_q.attr({
	    x: '651',
	    y: '83.3',
	    class: 'st1',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_q');
	var Kampsax_Hall_of_Residence = rsr.set();
	var rect_r = rsr.rect(749.8, 384.9, 50.4, 21.1).attr({
	    x: '749.8',
	    y: '384.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_r');
	var rect_s = rsr.rect(705.1, 363.6, 50.4, 21.1).attr({
	    x: '705.1',
	    y: '363.6',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_s');
	var rect_t = rsr.rect(660.8, 384.9, 50.4, 21.1).attr({
	    x: '660.8',
	    y: '384.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_t');
	var rect_u = rsr.rect(616.4, 363.6, 50.4, 21.1).attr({
	    x: '616.4',
	    y: '363.6',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_u');
	var rect_v = rsr.rect(572, 384.9, 50.4, 21.1).attr({
	    x: '572',
	    y: '384.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_v');
	var rect_w = rsr.rect(527.6, 406, 50.4, 21.1).attr({
	    x: '527.6',
	    y: '406',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_w');
	var rect_x = rsr.rect(483.2, 384.9, 50.4, 21.1).attr({
	    x: '483.2',
	    y: '384.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_x');
	var rect_y = rsr.rect(438.8, 406, 50.4, 21.1).attr({
	    x: '438.8',
	    y: '406',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_y');
	var rect_z = rsr.rect(438.8, 363.6, 50.4, 21.1).attr({
	    x: '438.8',
	    y: '363.6',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_z');
	var rect_aa = rsr.rect(438.8, 323, 50.4, 21.1).attr({
	    x: '438.8',
	    y: '323',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_aa');
	var rect_ab = rsr.rect(483.2, 301.9, 50.4, 21.1).attr({
	    x: '483.2',
	    y: '301.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_ab');
	var rect_ac = rsr.rect(438.8, 280.9, 50.4, 21.1).attr({
	    x: '438.8',
	    y: '280.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_ac');
	var rect_ad = rsr.rect(527.6, 280.9, 50.4, 21.1).attr({
	    x: '527.6',
	    y: '280.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_ad');
	var rect_ae = rsr.rect(572, 301.9, 50.4, 21.1).attr({
	    x: '572',
	    y: '301.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_ae');
	var rect_af = rsr.rect(660.8, 301.9, 50.4, 21.1).attr({
	    x: '660.8',
	    y: '301.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_af');
	var rect_ag = rsr.rect(616.4, 280.9, 50.4, 21.1).attr({
	    x: '616.4',
	    y: '280.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_ag');
	var rect_ah = rsr.rect(705.1, 280.9, 50.4, 21.1).attr({
	    x: '705.1',
	    y: '280.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_ah');
	var rect_ai = rsr.rect(749.8, 301.9, 50.4, 21.1).attr({
	    x: '749.8',
	    y: '301.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_ai');
	var rect_aj = rsr.rect(794.2, 363.6, 50.4, 21.1).attr({
	    x: '794.2',
	    y: '363.6',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_aj');
	var rect_ak = rsr.rect(794.2, 323, 50.4, 21.1).attr({
	    x: '794.2',
	    y: '323',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_ak');
	var rect_al = rsr.rect(794.2, 280.9, 50.4, 21.1).attr({
	    x: '794.2',
	    y: '280.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: 'Kampsax_Hall_of_Residence',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_al');
	Kampsax_Hall_of_Residence.attr({
	    'id': 'Kampsax_Hall_of_Residence',
	    'name': 'Kampsax_Hall_of_Residence'
	});
	var _x34_47 = rsr.set();
	var rect_am = rsr.rect(360.3, 285.9, 30.3, 12).attr({
	    x: '360.3',
	    y: '285.9',
	    class: 'st2',
	    visibility:'hidden',
	    parent: '_x34_47',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_am');
	var rect_an = rsr.rect(343.8, 289.6, 12, 41.6).attr({
	    x: '343.8',
	    y: '289.6',
	    class: 'st2',
	    visibility:'hidden',
	    parent: '_x34_47',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'rect_an');
	var building447 = rsr.rect(285.4, 319.2, 58.4, 12).attr({
	    x: '285.4',
	    y: '319.2',
	    class: 'st2',
	    visibility:'hidden',
	    parent: '_x34_47',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building447');
	object["B447"] = building447

	var building450 = rsr.rect(52.4, 152.2, 45.1, 43.6);
	building450.attr({
	    id: 'building450',
	    x: '52.4',
	    y: '152.2',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building450');
	object["B450"] = building450

	var building451 = rsr.path("M0,0v114.8h97.3V0H0z M84.8,22.3v69h-71V22.1L84.8,22.3L84.8,22.3z")
	building451.attr({
	    id: 'building451',
	    class: 'st0',
	    visibility:'hidden',
	    'stroke-width': '0',
	    'stroke-opacity': '1',
	    'fill': defaultFillColor
	}).data('id', 'building451');
	object["B451"] = building451
	
	var rsrGroups = [Kampsax_Hall_of_Residence];
	Kampsax_Hall_of_Residence.push(rect_r, rect_s, rect_t, rect_u, rect_v, rect_w, rect_x, rect_y, rect_z, rect_aa, rect_ab, rect_ac, rect_ad, rect_ae, rect_af, rect_ag, rect_ah, rect_ai, rect_aj, rect_ak, rect_al);
	// _x34_47.push(rect_am, rect_an, rect_ao);
	// _x34_50.push(rect_ap);
	// _x34_51.push(path_aq);
	return object;
}