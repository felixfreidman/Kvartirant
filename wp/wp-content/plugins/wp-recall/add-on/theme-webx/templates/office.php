<?php
/**
 * Template office
 */

?>
<div class="webx-main webx--padding">
    <div id="webx-header">
        <div class="webx-row">

            <div class="webx-col-md-9">
                <div id="lk-conteyner"><?php do_action( 'rcl_area_top' ); ?></div>
            </div>
        </div>
    </div>


    <div id="webx-content">
        <div class="webx-row container container--horizontal">
            <div class="webx-col-md-3 container container--vertical main-container" id="main-container">
                <div class="webx-area-menu">

                    <div class="webx_phone_block container container--vertical" id="profileMenu">
                        <?php do_action( 'rcl_area_menu' ); ?>
                    </div>
                </div>
            </div>
            <div class="webx-col-md-9 container container-horizontal display-container" id="display-container">

                <div class="container container--vertical" id="personal">
                    <?php do_action( 'rcl_area_tabs' ); ?>
                </div>
                <div class="container container--vertical" id="prefs">
                    <?php do_action( 'rcl_area_tabs' ); ?>
                </div>
            </div>
        </div>
    </div>
    <div id="webx-footer"></div>
</div>