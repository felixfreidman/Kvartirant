<?php 
include_once('../../../../wp-load.php');
$user_id = $_POST['currentUserID'];

update_user_meta( $user_id,'roomAmount_pref', sanitize_text_field( $_POST['roomsAmount'] ) );
update_user_meta( $user_id,'repair_pref', sanitize_text_field( $_POST['repairPrefs'] ) );
update_user_meta( $user_id,'animals_pref', sanitize_text_field( $_POST['coliverPrefs'] ) );
update_user_meta( $user_id,'money_pref', sanitize_text_field( $_POST['budgetAmount'] ) );
update_user_meta( $user_id,'area_pref', sanitize_text_field( $_POST['areaSearch'] ) );
?>

<script>
window.location.href = 'http://localhost/kvartirant/wp/profile';
</script>