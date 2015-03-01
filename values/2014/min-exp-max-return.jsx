function minExpMaxReturns(country, graph) {
    var returns = {};

// Values for FI
    if (country == "FI") {
        // 201403
        if (graph == "con") {
            returns.maxReturn = new Array(8.77489, 14.68825, 20.30448, 25.86114, 31.45125, 37.12429, 42.91159, 48.83550, 54.91341, 61.15978, 67.58727, 74.20741, 81.03098, 88.06834, 95.32957, 102.82464, 110.56348, 118.55606, 126.81247, 135.34294);
            returns.expReturn = new Array(3.19163, 6.48512, 9.88373, 13.39081, 17.00983, 20.74435, 24.59806, 28.57476, 32.67839, 36.91299, 41.28275, 45.79197, 50.44511, 55.24676, 60.20166, 65.31470, 70.59093, 76.03556, 81.65396, 87.45168);
            returns.minReturn = new Array(-2.44869, -1.68484, -0.38227, 1.21811, 3.02679, 5.00000, 7.11322, 9.35159, 11.70572, 14.16957, 16.73925, 19.41240, 22.18774, 25.06475, 28.04356, 31.12475, 34.30930, 37.59853, 40.99401, 44.49758);
        }
        if (graph == "mod") {
            returns.maxReturn = new Array(12.72228, 21.09337, 29.06025, 36.98872, 45.02393, 53.24510, 61.70420, 70.43990, 79.48376, 88.86322, 98.60341, 108.72809, 119.26032, 130.22293, 141.63873, 153.53083, 165.92274, 178.83853, 192.30295, 206.34148);
            returns.expReturn = new Array(3.96192, 8.08080, 12.36288, 16.81460, 21.44270, 26.25416, 31.25625, 36.45651, 41.86281, 47.48330, 53.32647, 59.40113, 65.71648, 72.28203, 79.10770, 86.20380, 93.58104, 101.25057, 109.22395, 117.51323);
            returns.minReturn = new Array(-5.26453, -5.31617, -4.53056, -3.29854, -1.76481, 0.00000, 1.95629, 4.08000, 6.35582, 8.77376, 11.32733, 14.01242, 16.82660, 19.76872, 22.83859, 26.03677, 29.36445, 32.82333, 36.41553, 40.14358);
        }
        if (graph == "bal") {
            returns.maxReturn = new Array(21.48923, 35.36849, 48.70247, 62.15121, 75.98600, 90.36367, 105.39496, 121.16910, 137.76463, 155.25489, 173.71112, 193.20428, 213.80635, 235.59120, 258.63519, 283.01780, 308.82199, 336.13468, 365.04705, 395.65496);
            returns.expReturn = new Array(5.23776, 10.74986, 16.55067, 22.65531, 29.07970, 35.84059, 42.95559, 50.44326, 58.32311, 66.61570, 75.34262, 84.52665, 94.19171, 104.36300, 115.06704, 126.33174, 138.18645, 150.66208, 163.79115, 177.60790);
            returns.minReturn = new Array(-10.45390, -12.09494, -12.39094, -11.99973, -11.16347, -10.00000, -8.57544, -6.93014, -5.09001, -3.07222, -0.88827, 1.45420, 3.95030, 6.59715, 9.39343, 12.33900, 15.43470, 18.68219, 22.08380, 25.64246);
        }
        if (graph == "gro") {
            returns.maxReturn = new Array(31.17329, 51.54418, 71.45862, 91.90329, 113.30642, 135.93550, 159.99622, 185.66806, 213.12014, 242.51940, 274.03538, 307.84333, 344.12639, 383.07739, 424.90026, 469.81142, 518.04100, 569.83411, 625.45206, 685.17368);
            returns.expReturn = new Array(6.52898, 13.48423, 20.89359, 28.78671, 37.19516, 46.15261, 55.69488, 65.86016, 76.68913, 88.22513, 100.51431, 113.60584, 127.55212, 142.40895, 158.23577, 175.09593, 193.05688, 212.19050, 232.57335, 254.28699);
            returns.minReturn = new Array(-15.58304, -18.77323, -20.14166, -20.60703, -20.50546, -20.00000, -19.18207, -18.10758, -16.81269, -15.32166, -13.65104, -11.81220, -9.81283, -7.65796, -5.35056, -2.89206, -0.28261, 2.47869, 5.39358, 8.46458);
        }
        if (graph == "rf") {
            returns.maxReturn = new Array(37.13890, 61.66320, 85.88773, 111.00568, 137.55342, 165.88151, 196.27161, 228.97884, 264.25074, 302.33723, 343.49671, 388.00011, 436.13399, 488.20315, 544.53299, 605.47164, 671.39221, 742.69500, 819.80975, 903.19809);
            returns.expReturn = new Array(7.23607, 14.99575, 23.31692, 32.24022, 41.80922, 52.07063, 63.07457, 74.87477, 87.52883, 101.09855, 115.65018, 131.25478, 147.98854, 165.93317, 185.17628, 205.81184, 227.94060, 251.67061, 277.11775, 304.40625);
            returns.minReturn = new Array(-20.20632, -24.93741, -27.44959, -28.88777, -29.67020, -30.00000, -29.99148, -29.71516, -29.21726, -28.52940, -27.67386, -26.66664, -25.51936, -24.24046, -22.83603, -21.31033, -19.66623, -17.90545, -16.02880, -14.03630);
        }
    }

// Values for SE
    if (country == "SE") {
        // 201403
        if (graph == "con") {
            returns.maxReturn = new Array(11.47556, 19.46602, 27.20182, 34.98475, 42.93697, 51.12726, 59.60250, 68.39904, 77.54774, 87.07644, 97.01140, 107.37809, 118.20179, 129.50788, 141.32219, 153.67110, 166.58178, 180.08226, 194.20159, 208.96989);
            returns.expReturn = new Array(4.31000, 8.80576, 13.49529, 18.38694, 23.48941, 28.81181, 34.36360, 40.15467, 46.19533, 52.49635, 59.06894, 65.92482, 73.07618, 80.53576, 88.31685, 96.43331, 104.89958, 113.73075, 122.94255, 132.55137);
            returns.minReturn = new Array(-3.87391, -3.13559, -1.63129, 0.29840, 2.52877, 5.00000, 7.67946, 10.54813, 13.59473, 16.81268, 20.19850, 23.75089, 27.47010, 31.35760, 35.41575, 39.64772, 44.05729, 48.64883, 53.42718, 58.39766);
        }
        if (graph == "mod") {
            returns.maxReturn = new Array(17.24549, 28.93324, 40.29924, 51.83639, 63.75024, 76.16199, 89.15912, 102.81356, 117.18971, 132.34853, 148.34985, 165.25372, 183.12145, 202.01617, 222.00347, 243.15174, 265.53255, 289.22103, 314.29613, 340.84095);
            returns.expReturn = new Array(5.33000, 10.94409, 16.85741, 23.08591, 29.64639, 36.55654, 43.83500, 51.50141, 59.57643, 68.08186, 77.04062, 86.47689, 96.41610, 106.88508, 117.91206, 129.52677, 141.76055, 154.64639, 168.21904, 182.51511);
            returns.minReturn = new Array(-6.88849, -6.95546, -5.93529, -4.33000, -2.32245, 0.00000, 2.58978, 5.41923, 8.47189, 11.73813, 15.21289, 18.89417, 22.78231, 26.87934, 31.18870, 35.71494, 40.46359, 45.44101, 50.65435, 56.11143);
        }
        if (graph == "bal") {
            returns.maxReturn = new Array(24.63558, 41.19360, 57.45820, 74.17422, 91.66619, 110.13770, 129.74583, 150.62797, 172.91377, 196.73127, 222.21055, 249.48605, 278.69821, 309.99483, 343.53216, 379.47590, 418.00217, 459.29844, 503.56446, 551.01326);
            returns.expReturn = new Array(6.41000, 13.23088, 20.48898, 28.21232, 36.43073, 45.17594, 54.48172, 64.38400, 74.92101, 86.13345, 98.06461, 110.76055, 124.27030, 138.64602, 153.94324, 170.22100, 187.54216, 205.97361, 225.58652, 246.45662);
            returns.minReturn = new Array(-11.69257, -13.32307, -13.43090, -12.75669, -11.56994, -10.00000, -8.11810, -5.96659, -3.57169, -0.94979, 1.88911, 4.93940, 8.19863, 11.66670, 15.34540, 19.23797, 23.34893, 27.68387, 32.24933, 37.05274);
        }
        if (graph == "gro") {
            returns.maxReturn = new Array(33.64595, 56.55490, 79.45656, 103.41210, 128.91735, 156.31119, 185.87717, 217.88039, 252.58431, 290.25985, 331.19108, 375.67932, 424.04645, 476.63780, 533.82491, 596.00823, 663.61992, 737.12670, 817.03291, 903.88371);
            returns.expReturn = new Array(7.72000, 16.03598, 24.99396, 34.64350, 45.03797, 56.23491, 68.29624, 81.28871, 95.28420, 110.36014, 126.59994, 144.09346, 162.93747, 183.23624, 205.10208, 228.65596, 254.02820, 281.35918, 310.80011, 342.51388);
            returns.minReturn = new Array(-16.69768, -19.85648, -21.04649, -21.25883, -20.85258, -20.00000, -18.79632, -17.29873, -15.54326, -13.55318, -11.34349, -8.92359, -6.29887, -3.47177, -0.44243, 2.79084, 6.23123, 9.88320, 13.75233, 17.84521);
        }
        if (graph == "rf") {
            returns.maxReturn = new Array(40.20850, 67.88249, 95.86616, 125.46337, 157.31323, 191.87601, 229.55413, 270.73658, 315.81960, 365.21835, 419.37467, 478.76303, 543.89576, 615.32778, 693.66146, 779.55147, 873.70991, 976.91179, 1090.00079, 1213.89557);
            returns.expReturn = new Array(8.54000, 17.80932, 27.87023, 38.79035, 50.64305, 63.50796, 77.47154, 92.62761, 109.07801, 126.93327, 146.31337, 167.34853, 190.18010, 214.96148, 241.85919, 271.05396, 302.74197, 337.13614, 374.46756, 414.98709);
            returns.minReturn = new Array(-19.33822, -23.24376, -24.94685, -25.57188, -25.52479, -25.00000, -24.10494, -22.90425, -21.43884, -19.73536, -17.81125, -15.67771, -13.34156, -10.80630, -8.07299, -5.14064, -2.00669, 1.33284, 4.88309, 8.65031);
        }
    }

// Values for DK
    if (country == "DK") {
        // 201403
        if (graph == "con") {
            returns.maxReturn = new Array(7.57021, 12.00131, 15.99104, 22.31747, 30.05897, 39.41431, 45.62434, 51.99600, 58.54844, 65.29779, 72.25841, 79.44350, 86.86559, 94.53679, 102.46903, 110.67417, 119.16411, 127.95088, 137.04669, 146.46398);
            returns.expReturn = new Array(1.80440, 3.64135, 5.51145, 9.68189, 15.16716, 22.06329, 26.18738, 30.45081, 34.85828, 39.41467, 44.12500, 48.99447, 54.02847, 59.23255, 64.61246, 70.17413, 75.92371, 81.86756, 88.01222, 94.36449);
            returns.minReturn = new Array(-4.17351, -4.89623, -5.06746, -2.94946, 0.40792, 5.00000, 7.20897, 9.55345, 12.02363, 14.61325, 17.31840, 20.13679, 23.06728, 26.10957, 29.26406, 32.53162, 35.91359, 39.41166, 43.02781, 46.76429);
        }
        if (graph == "mod") {
            returns.maxReturn = new Array(12.36976, 19.77186, 26.55673, 35.42086, 45.69042, 57.64575, 66.85000, 76.37541, 86.25801, 96.52953, 107.21923, 118.35503, 129.96422, 142.07394, 154.71152, 167.90470, 181.68188, 196.07219, 211.10572, 226.81353);
            returns.expReturn = new Array(2.83341, 5.74710, 8.74334, 13.75246, 19.98107, 27.54326, 32.82111, 38.31736, 44.04105, 50.00159, 56.20878, 62.67283, 69.40437, 76.41446, 83.71464, 91.31691, 99.23377, 107.47823, 116.06385, 125.00476);
            returns.minReturn = new Array(-6.66287, -7.88456, -8.25218, -6.60020, -3.83693, 0.00000, 2.03898, 4.25430, 6.63040, 9.15721, 11.82831, 14.63975, 17.58933, 20.67618, 23.90045, 27.26307, 30.76565, 34.41030, 38.19966, 42.13673);
        }
        if (graph == "bal") {
            returns.maxReturn = new Array(21.51627, 34.80928, 47.33244, 61.56060, 77.24884, 94.79546, 110.63465, 127.28122, 144.82044, 163.33237, 182.89508, 203.58666, 225.48656, 248.67649, 273.24118, 299.26891, 326.85206, 356.08753, 387.07719, 419.92824);
            returns.expReturn = new Array(4.48637, 9.17401, 14.07195, 20.52168, 28.03089, 36.72276, 44.03928, 51.74734, 59.86788, 68.42298, 77.43590, 86.93113, 96.93448, 107.47315, 118.57578, 130.27255, 142.59525, 155.57739, 169.25425, 183.66301);
            returns.minReturn = new Array(-11.31054, -13.65191, -14.63140, -13.97590, -12.39879, -10.00000, -8.53063, -6.83594, -4.94195, -2.86580, -0.61889, 1.79130, 4.36004, 7.08468, 9.96412, 12.99850, 16.18894, 19.53741, 23.04656, 26.71967);
        }
        if (graph == "gro") {
            returns.maxReturn = new Array(30.39276, 49.74242, 68.40721, 88.60196, 110.44839, 134.42146, 158.04848, 183.22130, 210.10230, 238.85098, 269.62872, 302.60179, 337.94355, 375.83610, 416.47166, 460.05388, 506.79897, 556.93685, 610.71232, 668.38621);
            returns.expReturn = new Array(5.89105, 12.12915, 18.73474, 26.56237, 35.34664, 45.20288, 54.51516, 64.42467, 74.96970, 86.19101, 98.13198, 110.83876, 124.36046, 138.74935, 154.06104, 170.35471, 187.69334, 206.14395, 225.77785, 246.67093);
            returns.minReturn = new Array(-15.88712, -19.46194, -21.22315, -21.57468, -21.11528, -20.00000, -19.22002, -18.18693, -16.93687, -15.49413, -13.87537, -12.09211, -10.15222, -8.06090, -5.82138, -3.43529, -0.90306, 1.77593, 4.60314, 7.58076);
        }
        if (graph == "rf") {
            returns.maxReturn = new Array(38.37741, 63.53111, 88.30449, 114.42436, 142.35414, 172.56261, 204.25945, 238.40168, 275.25115, 315.07265, 358.14024, 404.74149, 455.18084, 509.78229, 568.89187, 632.88004, 702.14398, 777.10996, 858.23585, 946.01362);
            returns.expReturn = new Array(7.12752, 14.76306, 22.94282, 32.00600, 41.89816, 52.70340, 63.86649, 75.84563, 88.70050, 102.49509, 117.29810, 133.18327, 150.22969, 168.52225, 188.15206, 209.21687, 231.82158, 256.07877, 282.10923, 310.04260);
            returns.minReturn = new Array(-20.40588, -25.25328, -27.86914, -29.24504, -29.88764, -30.00000, -29.97143, -29.67361, -29.15277, -28.44051, -27.55906, -26.52437, -25.34797, -24.03821, -22.60108, -21.04075, -19.35996, -17.56033, -15.64252, -13.60644);
        }
    }

// Values for NO
    if (country == "NO") {
        // 201403 v2
        if (graph == "con") {
            returns.maxReturn = new Array(8.86, 15.35, 21.68, 28.07, 34.60, 41.31, 48.24, 55.41, 62.84, 70.56, 78.58, 86.92, 95.59, 104.61, 114.00, 123.78, 133.96, 144.57, 155.61, 167.12);
            returns.expReturn = new Array(4.00, 8.16, 12.49, 16.99, 21.67, 26.53, 31.59, 36.86, 42.33, 48.02, 53.95, 60.10, 66.51, 73.17, 80.09, 87.30, 94.79, 102.58, 110.68, 119.11);
            returns.minReturn = new Array(-1.70, -0.16, 1.96, 4.40, 7.10, 10.00, 13.09, 16.35, 19.79, 23.39, 27.15, 31.08, 35.17, 39.44, 43.87, 48.49, 53.28, 58.26, 63.44, 68.81);
        }
        if (graph == "mod") {
            returns.maxReturn = new Array(15.90, 26.79, 37.39, 48.14, 59.22, 70.76, 82.83, 95.48, 108.78, 122.78, 137.54, 153.09, 169.51, 186.85, 205.15, 224.48, 244.90, 266.49, 289.29, 313.39);
            returns.expReturn = new Array(5.20, 10.67, 16.43, 22.48, 28.85, 35.55, 42.60, 50.01, 57.81, 66.02, 74.65, 83.73, 93.29, 103.34, 113.91, 125.04, 136.74, 149.05, 162.00, 175.62);
            returns.minReturn = new Array(-6.74, -6.80, -5.80, -4.23, -2.27, 0.00, 2.53, 5.29, 8.27, 11.46, 14.84, 18.43, 22.21, 26.20, 30.38, 34.78, 39.39, 44.21, 49.26, 54.55);
        }
        if (graph == "bal") {
            returns.maxReturn = new Array(23.84, 39.94, 55.77, 72.05, 89.08, 107.07, 126.16, 146.49, 168.18, 191.35, 216.14, 242.66, 271.06, 301.48, 334.07, 368.99, 406.41, 446.50, 489.47, 535.52);
            returns.expReturn = new Array(6.40, 13.21, 20.46, 28.16, 36.37, 45.09, 54.38, 64.26, 74.77, 85.96, 97.86, 110.52, 124.00, 138.33, 153.59, 169.81, 187.08, 205.46, 225.01, 245.81);
            returns.minReturn = new Array(-11.68, -13.31, -13.42, -12.75, -11.57, -10.00, -8.12, -5.97, -3.58, -0.97, 1.87, 4.91, 8.16, 11.62, 15.29, 19.18, 23.28, 27.61, 32.16, 36.95);
        }
        if (graph == "gro") {
            returns.maxReturn = new Array(29.66, 49.75, 69.70, 90.42, 112.33, 135.71, 160.78, 187.74, 216.79, 248.14, 281.99, 318.57, 358.10, 400.83, 447.04, 497.00, 551.02, 609.43, 672.58, 740.85);
            returns.expReturn = new Array(7.20, 14.92, 23.19, 32.06, 41.57, 51.76, 62.69, 74.40, 86.96, 100.42, 114.85, 130.32, 146.91, 164.68, 183.74, 204.17, 226.07, 249.55, 274.71, 301.69);
            returns.minReturn = new Array(-14.33, -16.73, -17.36, -17.10, -16.26, -15.00, -13.40, -11.52, -9.37, -6.99, -4.38, -1.55, 1.49, 4.75, 8.22, 11.91, 15.83, 19.97, 24.35, 28.98);
        }
        if (graph == "rf") {
            returns.maxReturn = new Array(35.66, 60.03, 84.49, 110.18, 137.63, 167.22, 199.27, 234.07, 271.93, 313.17, 358.12, 407.12, 460.56, 518.84, 582.40, 651.72, 727.30, 809.71, 899.55, 997.47);
            returns.expReturn = new Array(8.00, 16.64, 25.97, 36.05, 46.93, 58.69, 71.38, 85.09, 99.90, 115.89, 133.16, 151.82, 171.96, 193.72, 217.22, 242.59, 270.00, 299.60, 331.57, 366.10);
            returns.minReturn = new Array(-16.95, -20.10, -21.25, -21.41, -20.93, -20.00, -18.71, -17.11, -15.25, -13.14, -10.80, -8.24, -5.47, -2.48, 0.73, 4.15, 7.80, 11.67, 15.78, 20.13);
        }
        if (graph == "rf_plus") {
            returns.maxReturn = new Array(44.12, 74.81, 106.10, 139.45, 175.59, 215.08, 258.41, 306.07, 358.58, 416.45, 480.27, 550.66, 628.30, 713.92, 808.32, 912.39, 1027.09, 1153.46, 1292.65, 1445.93);
            returns.expReturn = new Array(9.10, 19.03, 29.86, 41.68, 54.57, 68.64, 83.98, 100.72, 118.99, 138.92, 160.66, 184.38, 210.26, 238.49, 269.29, 302.90, 339.56, 379.56, 423.20, 470.81);
            returns.minReturn = new Array(-21.76, -26.41, -28.66, -29.75, -30.12, -30.00, -29.50, -28.69, -27.61, -26.31, -24.79, -23.08, -21.18, -19.10, -16.84, -14.40, -11.78, -8.97, -5.99, -2.81);
        }
    }

    return returns;
}