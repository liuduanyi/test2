$(function() {
    // $('#yes').click(function(event) {
    //     modal('我就知道小姐姐您一定会愿意的。(^_^)', function() {
    //         $('.page_one').addClass('hide');
    //         $('.page_two').removeClass('hide');
    //         // typeWrite();
    //         fireworks();
    //
    //     });
    // });

    $('#yes').click(function(event) {
        modal('尊贵的小姐，准备好，烟花来喽！(^_^)', function() {
        $('.page_one').addClass('hide');
        $('.page_two').removeClass('hide');
        // typeWrite();
        fireworks();

    });
    });



    $('#no').click(function(event) {
        modal('哦哦，看错了，原来是刘亦菲啊！', A);
    });
});


function A() {
    modal('你俩是亲戚吧，不然为啥也这么好看', B);
}

function B() {
    modal('一定是我的童话书没合好，让公主跑出来了', C);
}

function C() {
    modal('最近迪士尼出逃的美人鱼不会是你吧', D);
}

function D() {
    modal('算了算了，你的美貌看来是个谜！', function() {
        fireworks();
    });
}
// function E() {
//     modal('这辈子都不可能让你离开我', F);
// }
//
// function F() {
//     modal('跟我走吧', G);
// }
//
// function G() {
//     modal('房产证上写你名', H);
// }
//
// function H() {
//     modal('我会做饭', I);
// }
//
// function I() {
//     modal('爱你。么么哒！', J)
// }
//
// function J() {
//     modal('行，我们去民政局登记吧', function() {
//         fireworks();
//     });
// }

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}






function K() {
    modal('shuanqiu', L)
}

function L() {
    modal('准备好，烟花来喽！(^_^)', function() {
        $('.page_one').addClass('hide');
        $('.page_two').removeClass('hide');
        // typeWrite();
        fireworks();

    });
}





function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
