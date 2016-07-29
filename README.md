# セーブに機能追加するプラグイン  
Ver.1.02　2016/7/30

by hororo http://hororo.wp.xdomain.jp/  
  
＜機能＞  
  セーブ回りの機能を追加するプラグインです。  
    ・セーブ用キャプチャ画像をjpeg圧縮する。圧縮率も指定できます。  
    ・セーブ画面に「保護」「削除」ボタンが付きます。  
    ・セーブ失敗・成功時にアラートを出すか選択できます。  
    ・指定件数ごとにページ分けができます。  
    ・サンプルCSSを何種類か用意しました。  
    ・[font][ruby]タグなど使用時に、セーブtitleが切れてしまう現象に対応しています。  
  
＜動作確認＞ 
  ティラノスクリプトVer422 で動作確認。  
  
＜使い方＞  
  最初にsave_addfn.ksファイルを読み込んでください。  
  [call storage="save_addfn/save_addfn.ks"]  
  
  save.html、load.html ファイルは、デフォルトの tyrano/html/ 内ではなく、  
  data/other/save_addfn/ のものを使用してください。  
  
  保護チェック用画像は同じ名前で差し替える事で変更可能です。  
  
＜注意点＞  
  他のsave用プラグインとの併用はできません。  
    
  スクリプトのエンジン本体を改造していますので、Ver変更には対応できない可能性があります。  
  ブラウザによっては反映されない可能性があります。   
  
  ページ分けの "auto" は、要素サイズを正しく取得できない場合があります。  
  うまく表示されない場合は、表示件数を指定してください。
  
  当プラグインに組み込まれている、サムネイル軽量機能は、サムネイル軽量プラグインと同じものです。


＜Ver履歴＞  
1.01 ： ロード画面で「保護」「削除」ボタンを押した後、セーブ画面になってしまう不具合修正。2016/7/28  
1.02 ： 変数名・class名・フォルダ名などのミス修正。libs.jsの呼び出し方法変更しました。2016/7/30
