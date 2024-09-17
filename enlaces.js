const enlaces = {
    FPB: [
'https://classroom.google.com/u/1/w/NzEzMTE4ODk0Mjc0/t/all',
'https://docs.google.com/spreadsheets/d/181bPR-ZnENaUc-o0KhsBqAN-y8veY_in7vWZb1VOsaQ/edit?gid=1653558697#gid=1653558697',
'https://www.blinklearning.com/v/1726155323/themes/tmpux/launch.php#activity/4171758/63545454/407160942',
'https://www.blinklearning.com/v/1726155323/themes/tmpux/launch.php#activity/4171758/63545454/417620470'

  
    ],
    Ref: [
'https://drive.google.com/drive/u/1/folders/17AmesZVu7mzaMAl8ljpHF9JbemOiwEuJ'
    ],
    Mat4: [
'https://plus.edebe.com/epe/content/84035/detail/26189516?mode=master',
'https://epe.edebe.com/external/content/view/ff824acff9b446a9a085df0372e7afab/html5/index.html',
'https://docs.google.com/spreadsheets/d/181bPR-ZnENaUc-o0KhsBqAN-y8veY_in7vWZb1VOsaQ/edit?gid=133751144#gid=133751144',
'https://classroom.google.com/u/1/w/NzEzMTE4OTYzMzY3/t/all'


    ],
    Mat2: [
'https://epe.edebe.com/external/content/viewer/11cb3c64ed9e414c8a90e089302282bc/',
'https://docs.google.com/spreadsheets/d/181bPR-ZnENaUc-o0KhsBqAN-y8veY_in7vWZb1VOsaQ/edit?gid=2145782463#gid=2145782463',
'https://classroom.google.com/u/1/w/NzEzMTE3MzAxMzk0/t/all',
'https://epe.edebe.com/external/content/view/ed911f8ffd4a49ba9e39fc3236b1a8b4/html5/index.html'


    ],
    Mat4oracion: [
'https://classroom.google.com/w/MzM2NDIxMTYwNjha/t/all',
'https://plus.edebe.com/epe/content/84035/detail/26189516?mode=master',
'https://epe.edebe.com/external/content/view/ff824acff9b446a9a085df0372e7afab/html5/index.html',
'https://docs.google.com/spreadsheets/d/181bPR-ZnENaUc-o0KhsBqAN-y8veY_in7vWZb1VOsaQ/edit?gid=133751144#gid=133751144',
'https://classroom.google.com/u/1/w/NzEzMTE4OTYzMzY3/t/all'
    ],
    Mat2oracion: [
'https://classroom.google.com/w/MzM2NDIxMTYwNjha/t/all',
'https://epe.edebe.com/external/content/viewer/11cb3c64ed9e414c8a90e089302282bc/',
'https://docs.google.com/spreadsheets/d/181bPR-ZnENaUc-o0KhsBqAN-y8veY_in7vWZb1VOsaQ/edit?gid=2145782463#gid=2145782463',
'https://classroom.google.com/u/1/w/NzEzMTE3MzAxMzk0/t/all',
'https://epe.edebe.com/external/content/view/ed911f8ffd4a49ba9e39fc3236b1a8b4/html5/index.html'
    ],
    FyQ3: [
'https://docs.google.com/spreadsheets/d/181bPR-ZnENaUc-o0KhsBqAN-y8veY_in7vWZb1VOsaQ/edit?gid=36656964#gid=36656964',
'https://classroom.google.com/u/1/w/NzEzMTE5MDExNjY4/t/all',
'https://www.blinklearning.com/v/1726155323/themes/tmpux/launch.php#responsive/book/5866059/544165210',
'https://www.blinklearning.com/useruploads/r/a/557351900/activity_other_imported/trab_cientifico_soluc.pdf'



    ],
    FyQ2: [
'https://docs.google.com/spreadsheets/d/181bPR-ZnENaUc-o0KhsBqAN-y8veY_in7vWZb1VOsaQ/edit?gid=1385596137#gid=1385596137',
'https://classroom.google.com/u/1/w/NzEzMTE4MjcyNjMy/t/all',
'https://online.fliphtml5.com/qupd/vedn/#p=1'



    ],
    Tuto: [
'https://docs.google.com/spreadsheets/d/181bPR-ZnENaUc-o0KhsBqAN-y8veY_in7vWZb1VOsaQ/edit?gid=1195638479#gid=1195638479',
'https://classroom.google.com/u/1/w/NzEzMTE4NzA5NDM3/t/all'

    ],
    Guar: [
'https://drive.google.com/drive/u/1/folders/17AmesZVu7mzaMAl8ljpHF9JbemOiwEuJ'
    ]
};

// Mover la función aquí
function openLinks(buttonType) {
      // Abrir simultáneamente 5 pestañas nuevas
    if (enlaces[buttonType]) {
        enlaces[buttonType].forEach(url => window.open(url, '_blank'));
    }
}
