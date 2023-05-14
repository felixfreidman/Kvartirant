<?php /* Template Name: Privacy Page */?>
<?php get_header()?>
<main class="main-privacy">
    <?php
if (have_rows('privacy_repeater')):
    while (have_rows('privacy_repeater')): the_row();

        if (have_rows('privacy_headers')):
            while (have_rows('privacy_headers')): the_row();?>
    <div class="main-privacy__header"><?php the_sub_field('privacy_header_content');?></div>
    <?php if (have_rows('privacy_subheaders')):
                    while (have_rows('privacy_subheaders')): the_row();?>
    <div class="main-privacy__container">
        <div class="main-privacy__subheader"><?php the_sub_field('privacy_subheader_content');?></div>
        <div class="main-privacy__content"><?php the_sub_field('privacy_content')?>
        </div>
    </div>
    <?php endwhile;
                endif;

            endwhile;
        endif;

    endwhile;
endif;
?>
</main>
<?php get_footer()?>