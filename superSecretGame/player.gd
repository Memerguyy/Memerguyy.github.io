extends CharacterBody2D



var maxVel = 200
var speed := 12.5
const SPEED = 200
const JUMP_VELOCITY = -400.0

@onready var Spr = $AnimatedSprite2D

func _physics_process(delta: float) -> void:
	# Add the gravity.
	if !is_on_floor():
		velocity += get_gravity() * delta	
	# Handle jump.
	if Input.is_action_just_pressed("ui_up") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var direction := Input.get_axis("ui_left", "ui_right")
	if direction:
		if velocity.x >= 200 || velocity.x <= -200:
			velocity.x = 200 * direction
		else:
			velocity.x += direction * speed
		Spr.play("walk")
		Spr.flip_h = true
	else:
		velocity.x = move_toward(velocity.x, 0, speed + (maxVel/10))
		Spr.play("idle")
		
	if direction == -1:
		Spr.flip_h = false

	move_and_slide()
